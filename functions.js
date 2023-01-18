'use strict';

// 1. 함수, 리뷰!
// 1️⃣ 일련의 코드 묶음(코드 재사용성 증가)
// 2️⃣ 입력에 따른 결과 반환(like a 자판기)
// 3️⃣ 함수 호출 시, 실행 흐름은 함수 내부로 이동
// 4️⃣ 함수 종료 시, 실행 흐름은 이전 위치로 되돌아감

// 선언부(function declation): 함수를 정의한 영역
function sayHi(username) {
  console.log(`안녕하세요, ${username}입니다.`);
  return undefined;
}

// 호출부(function call): 함수를 사용(실행)하는 영역
sayHi("지수");
sayHi("명진");
sayHi("주환");

function cube(num) {
  return num ** 3;
}

const a = cube(2);
const b = cube(3);
console.log(`a = ${a}, b = ${b}`);

// 2. 파라미터, 입력값을 저장하는 변수!
// 필요에 따라 개수 조절 가능
// 라면 생성 자판기(함수): 선택 불가(파라미터: 0개)
function createRamen() {
  return "🍜라면";
}
const ramen = createRamen();
console.log(ramen);

// 만두 생성 자판기(함수): 재료 1개 선택 가능(파라미터: 1개)
function createMandoo(ingredient) {
  return `🥟 ${ingredient}만두!`;
}
const mandoo1 = createMandoo("고기");
const mandoo2 = createMandoo("새우");

console.log(mandoo1);
console.log(mandoo2);

// 김밥 생성자판기(함수): 재료 2개 선택 가능(파라미터: 2개)
function createKimbab(a, b) {
  return `🍙 ${a}${b}김밥`;
}

const kimbab1 = createKimbab("참치", "김치");
console.log(kimbab1);

// 3. return, 함수 종료와 동시에 값을 반환!
// 1️⃣ return 우측 값을 반환
// 2️⃣ return 생략하면? -> undefined 자동 반환
function test() {
  console.log("나는 값을 반환하지 않아!!");
  // return undefined; // 생략 가능
}
console.log(test());

// 4. 스코프(scope), 변수의 활동 범위
// 1️⃣ 프로그램은 실행 흐름에 따라 변수를 관리함
//   > 함수 호출 => 파라미터와 지역변수를 만든다.
//   > 함수 종료 => 파라미터와 지역변수를 지운다.
function changeParameterX(x) {
  x = x+3;
  console.log(`x = ${x}`);
}

changeParameterX(30);
// console.log(x); // error

// 2️⃣ 지역변수란, 함수 또는 블럭(중괄호) 내부에 선언된 변수
function changeLocalVariableY(n) {
  let y = n+1; // 지역변수 y
  console.log(`y = ${y}`);
}
changeLocalVariableY(20);

// 3️⃣ 이름은 같지만 스코프가 다른 경우,
function changeLocalVariableZ(n) {
  let z = n;
  console.log(`local z = ${z}`);
}

let z = 7;
console.log(`global z = ${z}`);
changeLocalVariableZ(3);
console.log(`global z = ${z}`);
