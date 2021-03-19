//time log to log time of email submission
function logSubTime(event) {
    logTime.textContent = `email submitted! time stamp: ${event.timeStamp}`;
    event.preventDefault();
}
const footer = document.getElementsByClassName('.footer-form');
const logTime = document.getElementById('#logTime');
//footer.addEventListener('submit',logSubTime);


//event listener to change background color with button

let btn = document.querySelector('#subBtn');

btn.addEventListener('click', ()=>{
    console.log('I was clicked')
})


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}