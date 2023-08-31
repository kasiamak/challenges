let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countString = count + ' - ';
    saveEl.textContent += countString;
    zeroCount();
    console.log(count);
}

function zeroCount() {
    count = 0;
    countEl.textContent = count;
}
