const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");


function onButton(event) {
    event.preventDefault();
    const logName = loginInput.value;
    console.log(logName);
}

loginForm.addEventListener("submit",onButton);

