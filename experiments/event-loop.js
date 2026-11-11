// Day 1: 실행하기 전에 docs/daily/day-01.md에 예상 순서와 이유를 적으세요.
// console.log('A'), console.log('G')와 다음 콜백들을 배치하세요.
// setTimeout(0): B / setImmediate: C / Promise.then: D / process.nextTick: E
// 현재는 주석만 있으므로 실행해도 출력되지 않습니다.
// 첫 관찰 후 파일 I/O를 추가해 콜백 내부의 실행 순서도 비교하세요.

// Ver1을 실행하니까 실행 결과가 뒤죽박죽으로 나온다.
// 1. 동기 시작
// 동기 끝
// 4. Promise Then
// 5. nextTick
// 3. setImmediate
// 2. setTimeout
const eventLoopParent = () => {
  
}
const eventLoopVer1 = () => {
  console.log("// 1. 동기 시작");

  setTimeout(() => {
    console.log("// 2. setTimeout");
  }, 0)

  setImmediate(() => {
    console.log("// 3. setImmediate")
  })

  Promise.resolve().then(()=> {
    console.log("// 4. Promise Then")
  })

  process.nextTick(() => {
    console.log("// 5. nextTick")
  })

  console.log("// 6. 동기 끝")
}
eventLoopVer1()