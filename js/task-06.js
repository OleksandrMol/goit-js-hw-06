
const validInput = document.querySelector('#validation-input, input[data-length="6"]');

validInput.addEventListener("blur", onBlur);

function onBlur() {
    if (Number(validInput.value.length) === Number(validInput.getAttribute('data-length'))) {
        validInput.classList.add('valid')
        validInput.classList.remove('invalid')

    } else {
        validInput.classList.add('invalid')
        validInput.classList.remove('valid')

    }
}
