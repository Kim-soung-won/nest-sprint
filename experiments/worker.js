import { parentPort } from "node:worker_threads";

// 다음 작업도 받을 수 있도록 계산 후에도 Worker를 종료하지 않습니다.
parentPort.on("message", ({ id }) => {
  const end = Date.now() + 3000;
  while (Date.now() < end) {}

  // HTTP 응답 객체는 보내지 않고 작업 번호와 결과만 돌려줍니다.
  parentPort.postMessage({ type: "result", id, result: "ok" });
});

parentPort.postMessage({ type: "ready" });
