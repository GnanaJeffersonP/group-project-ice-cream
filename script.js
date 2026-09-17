var sidenav=document.getElementById("sidenav")
var close=document.getElementById("close")
var menu=document.getElementById("menu")
 
menu.addEventListener("click",function(){
    sidenav.style.right="0"
})
close.addEventListener("click",function(){
    sidenav.style.right="-60%"
})

// login

var loginModal = document.getElementById("loginModal");
var closelogin = document.getElementById("closelogin");
var loginbtn = document.querySelectorAll(".loginbtn");
var submit = document.getElementById("submit");
var user = document.getElementById("user");
var email = document.getElementById("email");
var password = document.getElementById("password");
loginbtn.forEach(function(btn) {

    btn.addEventListener("click", function() {

        loginModal.style.display = "flex";

    });

});

closelogin.addEventListener("click", function() {

    loginModal.style.display = "none";
});

submit.addEventListener("click", function(event) {
    event.preventDefault();
    if (email.value !== "" && password.value !== "") {
        loginbtn.forEach(function(btn) {
            btn.style.display = "none";
        });

        user.style.display = "flex";

        loginModal.style.display = "none";

    }

});
