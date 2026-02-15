function formListener () {
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        h2.textContent = "";
        h1.textContent = "Success - Have a Profitable Day.";
    });
}

function doPasswordsMatch () {      //fix
    const pw1 = document.querySelector("#pw1");
    const pw2 = document.querySelector("#pw2");
    pw2.addEventListener("keyup", () => {
        if (pw1 !== pw2) {
            pw1.setCustomValidity("Pass-phrases must match");
            pw2.setCustomValidity("Pass-phrases must match");
            pw2.reportValidity();
        } else {
            pw1.setCustomValidity("");
            pw2.setCustomValidity("");
            pw2.reportValidity();
        }
    });
}

formListener();
doPasswordsMatch();