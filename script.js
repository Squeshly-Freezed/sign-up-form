const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const form = document.querySelector("form");

function submitForm (e) {
    validatePassword;

    if (form.checkValidity()) {
        e.preventDefault();
        h2.textContent = "";
        h1.textContent = "Success - Have a Profitable Day, executive.";
    } else {
        e.preventDefault();
        form.reportValidity();
    }
}

form.addEventListener("submit", submitForm);



const pw1 = document.querySelector("#pw1");
const pw2 = document.querySelector("#pw2");
const submit = document.querySelector("button");

function validatePassword () {
    pw2.setCustomValidity(pw1.value !== pw2.value ? "Pass-phrases must harmonize" : "");
}

pw1.addEventListener("input", validatePassword);
pw2.addEventListener("input", validatePassword);