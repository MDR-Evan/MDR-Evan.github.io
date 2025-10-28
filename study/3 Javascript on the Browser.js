/*
    3.0 The Document Object
        - document는 브라우저가 제공하는 기본 객체(Object)로, HTML 문서와 상호작용할 수 있게 해줌
*/
document.title = "Javascript for Beginners";

/*
    3.1 HTML in Javascript'
        - HTML 요소를 자바스크립트로 조작하는 방법
*/
const title = document.getElementById("title");
console.dir(title);

title.innerText = "innerText로 수정";

console.log(title.id);
console.log(title.className);

/*
    3.2 Searching For Elements
*/
const hellos = document.getElementsByClassName("hello");
const subtitle = document.getElementsByTagName("h2");
const search = document.querySelector(".hello h2");
const searchAll = document.querySelectorAll(".hello h2");

console.log(hellos);
console.log(subtitle);
console.log(search);
console.log(searchAll);

search.innerText = "Hello";

/*
    3.3 ~ 3.5 Events
        - 이벤트 리스너 검색방법
            1. element의 이름을 MDN(Mozilla Developer Network)에서 검색 -> ex) h1 html element mdn
            2-1. Web APIs -> Event Reference에서 이벤트 종류 확인 가능
            2-2. console.dir(element)에서 on으로 시작하는 이벤트 확인 가능 -> 사용시 on 제거 후 입력
*/
// title.style.color = "Yellow";

function handleTitleClick() {
    title.style.color = "red";
    console.log("Title was clicked!");
}

function handleMouseEnter() {
    title.style.color = "green";
    console.log("Mouse is here!");
}

function handleMouseLeave() {
    title.style.color = "black";
    console.log("Mouse is gone!");
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffine() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffine);
// window.addEventListener("online", handleWindowOnline);

/*
    3.6 ~ 3.8 CSS in Javascript
        - element를 찾아서 event를 발생시켜 스타일을 변경하는 예제
*/
function exCheckClicked() {
    console.log(title.style.color);
    title.style.color = "blue";
    console.log(title.style.color);
}

function checkClicked() {
    const currentColor = title.style.color;
    let newColor;

    if (currentColor === "yellow") {
        newColor = "blue";
    } else {
        newColor = "yellow";
    }

    title.style.color = newColor;
}

// title.addEventListener("click", checkClicked);

function handleTitleClick2() {
    const clickedClass = "clicked sexy-font";
    if (title.className === clickedClass) {
        title.className = "";
    } else {
        title.className = clickedClass;
    }
}

// title.addEventListener("click", handleTitleClick2);

function handleTitleClick3() {
    const clickedClass = "clicked";
    if (title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
}

// title.addEventListener("click", handleTitleClick3);

function handleTitleClick4() {
    title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick4);