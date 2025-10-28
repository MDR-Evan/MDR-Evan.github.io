/*
    2.1 Basic Data Types
*/
// alert("hi");
console.log("hello world");

/*
    2.2 Variables 사용법(const)
        - 변수 이름의 경우 camelCase를 사용
*/
const num1 = 5;
const num2 = 2;
const myName = "KJY";

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log("Hello " + myName);

/* 
    2.3 Variables 사용법(let)
        - const와 let의 차이점: const는 상수로 값 변경 불가, let은 값 변경 가능 (Java에서의 final과 일반 변수의 차이점과 유사)
        - var는 최신 자바스크립트 문법에서는 잘 사용하지 않음
        - 기본적으로 const를 쓰고 필요할 때만 let을 사용하되, var는 사용하지 않는 것을 권장
*/
let myName2 = "KJY";

console.log(myName2);
myName2 = "Kim Jin Yong";
console.log(myName2);

/* 
    2.4 Booleans
        - 프로그램 디버깅 용도로 사용하면 좋음
        - true, false, null, undefined이 있음
*/
const amIFat = true;
let something;

console.log(amIFat);
console.log(something);

/*
    2.5 Arrays
        - 배열의 경우 대괄호([ ])를 사용하여 만듦
        - 배열 안에는 다양한 데이터 타입이 올 수 있음
        - 배열의 각 아이템은 인덱스(0부터 시작)를 통해 접근 가능
        - ,(콤마)로 각 아이템을 구분

    QnA
        - 배열로 변수를 설정할 때 const로 설정해도 push가 가능한 이유는?
            -> const는 변수 자체의 재할당을 막는 것이지, 변수 내부의 데이터 변경까지 막는 것은 아님
*/
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const nonesense = [1, 2 , 'hello', true, null, false, null, undefined, myName];

console.log(daysOfWeek);
console.log(nonesense);

// 배열에서 아이템 불러오기
console.log(daysOfWeek[4]); // 'Fri'

// 배열에 아이템 추가하기
daysOfWeek.push("Sun");
console.log(daysOfWeek);

/*
    2.6 Objects
        - 객체는 중괄호({ })를 사용하여 만듦
*/
const playerName = "KJY";
const playerPoints = 0;
const playerHandsom = false;
const playerFat = "little bit";

const playerEx = ["KimJinYong", 12, false, "little bit"]; // 배열로 플레이어 정보 관리 (비효율적) 주석으로 설명 필요

const player = {
    name: "JinYong",
    points: 10,
    fat: true,
};

console.log(player);
player.fat = false;
console.log(player);

player.firstName = "Kim";
player.points = player.points + 15;
console.log(player);

/*
    2.7 ~ 2.8 Functions
 */
function sayHello(name, age) {
    console.log("Hello my name is " + name + "and I'm " + age);
}
sayHello("KJY", 22);
sayHello("GJY", 26);
sayHello("PSM", 24);

function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const person = {
    name: "KJY",
    sayHello: function (personName) {
        console.log("Hello " + personName + " nice to meet you!");
    },
};

console.log(person.name);
person.sayHello("LCY");

/*
    2.11 Returns
        - 함수를 통해 값을 반환(return)할 수 있음
*/
const calculator = {
    add: function (a, b) {
        return(a + b);
    },
    minus: function (a, b) {
        return(a - b);
    },
    multiply: function (a, b) {
        return(a * b);
    },
    divide: function (a, b) {
        return(a / b);
    },
    power: function (a, b) {
        return(a **a);
    },
    remainder: function (a, b) {
        return(a % b);
    },
};
const result = calculator.add(54, 22);
console.log(result);

let age = 22;
function calculatorKr(ageOfForeign) {
    return ageOfForeign + 2;
}
const krAge = calculatorKr(age);
console.log(krAge);

/*
    2.13 ~ 2.14 Conditionals
        - parseInt(): 문자열을 정수로 변환
        - isNaN(): 값이 숫자인지 아닌지 판별 및 true/false 반환
        - and(&&): a와 b중 하나라도 true가 있으면 true 반환
        - or(||): a와 b가 모두 true일 때만 true 반환
        - ===: 값과 타입이 같은지 비교
*/
// age = prompt("How old are you?");
console.log(typeof age, typeof parseInt(age));

// age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    console.log("Please write a positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age >= 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("Wow you are wise");
} else {
    console.log("You can do whatever you want");
}

