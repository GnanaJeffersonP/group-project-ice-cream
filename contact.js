var btn1 = document.getElementById("btn1")
    var pop1 = document.querySelector(".pop1")
    var close1 = document.getElementById("close1")
    var overlay1 = document.querySelector(".overlay1")
    btn1.addEventListener("click",function(){
        pop1.classList.remove("hidden")
        overlay1.classList.remove("hidden")
    })
    close1.addEventListener("click",function(){
        pop1.classList.add("hidden")
        overlay1.classList.add("hidden")
    })

    var btn2 = document.getElementById("btn2")
    var pop2 = document.querySelector(".pop2")
    var close2 = document.getElementById("close2")
    var overlay2 = document.querySelector(".overlay2")
    btn2.addEventListener("click",function(){
        pop2.classList.remove("hidden")
        overlay2.classList.remove("hidden")
    })
    close2.addEventListener("click",function(){
        pop2.classList.add("hidden")
        overlay2.classList.add("hidden")
    })


var isValid = true;

var nameinput1 = document.getElementById("nameinput1");
var nameerror1 = document.getElementById("nameerror1");
nameinput1.addEventListener("blur", function () {
    if (this.value.trim() === "") {
        nameerror1.textContent = 'Name Cannot be Empty';
        this.focus();
        isValid = false;
    }
    else {
        nameerror1.textContent = "";
        isValid = true;
    }
});

var nameinput2 = document.getElementById("nameinput2");
var nameerror2 = document.getElementById("nameerror2");
nameinput2.addEventListener("blur", function () {
    if (this.value.trim() === "") {
        nameerror2.textContent = 'Name Cannot be Empty';
        this.focus();
        isValid = false;
    }
    else {
        nameerror2.textContent = "";
        isValid = true;
    }
});
var phoneinput = document.getElementById("phoneinput");
var numbererror = document.getElementById("numbererror");
var phoneregex = /^\d{10}$/

phoneinput.addEventListener("blur", function () {
    if (phoneregex.test(this.value).trim() === "") {
        numbererror.textContent = 'Phone Number is Required';
        this.focus();
        isValid = false;
    }
    else {
        numbererror.textContent = "";
        isValid = true;
    }
});

var emailinput = document.getElementById("emailinput");
var emailerror = document.getElementById("emailerror");
emailinput.addEventListener("blur", function () {
    var emailvalue = emailinput.value;
    var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.value.trim() === "") {
        emailerror.textContent = "Email is Required"
        this.focus();
        isValid = false;
    }
    else if (!emailpattern.test(this.value.trim())) {
        emailerror.textContent = "Enter a Valid Email";
        this.focus();
        isValid = false;
    }
    else {
        emailerror.textContent = "";
        isValid = true;
    }
});

var subjectinput = document.getElementById("subjectinput");
var subjecterror = document.getElementById("subjecterror");
subjectinput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
        subjecterror.textContent = 'Subject Cannot be Empty';
        this.focus();
        isValid = false;
    }
    else {
        subjecterror.textContent = "";
        isValid = true;
    }
});

var cityinput = document.getElementById("cityinput");
var cityerror = document.getElementById("cityerror");
cityinput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
        cityerror.textContent = 'City Cannot be Empty';
        this.focus();
        isValid = false;
    }
    else {
        cityerror.textContent = "";
        isValid = true;
    }
});

var messageinput = document.getElementById("messageinput");
var messageerror = document.getElementById("messageerror");
messageinput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
        messageerror.textContent = "Message is Required";
        this.focus();
        isValid = false;
    }

    else {
        messageerror.textContent = "";
        isValid = true;
    }
});

const charcount = document.getElementById("charcounter");
messageinput.addEventListener("input", function () {
    let currentlength = messageinput.value.length;
    charcount.textContent = `${currentlength} / 500`;
});
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    let namevalid1 = nameinput1.value.trim() !== "";
    let namevalid2 = nameinput2.value.trim() !== "";
    let numbervalid = phoneinput.value.trim() !== "";
    let emailvalid = emailinput.value.includes("@");
    let subjectvalid = subjectinput.value.trim() !== "";
    let cityvalid = cityinput.value.trim() !== "";
    let messagevalid = messageinput.value.trim() !== "";

    if (!namevalid1 || !namevalid2 || !numbervalid || !emailvalid || !subjectvalid || !cityvalid || !messagevalid) {
        event.preventDefault();
        alert("Please Enter values");
    }
    else {
        alert("Form Submitted Successfully!");
    }
});