# 📖 Quest 01. HTML과 웹의 기초 Quest & 정리


## HTML5

- 시멘틱 웹으로 시멘틱 웹은 컴퓨터가 페이지를 해석할 때 의미를 알 수 있는 태그를 쓰는것이다.

## HTML5 레이아웃

- `<header>` : 머리글을 뜻함 / `<nav>`를 담는 용도

- `<nav>` : 메뉴 / 다른 페이지로 이동

- `<aside>` : 사이드 메뉴 / 본문과 구분되는 별도의 구역

- `<article>` : 기사 영역 / 본문의 주 내용이 들어감 / 독립된 내용의 실제 컨텐츠  
ex) 포럼 포스트, 블로그 포스트, 보도기사, 논평

- `<section>` : 특정 탭이 가리키는 영역 등 유사 내용을 담음 / 맥락에 따라 주제별로 컨텐츠를 묶음

- `<footer>` : 작성자, copyright, 문서 링크 정보

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
