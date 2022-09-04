const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

const name = 'name'
const inputName = gi(name);

const email = 'email'
const inputEmail = gi(email);

const password = 'password'
const inputPassword = gi(password);

const bio = 'bio';
const inputBio = gi(bio);

const age = 'under_18';
const inputAge = gi(age);

const job = 'job';
const inputJob = gi(job);

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

let inputValidation = (e, v, t) => {
    e.addEventListener('keyup', () => {

        let isInputValid = e.validity.valid;
        let validationId = `${v}-validation`;

        if (isInputValid) {
            gi(validationId).innerText = '';
        } else if (e.id == v && !isInputValid) {
            gi(validationId).innerText = t;
        }
        checkFormValidity();
    });

    e.addEventListener('click', () => {
        if (e.id == v || e.id == v) {
            checkFormValidity();
        };
    });
};

inputValidation(inputName, name, 'Mínimo 5 caracteres');
inputValidation(inputEmail, email, 'Email inválido');
inputValidation(inputPassword, password, 'Mínimo 6 caracteres. Máximo 20 caracteres.');
inputValidation(inputBio, bio, 'Mínimo 20 caracteres.');
inputValidation(inputAge, age);
inputValidation(inputJob, job);

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