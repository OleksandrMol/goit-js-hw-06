const inpForm = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inpForm.addEventListener("input", (evt) => {
    let user = 'Anonymous';
    if (inpForm.value === '' || inpForm.value.trim() === '') {
        nameOutput.textContent = user;
    } else {
        nameOutput.textContent = evt.currentTarget.value
    }
});
