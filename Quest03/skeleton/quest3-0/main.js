// getElementsByClassName는 유사 배열인 htmlcollection가 배열 요소를 갖고 오기 때문에 인덱스 0을 붙여야 한다.
// 이미지 순회/대표사진 설정
var displayedImage = document.getElementsByClassName('displayed-img')[0];
var thumbBar = document.getElementsByClassName('thumb-bar')[0];
// thumbBar 안에 이미지들만 가져와서 사용할거라 따로 변수에 담아줌
var thumbBarImg = thumbBar.getElementsByTagName('img');
// 어두워지게/밝게 하는 버튼실행
var btn = document.getElementsByTagName('button')[0];
var overlay = document.getElementsByClassName('overlay')[0];

var i;

/** 1. Declaring the array of image filenames 이미지 파일 이름 배열 선언 */
// ①. src 네임 담아줄 빈 배열 생성
srcImg = [];
// ②. for문을 활용해 src 네임 배열에 추가해주기
for (i = 0; i < 5; i++) {
    srcImg.push('images/pic' + [i+1] + '.jpg');
}
console.log('이미지 파일 이름 추가됐는지 확인: ' + srcImg);

/** 2. Declaring the alternative text for each image file 각 이미지 파일에 대한 대체 텍스트 선언 */
// ①. alt 네임 담아줄 빈 배열 생성
altImg = [];
// ②. for문을 활용해 alt 네임 배열에 추가해주기
for (i = 1; i <= 5; i++) {
    altImg.push('pic' + [i] + '.jpg');
}
console.log('이미지 파일 이름 추가됐는지 확인: ' + altImg);

/** 3. Looping through images 이미지 순회 */
for (i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    // ①. 에서 만든 src 네임 배열 newImage의 'src'속성에 저장해주기
    newImage.setAttribute('src', srcImg[i]);
    // ②. 에서 만든 alt 네임 배열 newImage의 'alt'속성에 저장해주기
    newImage.setAttribute('alt', altImg[i]);
    // ③. 차곡차곡 thumbBar에 newImage를 맨 뒤쪽으로 차곡차곡 추가해준다(appendChild : 선택한 요소 안에 자식 요소 추가)
    thumbBar.appendChild(newImage);
}


/** 4. onclick 핸들러를 각 섬네일 이미지에 추가하기*/
// onlick도 클릭을 기다리는 비동기 함수
// ①. 새로 만들어준 thumbBarImg 배열에 맞게 요소를 실행해주기 위해 for문 사용
for (i = 0; i < thumbBarImg.length; i++) {
    // ②. 즉시 실행 함수를 사용해주면서 각 i에 대한 환경을 만들어줌
    (function (i) {
        // ③. 전달 받은 i의 값에 따라 onclick 설정
        thumbBarImg[i].onclick = function () {
            // ④. displayedImage의 'src' 속성을 전달 받은 i의 thumbBarImg 'src'로 교체
            displayedImage.setAttribute('src', thumbBarImg[i].getAttribute('src'));
            displayedImage.setAttribute('alt', thumbBarImg[i].getAttribute('alt'));
        }
    })(i);
}


/** 5. Wiring up the Darken/Lighten button 어둡게/밝게 버튼 연결 */
console.log('버튼 class 네임 확인 : ' + btn.getAttribute('class'));

// ①. 버튼에 대한 클릭 이벤트 콜백 함수 설정
btn.onclick = function () {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        // console.log(btn.getAttribute('class'));
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        // console.log(btn.getAttribute('class'));
    }
}


// btn.addEventListener('click', function () {
//     // ②. 조건에 따라 setAttribute 사용하여 속성 변경 & textContent 변경 & style 변경
//     if (btn.getAttribute('class') === 'dark') {
//         btn.setAttribute('class', 'light');
//         btn.textContent = 'Lighten';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//         // console.log(btn.getAttribute('class'));
//     } else {
//         btn.setAttribute('class', 'dark');
//         btn.textContent = 'Darken';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//         // console.log(btn.getAttribute('class'));
//     }
// });


