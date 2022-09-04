const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);


const nameId = 'name'
const inputName = gi(nameId);

const emailId = 'email'
const inputEmail = gi(emailId);

const passwordId = 'password'
const inputPassword = gi(passwordId);

const bioId = 'bio';
const inputBio = gi(bioId);

const ageId = 'under_18';
const inputAge = gi(ageId);

const jobId = 'job';
const inputJob = gi(jobId);

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

const inputValidation = (e, v, t) => {
    e.addEventListener('keyup', () => {
        const isInputValid = e.validity.valid;
        const validationId = `${v}-validation`;


        if (isInputValid) {
            gi(validationId).innerText = '';
        } else if (e.id == v && !isInputValid) {
            gi(validationId).innerText = t;
        }
        checkFormValidity();
    });

    e.addEventListener('click', () => {
        const isInputValid = e.validity.valid;
        const validationId = `${v}-validation`;
        if (isInputValid) {
            gi(validationId).innerText = '';
        } else if (e.id == v && !isInputValid) {
            gi(validationId).innerText = t;
        }
        checkFormValidity();
    });
};

inputValidation(inputName, nameId, 'Mínimo 5 caracteres');
inputValidation(inputEmail, emailId, 'Email inválido');
inputValidation(inputPassword, passwordId, 'Mínimo 6 caracteres. Máximo 20 caracteres.');
inputValidation(inputBio, bioId, 'Mínimo 20 caracteres.');
inputValidation(inputAge, ageId);
inputValidation(inputJob, jobId);

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