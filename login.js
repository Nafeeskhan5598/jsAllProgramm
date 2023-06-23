

function validated() {
    var email = document.getElementById('emails').value;
    var pass = document.getElementById('password').value;

    if (email == "") {
        document.getElementById('emailids').innerHTML = " ** Please fill the Email";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (pass == "") {
        document.getElementById('pass_error').innerHTML = " ** Please fill the password";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('pass_error').innerHTML = " ** user password length must be between 5 and 20";
        return false;
    }
}





// var email = document.querySelector('#Email')
// var password = document.querySelector('#Password')
// var email_error = document.getElementById('email_error')
// var pass_error = document.getElementById('pass_error')


// function validated(){
//     if(email.value.length < 9){
//         email.style.border = "1px solid red";
//         email_error.innerHTML = 'please fill the email';


//         return false;
//     }
//     else {
//         email_error.innerHTML = 'email';
//     }




// document.
// function validated(){
// if(Password.value.length < 8){
//     password.style.border = "1px solid red";
//     pass_error.innerHTML = 'please fill the password'

// return false;
// }
//     else {
//         pass_error.innerHTML = 'form';
//     }
// }
