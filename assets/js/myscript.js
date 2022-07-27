var modal = document.getElementById("myModal")
var myClose = document.getElementById("myClose")
var content = document.getElementById('myModalContent');
var button = document.getElementById('myBtn');

function opacity1() {
	content.style.opacity = 1;
}

button.onclick = function () {
	modal.style.display = "block";
	setTimeout(opacity1, 100);
}

function none() {
	modal.style.display = "none";
}

myClose.onclick = function () {
	content.style.opacity = "0";
	setTimeout(none, 500);
}

