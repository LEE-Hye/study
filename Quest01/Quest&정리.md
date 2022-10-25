# 📖 Quest 01. HTML과 웹의 기초 Quest & 정리


## HTML

- 마크업 언어
    - 태그를 이용해 문서나 데이터 구조를 명시

---

## 브라우저 동작 방식
1. HTML을 읽기 시작
2. HTML 파싱
3. DOM 트리 생성
4. Render 트리 생성
5. Display에 표시

---

## 요소

- `<p>Hello World</p>`
    - `<p>` : Opening tag(여는 태그)
    - `Hello World` : Content(본문, 내용)
    - `</p>` : Closing tag(닫는 태그)  
    -> 위 전체를 `Element` 라고 함

---

## HTML 요소 타입
- 블록(block)요소 : `dispaly:block;`

    - 해당 행의 모든 너비 차지  
    ex) `<p> <div> <h> <ul> <ol> <li> <form> <header> <nav> <article> <section> <footer>`

    - `width, height, margin, padding` 등 사용해서 레이아웃 수정 가능

    - `text-align` 적용 안됨

        - `<div>` : 요소들의 스타일을 한 번에 적용하기 위해 사용
    
    - 상하좌우 마진 & 패딩 가능

    - 가운데 정렬 방법은 `margin: auto;`

<br>


- 인라인(inline)요소 : `display:inline;`

    - 해당 HTML 요소의 내용 너비 차지  
    ex) `<a> <img> <input> <label> <span> <strong>`

    - 컨텐츠가 끝나는 지점가지 넓이로 가지기 때문에 `width, height` 변형 불가능

    - `line-hegith`로 줄 높낮이 조절 가능

    - `text-align`으로 텍스트 중앙, 좌측, 우측 정렬 가능

        - `<span>` : 특정 부분에 따로 스타일을 적용하기 위해 사용

    - 상하 마진 적용 불가능, 좌우 마진 & 상하좌우 패딩 가능

    - 가운데 정렬 방법은 부모 요소에 `text-align: center`

---


## `<button>` & `<a>`

- `<button>` : 특정한 액션을 위해

- `<a>` : 어디론가 이동할 때(링크)

---

## HTML5

- 시멘틱 웹으로 시멘틱 웹은 컴퓨터가 페이지를 해석할 때 의미를 알 수 있는 태그를 쓰는것이다.

---

## Semantic 태그

1. 검색엔진 최적화
2. 웹 접근성 향상
3. 가독성 향상

---

## HTML5 레이아웃

![레이아웃](https://user-images.githubusercontent.com/91482127/197447531-91719a06-346b-4e69-ab6d-c4c2c9254a90.png)

- `<header>` : 머리글을 뜻함 / 도입부에 해당하는 콘텐츠나 네비게이션 링크 집합

- `<nav>` : 메뉴 / 다른 페이지로 이동

- `<main>` : 전체 컨텐츠 

- `<aside>` : 사이드 메뉴 / 본문과 구분되는 별도의 구역

- `<article>` : 기사 영역 / 본문의 주 내용이 들어감 / 독립된 내용의 실제 컨텐츠  
ex) 포럼 포스트, 블로그 포스트, 보도기사, 논평

- `<section>` : 특정 탭이 가리키는 영역 등 유사 내용을 담음 / 맥락에 따라 주제별로 컨텐츠를 묶음

- `<footer>` : 작성자, copyright, 문서 링크 정보 등

---

## `<div>` & `<section>` & `<article>`

- `<div>` 
    - 의미가 없음
    - 다른 요소를 묶어 꾸미기 쉽게 돕거나 구역 구분

- `<section>`
    - 관계 있는 문서 하나로 묶음
    - 글을 구분하는 데 사용, 단락의 개념
    - 컨텐츠를 구역별로 다룸
    - `<h2> ~ <h6>` 요소 중 한 개를 포함시키는 걸 권장

- `<article>`
    - 독립적으로 구분해 배포하거나 재사용 가능  
    ex) 게시판, 블로그 글, 뉴스 기사 등
    - `<h2> ~ <h6>` 요소 중 한 개를 포함시키는 걸 권장
    - 개별 문서의 제목과 본문 정의
    - 반복되는, 재사용이 가능한 부분

---


