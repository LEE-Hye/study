# 📃 Checklist 02. CSS의 기초와 응용

💌 Quest 02. 목차

[1. CSS를 HTML에 적용하는 세 가지 방법](#1-css를-html에-적용하는-세-가지-방법은-무엇일까요)  
[2. CSS 규칙의 우선순위](#2-css-규칙의-우선순위는-어떻게-결정될까요)     
[3. CSS의 박스모델](#3-css의-박스모델은-무엇일까요)  
[4. float 속성은 왜 좋지 않을까](#4-float-속성은-왜-좋지-않을까요)  
[5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점](#5-flexboxflexible-box와-css-grid의-차이와-장단점은-무엇일까요)  
[6. CSS의 비슷한 요소들을 어떤 식으로 정리](#6-css의-비슷한-요소들을-어떤-식으로-정리할-수-있을까요)


---

## 💛1. CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
### 세 가지 방법 각각의 장단점은 무엇일까요?
1. 인라인(Inline) 스타일  
    해당 태그에 `style` 속성 기입
    
    `<index.html>`
    ```html
    <body>
        <p style="font-size: 14px;">결과 : 인라인 스타일입니다.<p>
    </body>
    ```

    >#### 결과 : 인라인 스타일입니다.

    <br>

    - 장점  
    ①. 빠르게 css를 넣어서 볼 수 있다.  
    ②. 파일을 따로 만들어서 적을 필요 없다.  
    ③. 우선 순위가 첫 번째여서 

    <br>

    - 단점  
    ①. html 구조가 복잡하게 보인다.  
    ②. 같은 css적용하려고 할 때 문장마다 적용해줘야 한다.  
    ③. 다른 html 파일에는 적용 불가능

<br><br>

---

2. 내부(Internal) 스타일 시트  
    `<head>` 태그 안에 `<style>` 태그 기입

    `<index.html>`
    ```html
    <head>
        <style>
            p{
                font-size: 20px;
            }
        </style>
    </head>

    <body>
        <p>결과 : 내부 스타일 시트입니다.</p>
    </body>
    ```

    >## 결과 : 내부 스타일 시트입니다.

    <br>

    - 장점  
    ①. 선택자를 사용해서 같은 css를 줄 수 있다.  
    ②. html 파일 내에서 작성하기 때문에 파일을 따로 만들어서 적을 필요 없다.  
    ③. 다른 html 파일에는 적용 불가능

    <br>
    
    - 단점  
    ①. 파일 개수가 많아져 더 어려워질 수 있다.  
    ②. 하나의 코드를 바꾸려 해도 모든 html파일에서 바꿔줘야 한다.

<br><br>

---

3. 외부(External) 스타일 시트
`<link>` 태그를 활용해서 별도의 css파일을 만들어서 연결해줌

    `<index.html>`
    ```html
    <head>
        <link rel="stylesheet" href="index.css">
    </head>

    <body>
        <p>결과 : 외부 스타일 시트입니다.<p>
    </body>
    ```

    `<index.css>`
    ```css
    p{
        font-size: 30px;
    }
    ```

    ># 결과 : 외부 스타일 시트입니다.
    
    <br>

    - 장점  
    ①. html 파일 구조가 깔끔  
    ②. 코드 재활용 가능  
    ③. 일관된 웹페이지 작성  
    ④. 다수의 웹 페이지 연결 가능

    <br>
    
    - 단점  
    ①. 외부 css파일이 로드되기 전까지 페이지가 올바르게 표시되지 않는다.  
    ②. 여러 css파일을 연결하면 사이트 다운로드 시간이 증가한다.

<br><br><br>

---
---
## 💛2. CSS 규칙의 우선순위는 어떻게 결정될까요?

1. `!important`
2. `인라인`
3. `id`
4. `클래스`
5. `태그`
6. `*`
7. `상속`
8. 같은 점수면 나중에 적용한 것이 우선

---

>### 1. `!important`
- 모든 선언을 무시하고 가장 우선
- 점수 : ∞

```css
p{background-color:skyblue !important;}
```

>### 2. `인라인`
- html 파일 내 태그에 style 속성 적용
- 점수 : 1000pt

```css
<p style="background-color:lightgray>혜빈zz6</p>
```

>### 3. `id`
- 태그에 아이디 지정 후 아이디 선택자 사용
- 점수 : 100pt

```css
#hyebin_color{
    background-color:white;
}
```

>### 4. `.클래스`
- 태그에 클래스 지정 후 클래스 선택자 사용
- 점수 : 10pt

```css
.hyebin_color{
    background-color:white;
}
```

>### 5. `태그`
- 태그 선택자
- 점수 : 1pt

```css
p{
    background-color:black;
}
```

>### 6. `*`
- 전체 선택자
- 점수 : 0pt

```css
*{
    background-color: lightblue;
}
```

>### 7. `상속`
- 상속 받은 속성은 가장 마지막  
ex) color, text-align, text-indent 등 주로 글자를 다루는 속성에 적용

>### 8. 같은 점수면 나중에 적용한 것이 우선
- 점수 매기기 예시

```css
.class,#id{color:blue;} /*10 + 100 = 110*/
p,.class2,li:hover{color:red} /*1 + 10 +10 = 21*/
```
---

### [정리]

|우선순위|속성|점수|
|:---:|:---:|:---:|
|0|!important|∞|
|1|인라인 스타일|1000|
|2|id|100|
|3|class|10|
|4|태그|1|
|5|*|0|
|6|상속|무조건 맨 마지막|


<br><br><br>

---
---
## 💛3. CSS의 박스모델은 무엇일까요? 
> ### 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
- 박스모델이란❓
    - 모든 html 요소는 박스 모양으로 구성되는 것

![박스모델](https://user-images.githubusercontent.com/91482127/198943008-8fe6eaa1-ce0e-4cc6-b8d6-3311037a41fa.jpg)


<br>

- `margin`,` border`,` padding`,` content`로 구분

|구분|설명|
|:---:|:---:|
|margin(마진)|**테두리의 바깥쪽** 간격|
|border(테두리)|**내용과 패딩을 감싸**는 테두리|
|padding(패딩)|**내용과 테두리 사이** 간격|
|content(내용)|**텍스트나 이미지**가 들어가있는 **홈페이지에 나타나는** 부분|

---

<br>

```css
p{
    width : 50px;
    height : 50px
    padding : 10px;
    border : 1px solid black;
    margin : 10px;
}
```

![박스모델크기](https://user-images.githubusercontent.com/91482127/198942998-5957bb6e-b795-49c1-9cec-23c051cea49b.jpg)


<br><br><br>

---
---
## 💛4. float 속성은 왜 좋지 않을까요?




<br><br><br>

---
---
## 💛5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?



<br><br><br>

---
---
## 💛6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
    
- 같은 CSS를 주려면 선택자로 묶어주면 된다.
    ##### 선택자: CSS로 스타일을 주기 위해 선택자를 통해 해당 요소를 선택한다.

* 종류

1. 태그 선택자
2. 클래스 선택자
4. 자식 선택자
5. 자손 선택자
7. 형제 선택자
8. 그룹 선택자
9. 가상 클래스 선택자
10. 수열 선택자
11. 상태 선택자
12. 속성 선택자
13. 그외 선택자
