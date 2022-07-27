var btnTitle = document.getElementById("myBtn");
var modal = document.getElementById("myModal")
var clos = document.getElementById("myClose")
var content = document.getElementById('myModalContent');
var colTitle = document.getElementById("myTitle");
var test = document.getElementById("test");

function opacity1() {    
   content.style.opacity = 1;
}

function none(){
    modal.style.display = "none";
}

btnTitle.onclick = function() {
    colTitle.style.color = "red";
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}

clos.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}
test.onclick = function() {
    test.style.backgroundColor = "red";
    test.style.marginLeft = "100px";
    test.style.marginTop = "100px";
}

