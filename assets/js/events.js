document.querySelectorAll(".delete").forEach((element, index) => {
    element.onclick = () => {
        // document.querySelectorAll(".actualEvent")[index].style.display="none";
        element.parentNode.remove();
    }
});
findParameter(".dots").onclick = () => {
    findParameter(".dropDown-options").style.display = "inherit";
    console.log("click");

}
findParameter(".dropDown-optionP").onblur = () => {
    console.log("ceva");
    findParameter(".dropDown-options").style.display = "none";
}
document.querySelectorAll(".dropDown-optionP").forEach((element, index) => {
    element.onclick = () => {
        // document.querySelectorAll(".actualEvent")[index].style.display="none";
        element.parentNode.parentNode.parentNode.remove();
    }
});
document.onclick = (e) => {
    let el = document.querySelector(".dots");
    let target = e.target;

    while(target)  {
        if(target==el){
            document.querySelector(".dropDown-options").style.display = "flex";

            return;
        }

        target = target.parentNode;

    }
    document.querySelector(".dropDown-options").style.display = "none";

}
findParameter(".btnEvent").onclick = () => {
    const event = findParameter(".actualEvent");
    let div = document.createElement("DIV");
    div.classList.add("actualEvent");
    document.querySelector(".events").appendChild(div);

    // findParameter(".events").innerHTML+=" "+event.innerText;+" ";
}