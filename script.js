var sidenav=document.getElementById("sidenav")
var close=document.getElementById("close")
var menu=document.getElementById("menu")
 
menu.addEventListener("click", function(){
    sidenav.classList.remove("translate-x-full");
})

close.addEventListener("click", function(){
    sidenav.classList.add("translate-x-full");
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

//category
var explore = document.getElementById("explore");
var categories = document.getElementById("categoryContainer");

explore.addEventListener("click", function () {

    if (categories.classList.contains("max-h-0")) {

        // SHOW
        categories.classList.remove("max-h-0");
        categories.classList.remove("opacity-0");
        categories.classList.remove("pointer-events-none");

        categories.classList.add("max-h-[500px]");
        categories.classList.add("opacity-100");

    } else {

        // HIDE
        categories.classList.remove("max-h-[500px]");
        categories.classList.remove("opacity-100");

        categories.classList.add("max-h-0");
        categories.classList.add("opacity-0");
        categories.classList.add("pointer-events-none");

    }

});


//timer

// Offer Countdown Timer

var offerEndDate = new Date("September 30, 2026 23:59:59").getTime();

var timer = setInterval(function () {

    var now = new Date().getTime();

    var distance = offerEndDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    var minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    var seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

    }

}, 1000);

//newsletter

var subscribeEmail = document.getElementById("subscribeEmail");
var subscribeBtn = document.getElementById("subscribebtn");
var emailPattern = /^[a-z0-9._%+-]+@gmail\.com$/i;

subscribeBtn.addEventListener("click", function(){

    var emailValue = subscribeEmail.value;

    if(emailValue == ""){

        alert("Please enter your email");

    }
    else if(!emailPattern.test(emailValue)){

        alert("Please enter a valid Gmail address");

    }
    else{

        successPopup.classList.remove("hidden");
        successPopup.classList.add("flex");

        subscribeEmail.value = "";

    }

});
var emojiContainer = document.getElementById("emojiContainer");

successClose.addEventListener("click", function(){

    successPopup.classList.remove("flex");
    successPopup.classList.add("hidden");

    var emojis = ["🍦", "🍨", "🍓", "✨", "🍒", "💗", "🍧"];

    emojis.forEach(function(emoji) {

        var span = document.createElement("span");

        span.textContent = emoji;

        span.classList.add("celebrate-emoji");

        span.style.left = Math.random() * 90 + "%";

        emojiContainer.appendChild(span);

        setTimeout(function() {
            span.remove();
        }, 1500);

    });

});