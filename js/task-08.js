const form = document.querySelector(".login-form");

form.addEventListener('submit', subFunction);

function subFunction (evt) {
    evt.preventDefault();
    const { elements: { email, password } } = evt.currentTarget;
    const data = {
        Email: [email.value],
        Password: [password.value],
    }
    if (email.value === '' || password.value === '') {
        return window.alert('Заповніть всі поля')
    }
    
    console.log(data)
    evt.currentTarget.reset();
         
}
