let answersDiv = document.querySelector('.answers');
let yesDiv = document.querySelector('#yes')
let noDiv = document.querySelector('#no');

yesDiv.onclick = () => congratulate();
noDiv.onmouseover = () => answersDiv.classList.toggle('reverse');

function congratulate(){
    alert('Congratulation!!!');
}