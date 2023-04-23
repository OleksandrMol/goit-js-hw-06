const control = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = control.valueAsNumber+ `px`;

control.addEventListener("input", onSise);

function onSise(evt) {
    text.style.fontSize = evt.currentTarget.valueAsNumber + 'px';
}
