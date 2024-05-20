let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let emailInput = document.getElementById("email");
let generalInput = document.getElementById("general");
let supportInput = document.getElementById("support");
let generalIcon = document.querySelector(".general-icon");
let msgEle = document.querySelector(".msg");
let checkboxInput = document.querySelector(".checkbox");
let firErr = document.querySelector(".error1");
let secErr = document.querySelector(".error2");
let thirdErr = document.querySelector(".error3");
let forthErr = document.querySelector(".error4");
let fiveErr = document.querySelector(".error5");
let sixErr = document.querySelector(".error6");
let form = document.querySelector(".form");
let subBtn = document.querySelector(".btn");
let successCard = document.getElementById("card");
form.addEventListener("submit",contactForm)
subBtn.addEventListener("click",contactForm)

function contactForm(event){
    event.preventDefault();
    if (firstName.value === "") {
        firErr.classList.add("active");
        firstName.style.border = "thin solid hsl(0, 66%, 56%)";
    }else{
        firErr.classList.remove("active")
        firstName.style.border = "thin solid hsl(148, 38%, 91%)";
        firstName.value = ""
    }
    if (lastName.value === "") {
        secErr.classList.add("active");
        lastName.style.border = "thin solid hsl(0, 66%, 56%)";
    }else{
        secErr.classList.remove("active");
        lastName.style.border = "thin solid hsl(148, 38%, 91%)";
        lastName.value = ""
    }
    if (emailInput.value === "") {
        thirdErr.classList.add("active");
        thirdErr.innerHTML = "This field is required"
        emailInput.style.border = "thin solid hsl(0, 66%, 56%)";
    }else if (!isEmail(emailInput.value)){
        thirdErr.innerHTML = "Provide correct email address";
        thirdErr.classList.add("active");
        emailInput.style.border = "thin solid hsl(0, 66%, 56%)";
        emailInput.value = ""
     }
     else{
        emailInput.value= ""
        thirdErr.classList.remove("active");
        emailInput.style.border = "thin solid hsl(148, 38%, 91%)";
     }
     if (!generalInput.checked && !supportInput.checked) {
        forthErr.classList.add("active");
     }
     else{
        forthErr.classList.remove("active");
        generalInput.checked = false;
        supportInput.checked = false;
     }
     
     if (msgEle.value === "") {
        fiveErr.classList.add("active");
        msgEle.classList.remove("msg")
        msgEle.classList.add("red");
     }
     else{
        fiveErr.classList.remove("active");
        msgEle.classList.add("msg")
        msgEle.classList.remove("red");
        msgEle.value= ""
     }
     if (!checkboxInput.checked) {
        sixErr.classList.add("active");
     }
     else{
        sixErr.classList.remove("active");
        checkboxInput.checked = false;
     }
     successCard.style.display = "block";
}

function isEmail(inputVal){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(inputVal);
}