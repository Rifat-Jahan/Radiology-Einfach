function resetPassword(){

    var auth = firebase.auth(); // firebase auth
    var email = document.getElementById("forgetEmail").value;  // get value from html input

    if(email !== ""){
        auth.sendPasswordResetEmail(email).then(function(){  //send email if correct other wise catch will run
            window.alert("Email has been sent to you, Please check and verify.");
        })
        .catch(function(err){  
            var errorCode = err.code;
            var errorMessage = err.message;
            console.log(errorCode)      //print on browser console
            console.log(errorMessage)
            window.alert("Message" + errorMessage)  // popup on current screen
        })
    }
        
}