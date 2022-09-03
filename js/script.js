const qs = (e) => document.querySelector(e);

const nameId = '#name'
const inputName = qs(nameId);

const emailId = '#email'
const inputEmail = qs(emailId);

const passwordId = '#password'
const inputPassword = qs(passwordId);

const bioId = '#bio';
const inputBio = qs(bioId);

const ageId = '#under_18';
const inputAge = qs(ageId);

const jobId = '#job';
const inputJob = qs(jobId);

const inputInterests = document.getElementsByName('user_interest');

const submitBtn = qs('#submit');

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

let inputValidation = (e, v) => {
    e.addEventListener('keyup', () => {

        let isInputValid = e.validity.valid;

        if (isInputValid) {
            qs(v).innerText = '';
        };

        if (e.id == 'name' && !isInputValid) {
            qs(v).innerText = 'Mínimo 5 caracteres';
        } else if (e.id == 'email' && !isInputValid) {
            qs(v).innerText = 'Email inválido';
        } else if (e.id == 'password' && !isInputValid) {
            qs(v).innerText = 'Mínimo 6 caracteres. Máximo 20 caracteres.';
        } else if (e.id == 'bio' && !isInputValid) {
            qs(v).innerText = 'Mínimo 20 caracteres.';
        }
        checkFormValidity();
    });

    e.addEventListener('click', () => {
        if (e.id == 'under_18' || e.id == 'job') {
            checkFormValidity();
        };
    });
};

inputValidation(inputName, `${nameId}-validation`);
inputValidation(inputEmail, `${emailId}-validation`);
inputValidation(inputPassword, `${passwordId}-validation`);
inputValidation(inputBio, `${bioId}-validation`);
inputValidation(inputAge, `${ageId}-validation`);
inputValidation(inputJob, `${jobId}-validation`);

inputInterests.forEach(e => e.addEventListener('click', () => {
    const isOneChecked = Array.prototype.slice.call(inputInterests).some(x => x.checked);
    inputInterests.forEach(e => {
        if (isOneChecked) {
            e.setCustomValidity('')
            qs('#interest-validation').innerText = '';
        } else {
            e.setCustomValidity('invalid')
            qs('#interest-validation').innerText = 'Escolha uma opção.';
        };
    });
    checkFormValidity();
}));

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('Formulário Enviado!');
    form.reset();
    checkFormValidity();
});