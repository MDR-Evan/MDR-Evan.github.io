const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saveUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();  // 브라우저에서 실행하는 기본 동작 막기(form에서의 submit 시 새로고침 방지)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);  // 로컬 스토리지에 username 키로 userName 값 저장
    paintGreetings(userName);
    
    console.log(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;   // 백틱(``)을 사용하여 문자열과 변수 결합
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUserName);
}

console.log(saveUserName);