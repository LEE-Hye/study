# 📃 Checklist 03. 자바스크립트와 DOM

💌 Quest 03. 목차

[1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?](#1-자바스크립트는-버전별로-어떻게-변화하고-발전해-왔을까요)  
[2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?](#2-자바스크립트의-문법은-다른-언어들과-비교해-어떤-특징이-있을까요)  
[3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?](#3-자바스크립트를-통해-dom-객체에-css-class를-주거나-없애려면-어떻게-해야-하나요)  
[4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?](#4-자바스크립트의-변수가-유효한-범위는-어떻게-결정되나요)  
[5. 자바스크립트의 익명 함수는 무엇인가요?](#5-자바스크립트의-익명-함수는-무엇인가요)  


---

## 💙1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
---

|년도|버전|공식이름|특징|
|:-----:|:-----:|:-----:|:-----:|
|1997년|ES1|ECMAScript1|초판|
|1998년|ES2|ECMAScript2|ISO/IEC 16262 국제 표준과 동일한 규격을 적용하기 위해 편집 변경|
|1999년|ES3|ECMAScript3|정규식 표현식, try/catch|
|2003년|ES4|ECMAScript4|출시되지 않음|
|2009년|ES5|ECMAScript5|strict mode, String.trim(), Array,isArray()|
|2015년|ES6|ECMAScript2015|let, const, class, module, Array.find(), Array.findIndex()|
|2016년|ES7|ECMAScript2016|제곱연산자 (**)와 Array.includes|
|2017년|ES8|ECMAScript2017|async, await, 공유 메모리, Object 정적 메서드|
|2018년|ES9|ECMAScript2018|rest, Promise.finally()|
|2019년|ES10|ECMAScript2019|Arrayu.prototype.flatMap, Object.fromEntries|
|2020년|ES11|ECMAScript2020|Promise.allSettled, null 병합 연산자, 옵셔널 체인징 연산자|
|2021년|ES12|ECMAScript2021|Promise.any, AggregateError|
|2022년|ES13|ECMAScript2022|플래그를 통한 정규식 일치 인덱스, Object.prototype.hasOwnProperty|

<br>

---

> ### 🤍 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
>><br>
>>- ES5 => ECMAScript5 / ES2016 => ECMAScript2016  
>>- ES6부터 ECMAScript+버전이 아닌 ECMAScript+발표년도 방식으로 이름 변경
>>- 표준 갱신 주기를 1년 단위로 정례화
>>
>>- ECMAScript❓
>>    - Ecma International에 의해 제정된 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
>>    - 자바스크립트를 표준화 하기 위해 만듦
>>    - 핵심 문법 규정
>>
>><br>

<br>

> ### 🤍 자바스크립트의 표준은 어떻게 제정될까요?
>><br>
>>- 국제 기구 ECMA International이 ECMAScript 제정
>>
>>- Ecma 표준은 다음과 같은 특정 영역이나 주제에 할당된 기술 위원회를 통해 관리
>>
>>    |기술 위원회|역할|
>>    |:---:|---|
>>    |TC39|ECMAScript 를 담당|
>>    |TC45|Office Open XML을 담당|
>>    |TC53|임베디드 시스템용 ECMAScript 모듈을 담당|
>>
>>
>><br>
>>
>>- 제정 순서
>>
>>    |순서|내용|
>>    |:------:|---|
>>    |0단계|누구라도 고려할 가치가 있다고 생각하는 아이디어가 생기면 구체화하고 간단하게 작성하여 제출|
>>    |1단계(제안)|커뮤니티 구성원(위원회 소속이든 아니든)들이 토론하고 추가로 개발하며 다른 언어나 환경의 유사한 기술을 연구하고 범위를 다듬으며 일반적으로 어떻게 해결하는지 알아내고 아이디어를 구체화|
>>    |2단계(초안)|커뮤니티가 정확한 구문, 의미 체계, API 등을 구체화하고 공식 사양 언어를 사용하여 해결 방법을 자세히 설명하는 단계|
>>    |3단계(후보)|구현 중 발견된 코너 케이스(corner case), 웹 호환성 문제 또는 구현의 어려움 같은 구현 중에서 나온 피드백에 의해서만 변경|
>>    |4단계(완료)|기준을 충족하면 기능을 작업한 팀이 ecma262 저장소에 풀 리퀘스트를 보내 변경 사항을 편집자 초안에 반영하고 ECMAScript 편집자 그룹이 이를 수락하면 4단계가 완료|
>>
>><br>

<br><br>

---
---

## 💙2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
---

1. 동적인 언어
    - 소스를 만들 때 자료형이 결정되는 게 아니라 실행 시 결정
    - 타입을 써줄 필요가 없어서 빠른 코드 작성 가능

<br>

2. 프로토타입 기반 객체 지향 언어
    - 프로토타입을 기반으로 상속을 구현해 불필요한 중복 제거

<br>

3. 인터프리터 언어
    - 한 줄마다 기계어로 번역
    - 테스트에 용이한 구조지만 처리 속도가 느림

<br>

4. 싱글 스레드 기반 비동기 처리
    - 호출 스택(Call Stack)이 1개인 단일 스레드
    - 순서대로 코드가 실행되는 걸 보장할 수 없다.
    - 메인 스레드에서 호출되는 함수들이 호출 스택에 쌓여 LIFO 방식으로 실행

<br>

---
> ### 🤍 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?

- `for`문, `for/in`문, `for/of`문, `while`문, `do-while`문

---

>>1. `for`문
>>```javascript
>><script>
>>    for(초기문; 조건문; 증감문){
>>        // code
>>    }
>>    
>>    for(var i = 0; i < 3; i++){
>>        document.write(i);
>>    }
>></script>
>>```
>><br>

>>2. `for/in`문
>>- 배열에서 사용 가능
>>- Object에서도 사용가능
>>- Object의 키 값의 개수만큼 실행
>>```javascript
>><script>
>>    for(const key in ojbect){
>>        // code
>>    }
>>    
>>    let profile = {name : "hyebin", age : 24, hobby : "game"};
>>    for(const key in profile){
>>        console.log(profile[key]);
>>    }
>></srctip>
>>```
>><br>    

>>3. `for/of`문
>>- 배열에서 사용 가능
>>- Array, String등 반복할 수 있는 객체에서 사용 가능
>>
>>```javascript
>><script>
>>    for (const element of iterable) {
>>        //code
>>    }
>>
>>    let color = ["red", "orange", "blue", "green"];
>>    for (const col of color) {
>>    console.log(col);
>>}
>></srctip>
>>```
>> <br>

>>4. `while`문
>>- 조건 판별 후 실행
>>
>>```javascript
>><script>
>>    while (조건문) {
>>        //code
>>    }
>>
>>    let i = 0;
>>    while (i < 3) {
>>    console.log(i);
>>    i++;
>>    }
>></srctip>
>>```
>><br>
    
>>5. `do-while`문
>>- 일단 실행 후 조건 판별
>>
>>```javascript
>><script>
>>    do{
>>        // code
>>    } while(조건문)
>>
>>    let i = 0;
>>    do {
>>        console.log(i);
>>        i++;
>>    } while (i < 3);
>></srctip>
>>```
>><br>   


<br><br>

---
---

## 💙3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

---

- CSS Class 추가 & 삭제
- 추가 : `Element.classList.add("className","className",...)`
- 삭제 : `Element.classList.remove("className","className",...)`

`<예제>`
```javascript
<body>
    <div>
        클래스를 추가&삭제 해봅시다.
    </div>
    <script>
        const many = document.querySelector('div'); // 추가하고자 하는 요소 선택
        many.classList.add("hi", "bye"); // 추가할 클래스 네임
        console.log(many.outerHTML)

        many.classList.remove("hi", "bye"); // 삭제할 클래스 네임
        console.log(many.outerHTML); 
    </script>
</body>
```
`<결과>`

>![class_pluss_minuss](https://user-images.githubusercontent.com/91482127/199868783-eca764bf-0b8c-4a7d-a14d-7cd701c788bd.PNG)

<br>

---

- CSS Class 모든 클래스 변경 
- `Element.className`

`<예제>`
```javascript
<body>
    <div>
        모든 클래스를 변경해봅시다.
    </div>
    <script>
        const all = document.querySelector('div');
        console.log(all.outerHTML);
        all.className = 'bye';
        console.log(all.outerHTML);
    </script>
</body>
```
`<결과>`

>![class](https://user-images.githubusercontent.com/91482127/199883113-d9e0e316-b5e2-479a-998c-17b0b0023cfb.PNG)

<br>

---

> ### 🤍 IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?

<br>

>>- `Element.classList`를 지원하지 않음
>><br>
>>
>>1. `className` 사용
>>
>>`<예제>`
>>```javascript
>><body>
>>    <div id='hello'></div>
>>    <script>
>>        var hello = document.getElementById('hello');
>>        console.log(hello.outerHTML);
>>        hello.className += 'hi';
>>        console.log(hello.outerHTML);
>>    </script>
>><body>
>>```
>>
>>`<결과>`
>>
>>>![class+](https://user-images.githubusercontent.com/91482127/199906402-03d1c298-0a3e-4a76-8de2-d6bf31fa1b34.PNG)
>>
>><br>

>>
>>2. 호환성 스크립트 추가  
>>    (https://github.com/eligrey/classList.js)
>>    에 나와있는 스크립트를 페이지에 포함하고 IE작동
>>
>> <br>

<br><br>

---
---

## 💙4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
- 변수의 유효 범위(Scope)란❓
    - 해당 변수가 접근할 수 있는 변수, 객체, 함수의 집합
    
    <br>

- 유효 범위는 `지역 변수(local variable)`와 `전역 변수(global variable)`로 구분된다.

|변수|정의|특징|
|:---:|---|---|
|지역 변수|함수 내부에서 선언된 변수|1. 선언된 함수 내에서만 유효<br>2. 함수가 종료되면 메모리에서 사라짐|
|전역 변수|함수 외부에서 선언된 변수|1. 어느 영역에서나 접근 가능<br>2. 웹 페이지가 닫혀야 메모리에서 사라짐|

---

`<지역 변수 예제>`
```javascript
function local_variable() {
    var name = 'hyebin';
    document.write("함수 내부 지역 변수타입은 " + typeof name + "<br>");
    }
    local_variable();
    document.write("함수 외부 지역 변수타입은 " + typeof num);
```

`<지역 변수 예제 결과>`

>![local](https://user-images.githubusercontent.com/91482127/199888651-24503760-f422-4254-b95a-9000255f9abc.PNG)

- `typeof` 연산자는 선언되지 않은 변수를 `undefined`로 반환
- 지역 변수는 반드시 `var`로 선언 => `var`로 안 하면 전역 변수로 선언됨

---

<br>

`<전역 변수 예제>`
```javascript
var num = 10;
    function global_variable() {
        document.write("함수 내부 전역 변수타입은 " + typeof num +"<br>");
        num; 
    }
    global_variable(); 
    document.write("함수 외부 전역 변수타입은 " + typeof num );
```

`<전역 변수 예제 결과>`
    
>![global](https://user-images.githubusercontent.com/91482127/199888632-8deaf6d3-5fd7-408a-9952-b3b63a6e63c1.PNG)




    
<br>

---
>### 🤍 var과 let으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?

||var|let|const|
|:---:|:---:|:---:|:---:|
|재선언|가능|불가능|불가능|
|값변경|가능|가능|불가능|
|스코프|함수 스코프|블록 스코프|블록 스코프|
|호이스팅|가능|불가능|불가능|

- 스코프❓  
    : 변수의 접근 범위

- 호이스팅❓  
    : 함수 안에 있는 선언들을 다 끌어올려서 유효 범위의 최상단에 선언  
    : 변수/함수 선언만 위로 올려지고, 할당은 안 올려짐

---


|스코프|특징|
|:---:|---|
|함수 스코프|1. 새로운 함수가 생성되면 새로운 스코프 발생<br>2. JS는 함수 스코프를 따름<br>3. 함수 스코프 = 지역 스코프<br>4. 같은 함수이기만 하면 if나 for문에서 선언된 변수도 사용 가능|
|블록 스코프|1. 새로운 블록이 생성되면 새로은 스코프 발생<br>2. let과 const로 블록 스코프도 가능<br>3. 같은 함수여도 if나 for문에서 선언된 변수는 if나 for문 밖에서 사용 불가능|






<br><br>

---
---

## 💙5. 자바스크립트의 익명 함수는 무엇인가요?
- 함수명 대신 변수명에 함수 코드를 저장
- 익명 함수 호출 시 변수명을 함수명처럼 사용
- 한 번만 호출해 사용하는 함수라 쓰는 순간 외에 메모리를 차지하지 않아 메모리를 아낄 수 있음

`<예제>`
```javascript
var heybin = function()
{
    document.write("hey hyebin");
};

heybin();
```

`<결과>`

>![hamsu](https://user-images.githubusercontent.com/91482127/199870766-a5e5d2e8-87eb-4ed3-a5b3-2b973817e201.PNG)

---
>### 🤍 자바스크립트의 Arrow function은 무엇일까요?

>>- `function` 대신 화살표(=>)를 사용해 간략한 방법으로 선언
>>- ES6 문법
>>- 항상 익명 함수 사용
>>- 일반적인 함수 표현식보다 직관적이고, 간결
>>
>>`<예제>`
>>```javascript
>>const mul = function(x, y) { 
>>return x * y; 
>>} 
>>
>>// 위의 함수를 아래처럼 나타낼 수 있음
>>const mul = (x, y) => x * y;
>>
>>console.log(mul(1, 15));
>>```
>> <br>
>>
>> `<결과>`  
>>> ![5-2](https://user-images.githubusercontent.com/91482127/199868833-c6a4e361-95e0-4394-b51f-7453803d4171.PNG)

>>- 간편하지만 몇 가지 제한점이 있고 모든 상황에서 사용할 순 없음
>>   1. this나 super에 대한 바인딩이 없음
>>   2. methods로 사용 불가
>>   3. 생성자 사용 불가
>>
>> <br>


---
---
