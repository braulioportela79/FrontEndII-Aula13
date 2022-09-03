const qs = (e) => document.querySelector(e);
const qsa = (e) => document.querySelectorAll(e);

const inputName = qs('#name');
const inputEmail = qs('#mail');
const inputPassword = qs('#password');
const submitBtn = qs('#submit');
const inputAge = qs('#under_18');
const inputBio = qs('#bio');
const inputJob = qs('#job');
const inputInterests = document.getElementsByName('user_interest');
const form = qs('form');

inputInterests[0].setCustomValidity('invalid');

let checkFormValidity = () => {
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true');
    };
};

let nameValidation = () => {
    if (inputName.checkValidity()) {
        qs('#name-validation').innerText = '';
    } else {
        qs('#name-validation').innerText = 'Mínimo 5 caracteres';
    };
    checkFormValidity();
};

inputName.addEventListener('keyup', nameValidation);

let emailValidation = () => {
    if (inputEmail.checkValidity()) {
        qs('#email-validation').innerText = '';
    } else {
        qs('#email-validation').innerText = 'Email inválido';
    };
    checkFormValidity();
}

inputEmail.addEventListener('keyup', emailValidation);

let passwordValidation = () => {
    if (inputPassword.checkValidity()) {
        qs('#password-validation').innerText = '';
    } else {
        qs('#password-validation').innerText = 'Mínimo 6 caracteres. Máximo 20 caracteres.';
    };
    checkFormValidity();
};

inputPassword.addEventListener('keyup', passwordValidation);

let ageValidation = () => {
    if (inputAge.checkValidity()) {
        qs('#age-validation').innerText = '';
    } else {
        qs('#age-validation').innerText = 'Escolha uma opção.';
    };
    checkFormValidity();
};

inputAge.addEventListener('click', ageValidation);

let bioValidation = () => {
    if (inputBio.checkValidity()) {
        qs('#bio-validation').innerText = '';
    } else {
        qs('#bio-validation').innerText = 'Mínimo 20 caracteres.';
    };
    checkFormValidity();
};

inputBio.addEventListener('keyup', bioValidation);

let jobValidation = () => {
    if (inputJob.checkValidity()) {
        qs('#job-validation').innerText = '';
    } else {
        qs('#job-validation').innerText = 'Escolha uma opção.';
    };
    checkFormValidity();
};

inputJob.addEventListener('click', jobValidation);

let interestValidation = () => {
    const isOneChecked = Array.prototype.slice.call(inputInterests).some(x => x.checked);
    inputInterests.forEach(e => {
        if (isOneChecked) {
            e.setCustomValidity('')
            qs('#interest-validation').innerText = '';
        } else {
            e.setCustomValidity('invalid')
            qs('#interest-validation').innerText = 'Escolha uma opção.';
        };
    })
    checkFormValidity();
};

inputInterests.forEach(e => e.addEventListener('click', interestValidation));

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('Formulário Enviado!');
    form.reset();
});