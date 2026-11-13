const interval = setInterval(() => {
  console.log("다른 작업");
}, 500);

setTimeout(() => {
  console.log("작업 완료");
  clearInterval(interval);
}, 2000);