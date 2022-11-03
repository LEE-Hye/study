# 📃 Checklist 03. 자바스크립트와 DOM

💌 Quest 03. 목차

[1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?](#💙1-자바스크립트는-버전별로-어떻게-변화하고-발전해-왔을까요)  
[2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?](#💙2-자바스크립트의-문법은-다른-언어들과-비교해-어떤-특징이-있을까요)     
[3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?](#💙3-자바스크립트를-통해-dom-객체에-css-class를-주거나-없애려면-어떻게-해야-하나요)  
[4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?](#💙4-자바스크립트의-변수가-유효한-범위는-어떻게-결정되나요)  
[5. 자바스크립트의 익명 함수는 무엇인가요?](#💙5-자바스크립트의-익명-함수는-무엇인가요)  


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

- ES5 => ECMAScript5 / ES2016 => ECMAScript2016  
- ES6부터 ECMAScript+버전이 아닌 ECMAScript+발표년도 방식으로 이름 변경
- 표준 갱신 주기를 1년 단위로 정례화

- ECMAScript❓
    - Ecma International에 의해 제정된 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
    - 자바스크립트를 표준화 하기 위해 만듦
    - 핵심 문법 규정

    

<br>

---
> ### 🤍 자바스크립트의 표준은 어떻게 제정될까요?

- 국제 기구 ECMA International이 ECMAScript 제정

- Ecma 표준은 다음과 같은 특정 영역이나 주제에 할당된 기술 위원회를 통해 관리

    |기술 위원회|역할|
    |:---:|---|
    |TC39|ECMAScript 를 담당|
    |TC45|Office Open XML을 담당|
    |TC53|임베디드 시스템용 ECMAScript 모듈을 담당|


<br>

- 제정 순서

    |순서|내용|
    |:------:|---|
    |0단계|누구라도 고려할 가치가 있다고 생각하는 아이디어가 생기면 구체화하고 간단하게 작성하여 제출|
    |1단계(제안)|커뮤니티 구성원(위원회 소속이든 아니든)들이 토론하고 추가로 개발하며 다른 언어나 환경의 유사한 기술을 연구하고 범위를 다듬으며 일반적으로 어떻게 해결하는지 알아내고 아이디어를 구체화|
    |2단계(초안)|커뮤니티가 정확한 구문, 의미 체계, API 등을 구체화하고 공식 사양 언어를 사용하여 해결 방법을 자세히 설명하는 단계|
    |3단계(후보)|구현 중 발견된 코너 케이스(corner case), 웹 호환성 문제 또는 구현의 어려움 같은 구현 중에서 나온 피드백에 의해서만 변경|
    |4단계(완료)|기준을 충족하면 기능을 작업한 팀이 ecma262 저장소에 풀 리퀘스트를 보내 변경 사항을 편집자 초안에 반영하고 ECMAScript 편집자 그룹이 이를 수락하면 4단계가 완료|


<br><br>

---
---

## 💙2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
---

1. 동적인 언어
    - 소스를 만들 때 자료형이 결정되는 게 아니라 실행 시 결정
    - 타입을 써줄 필요가 없어서 빠른 코드 작성 가능

<br>

2. 프로토타입 기반 객체 지향 언어 🧡💛💚영상 찾아서 제대로 이해해보자💙💜🤎
    - 프로토타입을 기반으로 상속을 구현해 불필요한 중복 제거

<br>

3. 인터프리터 언어
    - 한 줄마다 기계어로 번역
    - 테스트에 용이한 구조지만 처리 속도가 느림

<br>

4. 싱글 스레드 기반 비동기 처리 🧡💛💚영상 찾아서 제대로 이해해보자💙💜🤎
    - 호출 스택(Call Stack)이 1개인 단일 스레드
    - 순서대로 코드가 실행되는 걸 보장할 수 없다.
    - 메인 스레드에서 호출되는 함수들이 호출 스택에 쌓여 LIFO 방식으로 실행

<br>

---
> ### 🤍 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?

- `for`문, `for/in`문, `for/of`문, `while`문, `do-while`문

1. `for`문

```javascript
<script>
    for(var i = 0; i < 3; i++){
        document.write(i);
    }

    // 조건식이 참인 동안 반복 실행
</script>
```

2. `for/in`문
- 해당 객체의 열거할 수 있는 모든 프로퍼티를 돌 수 있도록

```javascript
<script>
    var arr = [0, 1, 2]
    for(var i in arr){
        document.write(i);
    }

    // 프로퍼티 개수만큼 반복 실행
</srctip>
```

3. `for/of`문
- 반복할 수 있는 객체를 돌 수 있도록

```javascript
<script>
    var arr = [0, 1, 2]
    for(var value of arr){
        document.write(i);
    }

    // 프로퍼티 개수만큼 반복 실행
</srctip>
```

4. `while`문
- 반복할 수 있는 객체를 돌 수 있도록

```javascript
<script>
    var arr = [0, 1, 2]
    for(var value of arr){
        document.write(i);
    }

    // 프로퍼티 개수만큼 반복 실행
</srctip>
```

5. `do-while`문
- 반복할 수 있는 객체를 돌 수 있도록

```javascript
<script>
    var arr = [0, 1, 2]
    for(var value of arr){
        document.write(i);
    }

    // 프로퍼티 개수만큼 반복 실행
</srctip>
```


<br><br>

---
---

## 💙3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

---
> ### 🤍 IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?


<br><br>

---
---

## 💙4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?

---
>### 🤍 var과 let으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?



<br><br>

---
---

## 💙5. 자바스크립트의 익명 함수는 무엇인가요?

---
>### 🤍 자바스크립트의 Arrow function은 무엇일까요?


<br><br>

---
---
