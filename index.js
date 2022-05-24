const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phone_number.value.trim();

    if(firstnameValue === '') {
        setErrorFor(firstname, 'First Name cannot be empty');
    } else {

    }
    if(lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be empty');
    } else {

    }
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else {

    }    
    if(phonenumberValue === '') {
        setErrorFor(phone_number, 'Phone number cannot be empty');
    } else {

    }
}

function setErrorFor(input, message) {
    const contactUS = input.parentElement;
    const small = contactUS.querySelector('small');

    small.innerText = message;

    contactUS.className = 'missed_field';
}