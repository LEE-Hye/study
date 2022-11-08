var displayedImage = document.getElementsByClassName('displayed-img')[0];
var thumbBar = document.getElementsByClassName('thumb-bar')[0];
console.log('타입 확인 : ' + typeof thumbBar);
// getElementsByClassName는 객체 타입이라 사용하려면 key값을 뽑아내야 함

var thumbBar_img = thumbBar.getElementsByTagName('img');

var btn = document.getElementsByTagName('button')[0];
var overlay = document.getElementsByClassName('overlay')[0];

var i;

/* Declaring the array of image filenames 이미지 파일 이름 배열 선언 */
img_src = [];
for (i = 1; i <= 5; i++) {
    img_src.push('images/pic' + [i] + '.jpg');
}
console.log('이미지 파일 이름 추가됐는지 확인: ' + img_src);

/* Declaring the alternative text for each image file 각 이미지 파일에 대한 대체 텍스트 선언 */
img_alt = [];
for (i = 1; i <= 5; i++) {
    img_alt.push('pic' + [i] + '.jpg');
}
console.log('이미지 파일 이름 추가됐는지 확인: ' + img_alt);

/* Looping through images 이미지 순회 */

for (i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', img_src[i]);
    newImage.setAttribute('alt', img_alt[i]);
    thumbBar.appendChild(newImage);
}
/* onclick 핸들러를 각 섬네일 이미지에 추가하기*/

for (i = 0; i < thumbBar_img.length; i++) {
    (function(i){
    thumbBar_img[i].onclick = function () {

        displayedImage.setAttribute('src',thumbBar_img[i].getAttribute('src'))
        // displayedImage.getAttribute('src') = thumbBar_img[i].getAttribute('src');
        // displayedImage.getAttribute('alt') = thumbBar_img[i].getAttribute('alt');
    }
})(i);
}



/* Wiring up the Darken/Lighten button 어둡게/밝게 버튼 연결 */
console.log('버튼 class 네임 확인 : ' + btn.getAttribute('class'));

btn.addEventListener('click', function(){
    if(btn.getAttribute('class')=='dark'){

        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        console.log(btn.getAttribute('class'))
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
       
    }
})

