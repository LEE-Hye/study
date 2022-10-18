> # 1. 초기 설정

- 1\. 버전 관리를 위해 내 정보 등록

    ```bash
    git config --global user.email "leebin9295@naver.com" # Email 등록
    git config --global user.name "LEE-Hye" # Name 등록
    ```

    - 등록 확인

        ```bash
        $ git config --global user.email

        leebin9295@naver.com
        ```
        ```bash
        $ git config --global user.name

        LEE-Hye
        ```

- 2\. Github repository를 해당 디렉토리에 `clone`으로 복사

    ```bash
    git clone https://github.com/LEE-Hye/study.git

    Cloning into 'study'...
    remote: Enumerating objects: 373, done.
    remote: Counting objects: 100% (140/140), done.
    remote: Compressing objects: 100% (106/106), done.
    remote: Total 373 (delta 66), reused 79 (delta 30), pack-reused 233
    Receiving objects: 100% (373/373), 526.73 KiB | 18.81 MiB/s, done.
    Resolving deltas: 100% (130/130), done.
    ```

- 3\. 소스 코드를 Git으로 관리하기 전에 `git init`으로 저장소 초기화(clone할 땐 자동으로 생성)

    ```bash
    $ git init

    Initialized empty Git repository in C:/Users/USER/study/Quest00/sandbox/.git/
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
    $ git add mission.txt
    ```

-  특정 파일 말고 전체 파일/폴더 보내는 방법도 있음

    ```bash
    $ git add .
    # . 을 쓰면 변경된 모든 것들이 인덱스로 보내진다.
    ```

>> ## 2. commit

- 최종 수정본을 로컬 저장소에 보냄

    ```bash
    $ git commit -m "modi"
    # -m을 이용해 "여기 안에 들어갈 메시지"를 작성해줘야 한다.
    
    [main 3158827] modi
    1 file changed, 1 insertion(+), 1 deletion(-)
    ```

>> ## 3. push

- 로컬 저장소에 있는 파일을 원격 저장소로 보냄

    ```bash
    $ git push -u origin main

    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 12 threads
    Compressing objects: 100% (2/2), done.
    Writing objects: 100% (3/3), 276 bytes | 276.00 KiB/s, done.
    Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (1/1), completed with 1 local object.
    To https://github.com/LEE-Hye/study.git
    8820bf3..3158827  main -> main
    branch 'main' set up to track 'origin/main'.
    ```

<br><br>

> # 3. pull
- 원격 저장소에 변경된 버전을 내 로컬에 저장할 때
    ```bash
    $ git pull origin main

    remote: Enumerating objects: 4, done.
    remote: Counting objects: 100% (4/4), done.
    remote: Compressing objects: 100% (3/3), done.
    remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
    Unpacking objects: 100% (3/3), 772 bytes | 96.00 KiB/s, done.
    From https://github.com/LEE-Hye/study
    * branch            main       -> FETCH_HEAD
    3158827..6d02549  main       -> origin/main
    Updating 3158827..6d02549
    Fast-forward
    pull.txt | 2 ++
    1 file changed, 2 insertions(+)
    create mode 100644 pull.txt
    ```



<br><br>

> # 4. branch

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

    Switched to branch 'hey'
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
    $ git add changebranch.txt
    ```

    - commit

    ```bash
    $ git commit -m "changebranch.txt commit"
    
    [hey f4ea89e] changebranch.txt commit
    1 file changed, 1 insertion(+)
    create mode 100644 changebranch.txt
    ```

    - push
    
    ```bash
    $ git push origin hey

    Enumerating objects: 8, done.
    Counting objects: 100% (8/8), done.
    Delta compression using up to 12 threads
    Compressing objects: 100% (5/5), done.
    Writing objects: 100% (6/6), 559 bytes | 559.00 KiB/s, done.
    Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
    remote:
    remote: Create a pull request for 'hey' on GitHub by visiting:
    remote:      https://github.com/LEE-Hye/study/pull/new/hey
    remote:
    To https://github.com/LEE-Hye/study.git
    * [new branch]      hey -> hey
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

> # 5. stash

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
