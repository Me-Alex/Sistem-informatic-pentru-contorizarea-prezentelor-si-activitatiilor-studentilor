let submitB = findParameter(".submit");
const dbRef = firebase.database().ref();
submitB.onclick = () => {
    let user = getInput(".username").value;
    let pass = getInput(".password").value;

    dbRef.child("user").child(user).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val().email);
            tempSnapshot = snapshot.val();
            console.log(tempSnapshot.email);
            hide("not-registered");
            hide("form-container");
            localStorage.setItem("user", snapshot.val().user);
            // localStorage.setItem("email", email);
            window.location = "index.html";

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}
