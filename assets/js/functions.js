function hide(parameter) {
    const findParameter = document.querySelector('.' + parameter + "");
    findParameter.style.display = "none";
}
function findParameter(parameter) {
    const par = document.querySelector(parameter);
    return par;
}
function validateParameter(parameter) {
    if (parameter != "") {
        return true;
    } else
        return false
}
function getInput(parameter) {
    const el = findParameter(parameter);
    return el;
}
function addToDataBase() {

}
function registerUser() {
    let data = {};
    let user = getInput(".username").value;
    let pass = getInput(".password").value;
    let email = getInput(".email").value;
    let rPass = getInput(".repeat-pass").value;
    console.log("aici ");
    data["user"] = user;
    data["pass"] = pass;
    data["email"] = email;
    if (validateParameter(user) && validateParameter(pass) && validateParameter(email) && validateParameter(rPass)) {
        // data["id"]=2;
        firebase.database().ref('user/' + data["user"]).set(data, function (error) {
            if (error) {
                console.log({ error });
            } else {
                alert("success");
            }
        });
    }
}
function logOutUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("img");
}