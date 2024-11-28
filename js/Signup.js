function signUp() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var number = document.getElementById('number').value
    var postCode = document.getElementById('postCode').value
    var addressPractice = document.getElementById('addressPractice').value
    var email = document.getElementById('uniqueMail').value
    // var speciality = document.getElementById('speciality').value
   // var patientAndDoctor = document.getElementById('patientAndDoctor').value
    var password = document.getElementById('password').value
    var confirm_password = document.getElementById('confirm_password').value
    
    var regex = new RegExp("^[0-9]{5,8}$");

    if (password == confirm_password && email !== ""  && firstName !== "" && lastName !== "" && number !== "" && postCode !== "" && addressPractice !== "" ) {

                let categ = {
                    firstName: firstName,
                    lastName: lastName,
                    number: number,
                    postCode: postCode,
                    addressPractice: addressPractice,
                    email: email,
                    //patientAndDoctor: patientAndDoctor
                }

                //browser localstorage
                localStorage.setItem('regAcc', JSON.stringify(categ));

                //database
                var random = (new Date().getTime()).toString(36)


                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    
                    firebase.database().ref('Account/' + random).set(categ)
                    .then(() => {
                        window.location.assign("../index.html")
                    })

                })
                .catch(function(error) {
                    var errCode = error.code;
                    var errorMessage = error.message;
                    window.alert("Error : " + errorMessage);
                })
    }
    else{
        alert("Please fill all fields correct!")
    }
}

