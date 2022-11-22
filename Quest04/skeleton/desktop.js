var i = 0;
var contain;
class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		this.create();
		new Icon();
		new Folder();
		this.drag();
		this.clear();
	}
	create() {
		var desktop1 = document.querySelector('.desktop');

		// ********************탭 생성 ********************
		var tap = document.createElement('div');
		tap.setAttribute('class', 'tab');
		desktop1.append(tap);
		// ********************탭 생성 ********************

		// ********************컨테이너 생성 ********************
		contain = document.createElement('div');
		contain.setAttribute('class', 'container');
		desktop1.appendChild(contain)
		// ********************컨테이너 생성 ********************

		// ********************폴더 아이콘 초기화 버튼 생성 ********************
		var btn = document.createElement('div');
		btn.setAttribute('class', 'btn');
		desktop1.appendChild(btn);

		var newFoldBtn = document.createElement('button');
		newFoldBtn.setAttribute('class', 'folderBtn');
		newFoldBtn.innerText = '폴더 생성';
		btn.appendChild(newFoldBtn);

		var newIconBtn = document.createElement('button');
		newIconBtn.setAttribute('class', 'iconBtn');
		newIconBtn.innerText = '아이콘 생성';
		btn.appendChild(newIconBtn);

		var newClearBtn = document.createElement('button');
		newClearBtn.setAttribute('class', 'clearBtn');
		newClearBtn.innerText = '초기화';
		btn.appendChild(newClearBtn);
		// ********************폴더 아이콘 초기화 버튼 생성 ********************
	}
	drag() {
		// // ********************움직이기 S ********************
		window.addEventListener('load', function () {
			var container = document.querySelector('.container');
			var dragging = false;
			var offset = { x: 0, y: 0 };
			var current = null;
			var left = container.offsetLeft;
			var top = container.offsetTop;

			document.onmousedown = function (e) {   // 마우스를 눌렀을 때
				if (e.target.classList.contains('foldIcon') || e.target.classList.contains('modal')) {
					e.preventDefault();
					dragging = true;
					current = e.target; // 마우스 다운 해서 현재 클릭된 녀석
					offset.x = e.offsetX;
					offset.y = e.offsetY;
				}
				// console.log(e.target);
				// console.log(dragging);
			};
			document.onmousemove = function (e) {   // 움직이는 동안
				// console.log(dragging)
				if (!dragging) return;
				if (e.target.classList.contains('foldIcon')) {
					current.style.left = e.pageX - offset.x - current.dataset.left + 'px';
					current.style.top = e.pageY - offset.y - current.dataset.top - 50 + 'px';
				} else {
					current.style.left = e.pageX - offset.x - left - 700 + 'px';
					current.style.top = e.pageY - offset.y - top + 'px';
				}
				// console.log(dragging);
			};
			document.onmouseup = function (e) {     // 마우스를 땠을 때
				dragging = false;
			};
		});

		// ********************움직이기 E ********************
	}
	clear() {
		// ******************** 초기화 S ********************
		document.querySelector('.clearBtn').addEventListener('click', function () {
			location.reload();
		});
		// ******************** 초기화 E ********************
	}
};

/** 폴더 만들기 */
class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	i = 0;
	constructor() {
		this.folderMake();

	}

	folderMake() {
		document.querySelector('.folderBtn').addEventListener('click', function () {

			// ********************폴더 html S ********************
			var newFolder = document.createElement('img');
			i++;
			newFolder.setAttribute('src', 'img/folder.png');
			newFolder.setAttribute('class', 'foldIcon');
			newFolder.classList.add('fold');
			newFolder.setAttribute('alt', 'folder' + i);
			contain.appendChild(newFolder);
			newFolder.onload = function () {
				newFolder.dataset.left = newFolder.offsetLeft;
				newFolder.dataset.top = newFolder.offsetTop;
			};
			// ********************폴더 html E ********************


			// ********************모달창 html S ********************

			var modal = document.createElement('div');
			modal.setAttribute('class', 'foldIcon');
			modal.setAttribute('class', 'modal');
			contain.appendChild(modal);

			var modalheader = document.createElement('input');
			modalheader.setAttribute('class', 'modalheader');
			modal.appendChild(modalheader);
			modalheader.innerText = newFolder.getAttribute('alt');
			modalheader.value = newFolder.getAttribute('alt');

			var modalclose = document.createElement('span');
			modalclose.setAttribute('class', 'modalclose');
			modalclose.innerText = 'X';
			modal.appendChild(modalclose);

			new Window();
		});
	};
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		this.icon();
	}
	/** 아이콘 만들기 */
	icon() {

		document.querySelector('.iconBtn').addEventListener('click', function () {
			// 랜덤 아이콘
			var iconImages = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png', 'icon6.png'];
			var iconRandom = Math.floor(Math.random() * iconImages.length);


			var newIcon = document.createElement('img');
			newIcon.setAttribute('src', 'img/' + iconImages[iconRandom]);
			newIcon.setAttribute('class', 'foldIcon');
			contain.appendChild(newIcon);
			newIcon.onload = function () {
				newIcon.dataset.left = newIcon.offsetLeft;
				newIcon.dataset.top = newIcon.offsetTop;
			};
		});
	}
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor() {
		this.window();
	}
	window() {
		document.querySelectorAll('.fold').forEach(function (folderdb) {
			document.querySelectorAll('.modal').forEach(function (modal) {

				var closeBtn = modal.querySelector(".modalclose");

				function modalOn() {
					modal.style.display = 'flex';
				};
				function modalOff() {
					modal.style.display = 'none';
				};
				folderdb.addEventListener('dblclick', function () {
					var modalhead = modal.querySelector('.modalheader').innerText;

					console.log(this.getAttribute('alt'))
					if (modalhead === this.getAttribute('alt')) {
						modalOn();
					}
				});

				closeBtn.addEventListener("click", function () {
					modalOff();
				});
			});
		});
		// ********************모달창 기능 E ********************
	};
};




/**
웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
요구사항은 다음과 같습니다.
아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!
객체 리터럴?
 */