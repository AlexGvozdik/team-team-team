let scroll = document.getElementById("top");
const rotate = setInterval(() => 
	scroll.style.transform = 'rotate('+window.pageYOffset+'deg)'
, 20);