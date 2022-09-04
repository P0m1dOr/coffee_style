let element=document.querySelectorAll(".wow");
for(var i=0; i<element.length; i++) {
    element[i].style.setProperty('animation-duration', '0.5s');
}
console.log(element)