const emojiContainer = document.getElementById('emojiContainer');
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn');
const emojiInput = document.getElementById('emoji-input');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');
const myEmojis = ['🐶', '🍩', '🥰'];

function renderEmojis() {
    emojiContainer.innerHTML = '';
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span`;
    }
}
renderEmojis(myEmojis);
pushBtn.addEventListener('click', function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = '';
        renderEmojis(myEmojis);
    }
});

unshiftBtn.addEventListener('click', function () {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = '';
        renderEmojis(myEmojis);
    }
});

popBtn.addEventListener('click', function () {
    myEmojis.pop();
    renderEmojis(myEmojis);
});

shiftBtn.addEventListener('click', function () {
    myEmojis.shift();
    renderEmojis(myEmojis);
});
