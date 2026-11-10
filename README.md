# Node.js Runtime Lab

Node.js Core만으로 런타임 동작을 이해하고 파일 처리 HTTP 서버를 구현하는 일주일 실습 공간입니다.

## 시작하기

외부 패키지 설치는 필요하지 않습니다. JavaScript 파일은 ESM으로 실행합니다.

```sh
node --version
npm run experiment:event-loop
```

첫 실습 파일은 주석만 있는 상태입니다. [Day 1 기록](docs/daily/day-01.md)에 예상 결과부터 적고 직접 작성하세요.

## 폴더 안내

- `src/`: 최종 파일 처리 HTTP 서버 구현
- `experiments/`: 런타임 실험 코드
- `tests/`: node:test 기반 검증 코드
- `docs/daily/`: 날짜별 예측·관찰·리뷰 기록
- `docs/learning-guide.md`: 일주일 일정과 Notion 관리 지침
- `tmp/`: 대용량 실험 파일과 임시 데이터, Git 제외
- `uploads/`: 업로드 파일 저장 공간, Git 제외

[Notion 학습 페이지](https://www.notion.so/414c041b70ec8100bb1ac27507f18bff)와 [상세 학습 지침](docs/learning-guide.md)을 함께 참고합니다.

## 학습 방식

개념 설명 → 실행 결과 예측 → 직접 구현 → 결과 분석 → 코드 리뷰 순서로 진행합니다.
정답 코드를 먼저 작성하지 않고 직접 추론하고 구현합니다.

## 커리큘럼

아래 3개 주제를 2026-11-10~2026-11-16에 하루 2시간씩 나눠 학습합니다. 세부 일정은 상세 학습 지침에 있습니다.

- Day 1~2: V8, libuv, Event Loop, Promise와 nextTick, CPU 블로킹, Worker Threads
- Day 3~5: HTTP 요청과 응답, Buffer, 파일 업로드와 다운로드, Stream과 Backpressure, 메모리 측정, 오류 재현
- Day 6~7: 타임아웃, SIGTERM과 정상 종료, 자동 테스트와 회고

## 환경

Node.js LTS, JavaScript ESM, curl, VS Code를 사용합니다.
외부 패키지, 프레임워크, 데이터베이스는 이번 과정에서 제외합니다.

## 최종 목표

Node.js Core만으로 파일 처리 HTTP 서버를 구현하고, 동시 요청·메모리·오류·종료 동작을 실험으로 설명합니다.

- [ ] V8, libuv, Event Loop의 역할 설명
- [ ] Promise, nextTick, setImmediate의 실행 순서 구분
- [ ] CPU 연산과 비동기 I/O 비교 실험
- [ ] Worker Thread가 필요한 상황 설명
- [ ] 프레임워크 없는 HTTP 서버 구현
- [ ] Stream과 Buffer의 메모리 비교
- [ ] Backpressure 재현
- [ ] 동기·비동기·Stream 오류 처리
- [ ] 프로세스 종료 시 진행 중인 요청 정리
- [ ] node:test로 주요 API 검증
