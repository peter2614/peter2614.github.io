function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) return;

    // adding playing class for css transform
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

// add listener for removing transition
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);

