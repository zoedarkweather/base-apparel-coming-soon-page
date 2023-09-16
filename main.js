const form = document.querySelector("#email-signup");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg")

form.addEventListener("submit", (e) => {    
    if(!email.validity.valid) {    
        e.preventDefault();    
        email.classList.add("error");
        errorMsg.textContent = "Please provide a valid email";
        errorMsg.setAttribute("role", "alert")
    }    
});

email.addEventListener("focus", () => {
    email.classList.remove("error");
    errorMsg.textContent = "";
    errorMsg.removeAttribute("role", "alert")
});