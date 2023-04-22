const flNerr = document.querySelector('.fullNameErr');
const fullNValid = document.querySelector('.fullNValid');
const emailErr = document.querySelector('.emailError');
const emailValid = document.querySelector('.emailValid');
const msgErr = document.querySelector('.msgError');
const msgValid = document.querySelector('.msgValid');
const submitErr = document.querySelector('.submitError');

function validateFullName() {
  const fullName = document.getElementById('fullName').value;

  if (fullName.length === 0) {
    flNerr.innerHTML = 'Full name is required';
    fullNValid.innerHTML = ' ';
    return false;
  }
  if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    flNerr.innerHTML = 'Enter second name';
  }

  flNerr.innerHTML = null;
  fullNValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  fullNValid.style.color = 'green';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if (email.length === 0) {
    emailErr.innerHTML = 'Email is required';
    emailValid.innerHTML = null;

    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    emailErr.innerHTML = 'Email Invalid';
    emailValid.innerHTML = null;
    return false;
  }
  emailErr.innerHTML = null;
  emailValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  emailValid.style.color = 'green';
  return true;
}

function validateMsg() {
  const msg = document.getElementById('msg').value;
  const required = 30;

  const charLeft = required - msg.length;
  if (charLeft > 0) {
    msgErr.innerHTML = `${charLeft}more characters required`;
    msgValid.innerHTML = null;
    return false;
  }
  msgErr.innerHTML = null;
  msgValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  msgValid.style.color = 'green';
  return true;
}

// Comment for the reviewer

// I have used the variable in the html but am getting
// no-unused-vars error for formValidate so i had to disable the eslint
// eslint-disable-next-line no-unused-vars
function formValidate() {
  if (!validateFullName() || !validateEmail() || !validateMsg()) {
    submitErr.style.display = 'block';
    submitErr.style.color = 'red';
    submitErr.innerHTML = 'Please fix error to submit';
    setTimeout(() => {
      submitErr.style.display = 'none';
    }, 3000);
    return false;
  }
  submitErr.innerHTML = '';
  return true;
}
