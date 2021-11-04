// console.log(getInput(".username").value);
if (localStorage.getItem("user")) {
    hide("not-registered");
    // hide("form-container");
    console.log(localStorage.getItem("user"));
} else
    hide("logged-in");

if (findParameter(".log-out"))
    document.querySelectorAll(".log-out").forEach(element => {
        element.onclick = () => {
            logOutUser();
            window.location.reload();
        }
    });