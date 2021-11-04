
document.querySelectorAll(".delete").forEach((element, index) => {
    element.onclick = () => {
        // document.querySelectorAll(".actualEvent")[index].style.display="none";
        element.parentNode.style.display = "none";
    }
});
findParameter(".dots").onclick = () => {
    findParameter(".dropDown-options").style.display="inherit";
    console.log("click");
    
}
findParameter(".dropDown-optionP").onblur=()=>{
    console.log("ceva");
    findParameter(".dropDown-options").style.display="none";
}
document.querySelectorAll(".dropDown-optionP").forEach((element, index) => {
    element.onclick = () => {
        // document.querySelectorAll(".actualEvent")[index].style.display="none";
        element.parentNode.parentNode.parentNode.style.display = "none";
    }
});
findParameter(".btnEvent").onclick=()=>{
    const event=findParameter(".actualEvent");
    findParameter(".events").innerHTML+=" "+event.innerText;+" ";
}
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