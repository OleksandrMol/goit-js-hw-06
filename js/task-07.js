const control = document.getElementById("font-size-control");
const text = document.getElementById("text");

control.addEventListener("input", onSise);

function onSise(evt) {
    text.style.fontSize=evt.currentTarget.valueAsNumber + 'px'
}