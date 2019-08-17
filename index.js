let text = document.getElementById('text');

let heart = document.getElementById('heart');

function explosion(event) {
  heart.className = heart.className.replace('beat', 'enable');
  text.className = text.className.replace('hide', 'reveal');
}

heart.addEventListener('click', explosion);
