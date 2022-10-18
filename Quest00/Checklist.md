# Quest 00. 형상관리 시스템 Checklist

[1. 형상관리 시스템은 왜 나오게 되었을까요?](#1-형상관리-시스템은-왜-나오게-되었을까요)   
[2. git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요?](#2-git은-어떤-형상관리-시스템이고-어떤-특징을-가지고-있을까요)   
[3. git과 GitHub은 어떻게 다를까요?](#3-git과-github은-어떻게-다를까요)   
[4. git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하고 어떻게 사용하나요?](#4-git의-cloneaddcommitpushpullbranchstash-명령은-무엇이며-어떨-때-이용하나요-그리고-어떻게-사용하나요)   
[5. git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?](#5-git의-object-commit-head-branch-tag는-어떤-개념일까요-git-시스템은-프로젝트의-히스토리를-어떻게-저장할까요)   
[6. 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?](#6-리모트-git-저장소에-원하지-않는-파일이-올라갔을-때-이를-되돌리려면-어떻게-해야-할까요)

<br>

---

> ## 1. 형상관리 시스템은 왜 나오게 되었을까요?

<br>

- 수정하고 싶을 때 마다 파일의 이름을 바꿔서 저장하는 **번거로움** 때문에

- 개발하는 동안 소스 코드의 **변경 사항을 보존**하기 위해

- **협동 작업**을 가능하게 하기 위해


<br><br>

---

> ## 2. git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요?

<br>

- 분산 버전 관리 시스템

- **중앙 서버가 다운되더라도 개발 작업자들은 작업이 가능**

- 서버에 문제가 생겨도 클라이언트에서 다운 받은 복제물을 통해 복원 가능

- ### 분산형 형상관리 시스템이란 무엇일까요? 
    - 소프트웨어 버전 관리를 위한 시스템
    - 각 개발자가 중앙 서버에 접속하지 않은 상태에서도 코드 작업 가능
    
    <br>

- ### git은 어떻게 개발되었을까요?
- 
    - Linux커널은 BitKeeper라고 하는 분산 버전 관리 시스템(DVCS)을 사용하고 있었는데 BitKeeper의 무료 사용이 재고 되면서 Linux 개발 커뮤니티가 자체 도구를 만들게 됐다.

    <br>
    
- ### git이 분산형 시스템을 채택한 이유는 무엇일까?

    - **각각의 repository** 가짐
    - 중앙 서버에 문제가 생겨도 **복구 및 계속 작업**이 가능
    - **네트워크 환경이 없어도 작업**이 가능
        

<br><br>

---

> ## 3. git과 Github은 어떻게 다를까요?

<br>

- Git
    - **버전관리를 위한 소프트웨어**
    - 오픈 소스 버전 관리 시스템
    - 로컬에서 버전 관리
    - 소프트웨어 개발 및 소스 코드 관리에 용이

    <br>

- Github
    - **저장 공간을 제공해주는 서비스**
    - Git Repository를 위한 웹 기반 호스팅 서비스
    - 로컬 공간에서 관리한 소스코드를 업로드하여 공유 가능



<br><br>

---

> ## 4. git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

<br>

- clone : 다른 프로젝트에 참여하거나 **Git 저장소를 복사/다운로드**하는 명령어
    ```bash
    $ git clone <url>
    ```

- add : commit을 하기 전 변경된 부분을 **staging area로 옮기는** 명령어
    ```bash
    $ git add 파일명 
    # 특정 파일 내용만 넘기고 싶을 때
    ``` 
    ```bash
    $ git add . 
    # 모든 변경 사항을 넘기고 싶을 때
    ``` 

- commit : staging area의 파일을 **repository로 옮기는** 명령어
    ```bash
    git commit -m "커밋 메시지" 
    ```

- push : repository로 **commit 하기** (커밋을 원격 서버에 업로드)
    ```bash
    $ git push origin <브랜치이름>
    ```

- pull : repository에서 **commit 한 내용 가지고 오기**
    ```bash
    $ git pull 
    ```

- branch : 진행중이던 것과 다른 작업을 진행하기 위해 **작업 영역을 새롭게** 만드는 명령어
    ```bash
    $ git branch
    # 브랜치 목록보기
    ```
    ```bash
    $ git branch <브랜치이름>
    # 새 브랜치 만들기
    ```
    ```bash
    $ git switch -c <브랜치이름>
    # 브랜치 생성과 동시에 전환
    ```
    ```bash
    $ git branch -d <브랜치이름>
    # 브랜치 삭제
    ```

- stash : 아직 마무리 하지 않은 작업을 **스택에 잠시 저장**(임시 저장 느낌)
    ```bash
    $ git stash
    # 새로운 stash를 스택에 집어 넣어 하던 작업을 임시로 저장
    ```

    ```bash
    $ git stash list
    # stash 목록 확인
    ```
    
    ```bash
    $ git stash apply 
    # 가장 최근에 넣은 stash 가지고 와서 사용하기
    ```

    ```bash
    $ git stash apply stash@{n}
    # 특정 @{n} 가지고 와서 사용하기
    ```

    ```bash
    $ git stash drop
    # 가장 최근 stash 지우기
    # (stash에서 가지고 왔지만 스택에는 남아 있어서 drop까지 해줘야 한다.)
    ```

    ```bash
    $ git stash drop stash@{n}
    # 특정 @{n} stash 지우기
    ```

    ```bash
    $ git stash clear
    # 한번에 stash 모두 지우기
    ```



<br><br>

---

> ## 5. git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?

<br>

- object : **모든 컨텐츠를 저장**하는 데이터 베이스

- commit : 스냅샷을 불러오기 위해 SHA-1 값을 기억하고 있어야 하는데 이러한 **정보를 관리**

- head : **현재 체크아웃한 브랜치**를 가르킴

- branch : **진행중이던 것과 다른 작업을 진행**하기 위한 것

- tag : 배포할 때 주로 사용하고 **해당 commit에 대해 설명**을 달아둔다


- ### git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요? 

    - git은 데이터를 저장할 때 데이터와 헤더로 생성한  SHA-1 체크섬으로 파일 이름을 짓고, 해시의 처음 두 글자를 따서 디렉토리 이름에 사용하고 나머지 38글자를 파일 이름에 사용

    - 그래서 이 해시를 이용해서 자유롭게 수정 가능하게 만들어 줌


<br><br>

---

> ## 6. 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

<br>

- 첫 번째 방법 : **잘못 올라간 파일 삭제**하기

    ```bash
    git rm --cached -r 파일명
    # --cashed는 원격 저장소에 있는 것만 삭제 한다는 뜻이다
    # 만약 없다면 로컬 저장소에 있는 것도 다 삭제되니 주의가 필요하다
    ```
- 두 번째 방법 : **커밋 되돌리고 히스토리에도 완전히 삭제**(커밋 삭제)

    - 1\. commit을 내가 원하는 부분을 되돌리기

        ```bash
        $ git reset --hard HEAD~2
        # --hard : 작업 내용 전부 버림
        # --soft : 작업 내용은 보존하면서 로컬 작업 공간과 stage area는 그대로, repository만 바뀜
        # --mix : 작업 내용은 보존하면서 로컬 작업 공간은 그대로, stage area와 repository 바뀜
        ```
    - 2\. 되돌린 사항을 push

        ```bash
        $ git push -f origin main
        # 이 때 -f를 주는 이유는 원격 저장소의 히스토리보다 뒤쳐져 있는데 그걸 푸쉬하려고 하니까 강제로 덮어쓰지 않으면 에러가 뜬다.
        ```


- 세 번째 방법 : **커밋을 되돌리고 히스토리에는 삭제 내역 남기**(커밋 추가)
    - 1\. commit을 내가 원하는 부분을 되돌리기

        ```bash
        $ git revert --no-commit [커밋 해쉬]
        # --no-commit은 바로 커밋이 안되게 하는 옵션이다
        ```
    - 2\. 되돌린 사항을 commit

        ```
        $ git commit -m "커밋 내용"
        ```
    - 3\. 되돌린 사항을 push

        ```
        $ git push origin main
        ```

