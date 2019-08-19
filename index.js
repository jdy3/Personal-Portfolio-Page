let textP = document.getElementById('textP');

let heart = document.getElementById('heart');

let arrow = document.getElementById('arrow');

let instruct = document.getElementById('instruct')

function anim(event) {
  heart.className = heart.className.replace('beat', 'enable');
  textP.className = textP.className.replace('hide', 'reveal');
  arrow.classList.add('hide');
  instruct.classList.add('hide');
}

heart.addEventListener('click', anim);
