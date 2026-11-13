import { Worker } from "node:worker_threads";

// 학습용 풀: FIFO 대기 큐, Worker 재사용, 오류 시 풀 전체 중단.
export function createWorkerPool({ size = 2, maxQueue = 10 } = {}) {
  const queue = [];
  const slots = [];
  let nextId = 1;
  let failure;

  function dispatch() {
    for (const slot of slots) {
      if (!slot.ready || slot.task || queue.length === 0) continue;
      const task = queue.shift();
      slot.task = task;
      console.log(`[start] task=${task.id} worker=${slot.id} waiting=${queue.length}`);
      slot.worker.postMessage({ id: task.id });
    }
  }

  function stop(error) {
    if (failure) return;
    failure = error;
    for (const task of queue.splice(0)) task.reject(error);
    for (const slot of slots) {
      slot.task?.reject(error);
      slot.task = null;
      void slot.worker.terminate();
    }
  }

  for (let id = 1; id <= size; id++) {
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    const slot = { id, worker, ready: false, task: null };
    slots.push(slot);

    worker.on("message", (message) => {
      if (failure) return;
      if (message.type === "ready") {
        slot.ready = true;
        console.log(`[ready] worker=${id}`);
        dispatch();
        return;
      }
      const task = slot.task;
      if (!task || message.id !== task.id) {
        stop(new Error("Unexpected Worker result"));
        return;
      }
      console.log(`[done] task=${task.id} worker=${id}`);
      slot.task = null;
      task.resolve(message.result);
      dispatch();
    });
    worker.once("error", stop);
    worker.once("exit", (code) => {
      stop(new Error(`Worker ${id} exited (code ${code})`));
    });
  }

  return {
    run() {
      if (failure) return Promise.reject(failure);
      if (queue.length >= maxQueue) {
        return Promise.reject(Object.assign(new Error("Worker queue full"), { statusCode: 503 }));
      }
      return new Promise((resolve, reject) => {
        const task = { id: nextId++, resolve, reject };
        queue.push(task);
        dispatch();
        if (queue.includes(task)) {
          console.log(`[queued] task=${task.id} waiting=${queue.length}`);
        }
      });
    },
  };
}
