//redirect to home page if user logged in
window.onload = function() {
    if(sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)) {
            location.replace("/");
        }
    }
}

const loader = document.querySelector(".loader");
// selects input

const submitBtn  = document.querySelector(".submit-btn");
const names = document.querySelector("#name") || null;
const email = document.querySelector("#email");
const password = document.querySelector("#password")
const number = document.querySelector("#number")  || null;
const tac = document.querySelector("#terms-and-cond")  || null;
const notification = document.querySelector("#notification")  || null;
const btnToggle = document.querySelector("#btn-img");
const imageToggle = document.querySelector(".image-btn")
const showText = document.querySelector(".show");
submitBtn.addEventListener("click", function() {
    if(names != null) { //signup page
        if(names.value.length < 3) {
            showAlert("name must be 3 letters long")
        } else if(!email.value.length) {
            showAlert("enter your email");
    
        } else if(password.value.length < 8) {
            showAlert("password should be 8 letters long");
        } else if(!number.value.length) {
            showAlert("enter your phone number");
        } else if(!Number(number.value) || number.value.length < 10)  {
            showAlert("invalid number, please enter a valid one")
        } else if (!tac.checked) {
       showAlert("you must agree to our terms and condition");
        } else {
    // submit form
            loader.style.display = 'block';
            
            sendData("/signup", {
                names: names.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
    
            })
       }
    } else {
        //login page
        if(!email.value.length || !password.value.length) {
            showAlert("fill all the inputs")
        } else {
            loader.style.display = 'block';
            
            sendData("/login", {
                email: email.value,
                password: password.value,
             
            })
        }
    }
  
})

btnToggle.addEventListener("click", myToggle)

// Password Visibility

function myToggle() {
    if(password.type == "password") {
        password.type = "text";
       imageToggle.style.display = "hide";
        imageToggle.src = "images/visibility off.png";
        showText.textContent = "hide password"
    } else {
        password.type = "password";
        imageToggle.src = "images/visibility.png";
        showText.textContent = "show Password"
    }
}