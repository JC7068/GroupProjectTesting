// Register user
function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    localStorage.setItem("user", JSON.stringify({ username, password }));

    alert("User registered!");
    window.location.href = "login.html";
}

// Login user
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No users registered.");
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid login.");
    }
}

// On main page: show welcome message if logged in
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loggedIn") === "true") {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("welcomeMessage").textContent =
                "You are logged in as: " + user.username;
        }
    }
});
