var sidenav=document.getElementById("sidenav")
var close=document.getElementById("close")
var menu=document.getElementById("menu")
 
menu.addEventListener("click",function(){
    sidenav.style.right="0"
})
close.addEventListener("click",function(){
    sidenav.style.right="-60%"
})