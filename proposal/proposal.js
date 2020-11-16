let answersDiv = document.querySelector('.answers');
let yesDiv = document.querySelector('#yes')
let noDiv = document.querySelector('#no');

yesDiv.onclick = () => alert('Congratulation!');

noDiv.onmouseover = () => answersDiv.classList.toggle('reverse');