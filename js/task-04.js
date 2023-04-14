const valueS = document.getElementById("value");
const remButton = document.querySelector('#counter button[data-action="decrement"]');
const addButton = document.querySelector('#counter button[data-action="increment"]');


function increment() {
    let counterValue = Number(valueS.textContent);
    counterValue += 1;
    valueS.textContent = counterValue;
}

function decrement() {
    let counterValue = Number(valueS.textContent);
    counterValue -= 1;
    valueS.textContent = counterValue;
}
    
addButton.addEventListener('click', increment);
remButton.addEventListener('click', decrement);