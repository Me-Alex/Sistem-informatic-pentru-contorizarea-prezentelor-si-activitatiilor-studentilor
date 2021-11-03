hide("logged-in");
// console.log(getInput(".username").value);
let submitB = findParameter(".submit");
let data={};
submitB.onclick = () => {
    let user = getInput(".username").value;
    let pass = getInput(".password").value;
    let email= getInput(".email").value;
    console.log("aici ");
    data["user"] = user;
    data["pass"]= pass;
    data["email"]=email;
    // data["id"]=2;
    firebase.database().ref('test2/'+data["user"]).set(data, function (error) {
        if (error) {
            console.log({ error });
        } else {
            alert("success");
        }
    });
}