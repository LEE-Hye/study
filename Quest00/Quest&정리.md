> # 1. 초기 설정

- 1\. 버전 관리를 위해 내 정보 등록

    ```bash
    git config --global user.email "leebin9295@naver.com" # Email 등록
    git config --global user.name "LEE-Hye" # Name 등록
    ```

    - 등록 확인

        ```bash
        $ git config --global user.email
        ```
        ```bash
        $ git config --global user.name
        ```

- 2\. Github repository를 해당 디렉토리에 `clone`으로 복사

    ```bash
    git clone https://github.com/LEE-Hye/study.git
    ```

- 3\. 소스 코드를 Git으로 관리하기 전에 `git init`으로 저장소 초기화(clone할 땐 자동으로 생성)

    ```bash
    $ git init
    ```

- 4\. `remote`를 이용해 로컬 폴더와 연결 할 repository 생성
    ```bash
    $ git remote add main https://github.com/LEE-Hye/study.git
    ```


<br><br>

> # 2. add/commit/push

>> ## 1. add

- 1\. 저장소 경로에 새로운 파일을 생성 

- 2\. 새로운 변경 사항이라고 알려주기 위해 인덱스에 파일 보냄

    ```bash
    $ git add add.txt
    ```

-  특정 파일 말고 전체 파일/폴더 보내는 방법도 있음

    ```bash
    $ git add .
    # . 을 쓰면 변경된 모든 것들이 인덱스로 보내진다.
    ```

>> ## 2. commit

- 최종 수정본을 로컬 저장소에 보냄

    ```bash
    $ git commit -m "add/commit/push to add.txt"
    # -m을 이용해 "여기 안에 들어갈 메시지"를 작성해줘야 한다.
    ```

>> ## 3. push

- 로컬 저장소에 있는 파일을 원격 저장소로 보냄

    ```bash
    $ git push -u origin main
    ```

<br><br>

> # 3. pull

- 원격 저장소에 변경된 버전을 내 로컬에 저장할 때
    
    - 1\. 원격 저장소에 파일 하나 생성

        - pull.txt 생성
    
    <br>

    - 2\. 원격 저장소에 있는 파일 로컬 저장소에 보냄   

        ```bash
        $ git pull
        ```

<br><br>

> # 4. 파일 수정, 삭제

- 원격 저장소에 있던 파일 삭제하기

    - 1\. 원격 저장소에서 파일 삭제 후 GitBash

        ```bash
        $ git rm pull.txt
        ```

    - 2\. 삭제한 파일 commit 하기

        ```bash
        $ git commit -m "remove pull.txt"
        ```

- 파일 이름 수정

    - 1\. 현재 머물고 있는 디렉토리에 있는 파일 리스트 확인
    
    ```bash
    $ ls -al
    ```

    - 2\. 파일 이름 바꾸기

    ```bash
    $ git mv rename.txt rename2.txt
    ```

    - 3\. 바뀐 내용 커밋 & 푸쉬 하기

    ```bash
    $ git commit -m "rename rename2.txt"
    $ git push
    ```

<br><br>

> # 5. branch

- 진행중이던 것과 다른 작업을 진행하기 위해 작업 영역을 새롭게 만듦(main에서 작업하면 원본에 문제가 생길 수 있기 때문에)

- 1\. 본인이 작업 할 `branch`생성 
    ```bash
    $ git branch hey
    ```
    - 등록 확인
        ```bash
        $ git branch

        $ git branch
          br/hey
        * main
        ```

- 2\. `switch`를 이용해 만든 브랜치로 전환

    ```bash
    $ git switch hey
    ```
    - 등록 확인
        ```bash
        $ git branch

        * hey
          main
        ```

- 3\. 전환한 브런치로 pull/push를 하기 위해서 만든 branch push
    ```bash
    $ git push --set-upstream origin hey

    # 바로 push하려고 하면 GitHub에는 main branch밖에 없어 오류가 나기 때문에 tracking정보 설정을 해주기 위해 --set-upstream을 사용
    ```

- 4\. 새 브런치에서 add, commit, push

    - add

    ```bash
    $ git add branch.txt
    ```

    - commit

    ```bash
    $ git commit -m "branch branch.txt"
    ```

    - push
    
    ```bash
    $ git push origin hey
    ```

- 5\. 새로 만든 브런치 삭제하기(로컬에서)

    ```bash
    $ git branch -d hey
    ```

- 6\. 새로 만든 브런치 삭제하기(원격에서)

    ```bash
    $ git push origin :hey
    ```
    

<br><br>

> # 6. stash

- 아직 마무리 하지 않은 작업을 스택에 잠시 저장

- 1\. 새로운 stash를 스택에 만들어 하던 작업 임시 저장

    ```bash
    git stash
    ```

    - stash 목록 확인
        ```bash
        $ git stash list
        ```

- 2\. stash에 담아뒀던 작업 가져오기
    ```bash
    git stash apply --index

    # --index옵션을 주면 Staged상태까지 복원 가능
    ```

- 3\. stash에서 가져오긴 했지만 아직 스택에는 남아있어서 제거
    
    ```bash
    $ git stash drop
    ```

- 4\. 실수로 잘못 stash적용했을 때 되돌리기

    ```bash
    $ git stash show -p | git apply -R
    ```
    
    
<br><br><br>

![깃 순서](https://user-images.githubusercontent.com/91482127/196376015-bc288058-6b40-4c7f-98ba-3ef9065244a6.png)   
