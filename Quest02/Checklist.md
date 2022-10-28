# 📃 Checklist 02. CSS의 기초와 응용

<details><summary>💌 Quest 02. 목차</summary>

[1. CSS를 HTML에 적용하는 세 가지 방법](#1-css를-html에-적용하는-세-가지-방법은-무엇일까요)  
[2. CSS 규칙의 우선순위](#2-css-규칙의-우선순위는-어떻게-결정될까요)     
[3. CSS의 박스모델](#3-css의-박스모델은-무엇일까요)  
[4. float 속성은 왜 좋지 않을까](#4-float-속성은-왜-좋지-않을까요)  
[5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점](#5-flexboxflexible-box와-css-grid의-차이와-장단점은-무엇일까요)  
[6. CSS의 비슷한 요소들을 어떤 식으로 정리](#6-css의-비슷한-요소들을-어떤-식으로-정리할-수-있을까요)

</details>

---

## 1. CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
### 세 가지 방법 각각의 장단점은 무엇일까요?
1. 인라인(inline) 방식  
    해당 태그에 `style` 속성 기입
    
    `<index.html>`
    ```html
    <body>
        <p style="font-size: 14px;">인라인 태그입니다.<p>
    </body>
    ```
    >#### 인라인 태그입니다.

<br>

2. 내부 스타일 시트  
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
        <p>내부 스타일 시트 방법입니다.</p>
    </body>
    ```
    >## 내부 스타일 시트 방법입니다.

<br>

3. 외부 스타일 시트  
`<link>` 태그를 활용해서 별도의 css파일을 만들어서 연결해줌

    `<index.html>`
    ```html
    <head>
        <link rel="stylesheet" href="index.css">
    </head>

    <body>
        <p>외부 스타일 시트 방법입니다.<p>
    </body>
    ```

    `<index.css>`
    ```css
    p{
        font-size: 30px;
    }
    ```
    ># 외부 스타일 방법 시트 방법입니다.

<br><br>
---
## 2. CSS 규칙의 우선순위는 어떻게 결정될까요?

---
## 3. CSS의 박스모델은 무엇일까요? 
> ### 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?

---
## 4. float 속성은 왜 좋지 않을까요?

---
## 5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?

---
## 6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?