let submitB = findParameter(".submit");
const dbRef = firebase.database().ref();
// console.log(dbRef.child("user").get());
submitB.onclick = () => {
    let user = getInput(".username").value;
    let pass = getInput(".password").value;

    dbRef.child("user").child(user).get().then((snapshot) => {
        // console.log(snapshot);
        if (snapshot.exists()) {
            if (pass == snapshot.val().pass) {
                tempSnapshot = snapshot.val();
                hide("not-registered");
                hide("form-container");
                localStorage.setItem("user", snapshot.val().user);
                localStorage.setItem("email", snapshot.val().email);
                localStorage.setItem("img", snapshot.val().img);
                // localStorage.setItem("email", email);
                window.location = "index.html";
            }

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}
