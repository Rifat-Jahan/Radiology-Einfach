function login() {

    var userEmail = document.getElementById("loginId").value;
    var userPass = document.getElementById("loginPassword").value;

    var login = {
        userEmail: userEmail
    }
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)  //firebase will is user exist
        .then(() => {
            localStorage.setItem('currentUser', JSON.stringify(login));   // set value on browser's local storage 
            window.location.assign("html/Calendar.html")                    // Navigate to Appointment screen 

            // alert("ok")
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);
        });

}
