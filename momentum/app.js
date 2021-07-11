const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onButton(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello " + username;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null ) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onButton);
} else {
    greeting.innerText = `Hello ${savedUsername}`;
}