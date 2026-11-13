// Day 2 · CPU 블로킹과 동시 요청
// /fast: 즉시 응답, /cpu: Worker에서 약 3초간 계산 후 응답
// 실행: npm run experiment:cpu-blocking
// 다른 터미널: curl -i http://127.0.0.1:3000/fast
import { createServer } from "node:http";
import { createWorkerPool } from "./worker-pool.js";

const pool = createWorkerPool({ size: 2, maxQueue: 10 });

const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.url === "/fast") {
    res.end("fast");
    return;
  }

  if (req.url === "/cpu") {
    try {
      // 이 요청의 콜백이 결과를 기다리는 동안 다른 요청을 처리할 수 있습니다.
      const result = await pool.run();
      if (!res.destroyed) res.end(result);
    } catch (error) {
      if (!res.destroyed) {
        res.statusCode = error.statusCode ?? 500;
        res.end(res.statusCode === 503 ? "Worker queue full" : "Worker calculation failed");
      }
    }
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(Number(process.env.PORT ?? 3000), "127.0.0.1");
