// contact js form validation
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('subit-error');

function validateName() {
    //this variable will store the content written in the input box name aka the value
    const name = document.getElementById('contact-name').value;
    //condition if the input field is empty
    if (name.length === 0) {
        //will display a name error 'name is required'
        nameError.innerHTML = 'Write full name'; // Ensure nameError is correctly selected
        console.log(nameError)
        return false
    }
    //conditon checks if first character is alpahbet then one space after that it could be any character a to z
    //!name means value is not matching expression 
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      nameError.innerHTML = 'Write full name'; // Ensure nameError is correctly selected
        return false;
    }
        //if theres not error display icon and return true
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; // Ensure nameError is correctly selected
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    let phone = phoneInput.value;

    // Remove any non-numeric characters from the input value
    phone = phone.replace(/\D/g, '');

    // Update the value in the input field
    phoneInput.value = phone;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    // If there's no error, display the check icon
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validateEmail(){
    //getting the value of the input boz
    const email = document.getElementById('email').value;
    //check the length if it is 0 (empty)
    if(email.length === 0 ){
        emailError.innerHTML = 'Email required' //display error
        return false;
     }
     //it should be any alphabet, it main contain . - _ and it can container any number there should be @
    if(email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){//
        emailError.innerHTML = 'Email Invalid';
        return false
    }
    //if theres not error display icon and return true
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}


function validateMessage() {
    const message = document.getElementById('message').value;
    const required = 60;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    // Corrected from emailError to messageError
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false
    }

}