# 런타임 실험

코드는 이 폴더에, 예측과 관찰 기록은 ../docs/daily/에 남깁니다.

| 학습일 | 작성할 파일 | 실험 |
| --- | --- | --- |
| Day 1 | event-loop.js | ESM 실행 순서 예측과 비교 |
| Day 2 | cpu-blocking.js | /fast와 /cpu 동시 요청 지연 |
| Day 2 선택 | worker.js | Worker Thread로 CPU 연산 분리 |
| Day 4 | stream-memory.js | Buffer와 Stream의 메모리 측정 |
| Day 5 | backpressure.js | write 반환값과 drain 관찰 |

event-loop.js는 주석만 있는 시작 파일입니다. 다른 파일은 해당 실습에서 직접 만듭니다.
대용량 테스트 파일은 ../tmp/에 생성하고 Git에는 넣지 않습니다.
