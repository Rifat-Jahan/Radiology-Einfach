// 
function checkUser(){
    var accounts = localStorage.getItem("currentUser"); // get user from browser Application -> localstorage
    var obj = JSON.parse(accounts);                     // parse into json 
    if(obj!== null){
        alert("User is Already Logged in")              
        window.location.assign("html/Calender.html")      // navigate to apointment screen
    }
}

// 

function userNotLogin(){
    var accounts = localStorage.getItem("currentUser");   // get user from browser Application -> localstorage
    var obj = JSON.parse(accounts);                       // parse into json 
    if(obj=== null){                                       //if user not exist then it will return null
        alert("User is not logged in!")
        window.location.assign("login.html")              // navigate to apointment screen
    }
}