//never 는
//쓸때가 없다..
//내 코드를 분석해서 네버타입이 뜬다면 뭔가 잘못된것이니가 수정해보자

//이런거 1
function never(): never {
  while (true) {}
}

//이런거 2
function typeErr(): never {
  throw new Error("err");
}

//이런거 3l
function 함수() {
  //요건 보이드
  throw new Error();
}

let 함수2 = function () {
  //요건 네버 표현식은 네버
  throw new Error();
};

//이런거 4

function asdfg(parameter: string) {
  if (typeof parameter === "string") {
    parameter + 1;
  } else {
    parameter; //<--- 요개 내봃ㄷ함 어짜피 쓸모도 없는거
  }
}
