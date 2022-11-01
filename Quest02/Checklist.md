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
        <p style="background-color: lightblue;">결과 : 인라인 스타일입니다.</p>
    </body>
    ```

    >> ![인라인](https://user-images.githubusercontent.com/91482127/199136402-980036c0-a8bb-4756-a87a-e0d8a9d8a8ef.PNG)

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
                background-color: lightgreen;
            }
        </style>
    </head>

    <body>
        <p>결과 : 내부 스타일 시트입니다.</p>
    </body>
    ```

    >> ![내부](https://user-images.githubusercontent.com/91482127/199136420-7c1596a6-6a08-4b48-b9c3-4aa67ee231c1.PNG)

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
        background-color: lightsalmon;
    }
    ```

    >> ![외부](https://user-images.githubusercontent.com/91482127/199136437-10137cbb-4685-492d-88ed-7344e564d1a9.PNG)

    
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
    - 모든 html 요소가 박스 모양으로 구성되는 것

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

`<예시>`
```css
div{
    width : 50px;
    height : 50px;
    padding : 10px;
    border : 1px solid orange;
    margin : 10px;
}
```

![박스모델크기](https://user-images.githubusercontent.com/91482127/198942998-5957bb6e-b795-49c1-9cec-23c051cea49b.jpg)

- 위 예시와 같이   
box크기 = content + padding + border + margin

<br><br><br>

---
---
## 💛4. float 속성은 왜 좋지 않을까요?

- 기본적으로 자식 content가 늘어나면 부모의 height가 자동으로 늘어나는데   float를 사용하면 자식 요소의 크기를 인식할 수 없게 된다.

`<예시 : html>`
```html
<div class="parent">
	여기는 부모
	<div class="child">
		여기는 자식<br>
		자식 둘째줄
	</div>
</div>
```
`<예시 : float 미사용시>`
```css
	<style>
	.parent{
	    	background-color: gold;
			border: 1px solid;
	}
	.child{
			border: 1px solid;
	}
	</style>
```

>![float미사용시](https://user-images.githubusercontent.com/91482127/198948307-f6005868-d418-4a2b-9e69-634f77ab2493.png)


`<예시 : float 사용시>`
```css
<style>
    .parent{
        background-color: gold;
		border: 1px solid;
	}
	.child{
        float:left;
		border: 1px solid;
	}
	</style>
```

>![float사용시](https://user-images.githubusercontent.com/91482127/198948331-c8769398-ce58-4ddd-8706-fe5dfa86ae32.png)

<br>

>> ① float가 적용되면 nomal flow에서 제외  
>> ② 자식 요소의 크기를 인식할 수 없음

<br>

---
<details>
<summary>🟢문제점 해결 방법🟢</summary>

<br>

![레이아웃](https://user-images.githubusercontent.com/91482127/198955729-4ffb7a3a-7f93-4364-ac18-da1ed5a97e3b.png)


	
>`.container`가 `aside`와 `main content`의 부모  
>`aside`에 `float:left;` 적용  
>`main content`에 `float:right;` 적용

<br>

---

<br>

1. float 요소 부모(.container)에 `overflow:hidden` 적용
```css
.container {
    overflow:hidden;
}
```

- 자식 요소가 nomal flow가 아니어도 인식 가능
    ##### nomal flow : html코드 순서의(왼쪽에서 오른쪽, 위에서 아래) 흐름으로 배치한 레이아웃 기법
    - 단점 : container를 벗어나는 요소를 숨김

    <br>

---    

2. float 다음 요소(footer)에 `clear:both` 적용
```css
.footer {
  clear: both;
}
```

- 레이아웃이 다시 nomal flow 인식 가능 > float 해제(clear)라고 함

    <br>

---    

3. float 다음 요소에 형제 `div.null` 이라는 요소를 만들고 `clear:both` 적용
```css
.null {
  clear: both;
}
```

- 2의 문제가 footer 앞에 새로운 형제 요소가 생겨버리면 그때마다   `clear:both`를 다시 입력해줘야 함  
=> float가 적용된 요소와 그 부모 요소 내에서 float를 해제 해줘야 더 좋음

    <br>

---

4. **가상 요소**에 `clear:both` 주기
```css
.container::after {
  display: block;
  clear: both;
  content: '';
}
```

- 3의 문제가 불필요한 요소를 만들어 가독성을 떨어뜨림  
=> float 대상 부모 요소에 css로 가상 요소를 만들어 속성 주기

</details>

<br><br><br>

---
---
## 💛5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?


||Flex|Grid|
|:------:|:---|:---|
|차이점|1차원으로 수평, 수직 영역 중 한 방향으로만 나눔|2차원으로 수평, 수직을 동시에 역역 나눔|
|장점|①. 1줄 코드 추가로 수평 정렬 가능<br>②. 요소의 상하좌우의 정렬과 순서 변경이 간단<br>③. 요소 간격 조절이 간단<br>④. 높이가 다른 요소의 중앙 정렬도 쉬움|①. 전체적인 레이아웃 틀 잡기가 편함<br>②. 리스트 아이템 사이의 간격을 간단히 줄 수 있음|
|단점|①. 오래된 버전의 브라우저에서는 동작 안할 수 있음<br>②.직관적이지 않아서 모든 요소들이 시각적으로 어떻게 페이지에 배치되는지 이해하기 어려움|오래된 버전의 브라우저에서는 동작 안할 수 있음|

<br><br><br>

---
---
## 💛6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
    
1. `쉼표(,)`사용으로 여러 선택자 결합 가능
```css
p, .class, #id{
    color:blue;
}
```

---

2. 선택자로 같은 스타일 줄 태그 지정   
ex) 태그, class, 자식, 자손 선택자 등  

>1. 태그 선택자
```html
<p>p태그에 스타일을 줬기 때문에</p>
<div>div는 포함 안해</div>
<p>두 번째 p태그도 빨간색</p>

<style>
    p{
        color:red;
    }
</style>

```

>> ![태그선택자](https://user-images.githubusercontent.com/91482127/199134952-363cc17e-74a7-4bf6-9c1e-f961f194f9a5.PNG)

---

>2. class 선택자
```html
<p>클래스를 아래</p>
<div class="lass">div 한 개와</div>
<p class="lass">두 번째 p태그에만 줬어</p>

<style>
    .lass{
        color:blue;
    }
</style>
```

>>![클래스선택자](https://user-images.githubusercontent.com/91482127/199134976-fc25e2c1-6ecc-412e-a4d1-6ea5120e5e19.PNG)

---

>3. 자식 선택자
```html
<ol>
	<li>first의 자식 한 마리</li>
	<li>first의 자식 두 마리</li>
	<ul>
		<li>first의 자손 한 마리</li>
	</ul>
</ol>

<style>
	ol> li {
		color: green;
	}
</style>
```

>>![자식 선택자](https://user-images.githubusercontent.com/91482127/199134984-a063ea3f-7e28-4b23-bed8-29fcfba7afeb.PNG)

---

>4. 자손 선택자
```html
<ol>
	<li>first의 자식 한 마리</li>
	<li>first의 자식 두 마리</li>
	<ul>
		<li>first의 자손 한 마리</li>
	</ul>
</ol>

<style>
	ol li {
		color: purple;
	}
</style>
```

>>![자손선택자](https://user-images.githubusercontent.com/91482127/199134995-af768d7e-9a99-4937-930e-4ecc70f2cd6b.PNG)
