class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

const draggable = ($target) => {
	let isPress = false,
		prevPosX = 0,
		prevPosY = 0;
	
	$target.onmousedown = start;
	$target.onmouseup = end;
	  
	// 상위 영역
	window.onmousemove = move;
   
	function start(e) {
	  prevPosX = e.clientX;
	  prevPosY = e.clientY;
  
	  isPress = true;
	}
  
	function move(e) {
	  if (!isPress) return;
  
	  const posX = prevPosX - e.clientX; 
	  const posY = prevPosY - e.clientY; 
	  
	  prevPosX = e.clientX; 
	  prevPosY = e.clientY;
	  
	  $target.style.left = ($target.offsetLeft - posX) + "px";
	  $target.style.top = ($target.offsetTop - posY) + "px";
	}
  
	function end() {
	  isPress = false;
	}
  }
  
  window.onload = () => {
	const $target = document.querySelector(".mover");
	
	draggable($target);
  }
/**
웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
요구사항은 다음과 같습니다.
아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!
 */