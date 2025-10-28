const quotes = [
    {
        quote: "말은 쉽다. 코드를 보여달라.",
        author: "리누스 토르발스",
    },
    {
        quote: "프로그램은 사람이 읽을 수 있도록 작성되어야 하며, 기계가 실행하는 것은 부차적인 일이다.",
        author: "해럴드 에이블슨",
    },
    {
        quote: "섣부른 최적화는 모든 악의 근원이다.",
        author: "도널드 크누스",
    },
    {
        quote: "어떤 바보도 컴퓨터가 이해할 수 있는 코드를 작성할 수 있다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성한다.",
        author: "마틴 파울러",
    },
    {
        quote: "먼저 문제를 해결하라. 그런 다음 코드를 작성하라.",
        author: "존 존슨",
    },
    {
        quote: "단순함은 궁극의 정교함이다.",
        author: "레오나르도 다빈치",
    },
    {
        quote: "코드는 유머와 같다. 설명해야 한다면, 그건 나쁜 것이다.",
        author: "코리 하우스",
    },
    {
        quote: "미래를 예측하는 가장 좋은 방법은 미래를 발명하는 것이다.",
        author: "앨런 케이",
    },
    {
        quote: "프로그래밍 진행 상황을 코드 라인 수로 측정하는 것은 항공기 제작 진행 상황을 무게로 측정하는 것과 같다.",
        author: "빌 게이츠",
    },
    {
        quote: "프로그램의 가장 중요한 속성은 사용자의 의도를 달성했는지 여부이다.",
        author: "C.A.R. 호어",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;