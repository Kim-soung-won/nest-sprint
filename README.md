# Node.js Runtime Lab

Node.js Core만으로 런타임 동작을 이해하고 파일 처리 HTTP 서버를 구현하는 3일 실습 공간입니다.

## 학습 방식

개념 설명 → 실행 결과 예측 → 직접 구현 → 결과 분석 → 코드 리뷰 순서로 진행합니다.
정답 코드를 먼저 작성하지 않고 직접 추론하고 구현합니다.

## 커리큘럼

- DAY 1: V8, libuv, Event Loop, Promise와 nextTick, CPU 블로킹, Worker Threads
- DAY 2: HTTP 요청과 응답, Buffer, 파일 업로드와 다운로드, Stream과 Backpressure, 메모리 측정
- DAY 3: 예외와 Promise rejection, Stream 오류, 타임아웃, SIGTERM과 정상 종료, 자동 테스트

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
