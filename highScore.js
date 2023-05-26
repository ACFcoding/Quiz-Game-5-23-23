var user = document.getElementById('username');
var score = document.getElementById('userScore');
var button = document.getElementById('button');
var savedScore = localStorage.getItem('savedScore');
var bestScores =JSON.parse(localStorage.getItem('bestScores'))

//score.innerHTML = finalScore;

//user.addEventListener('keyup', () => {
    //button.disabled = !username.value;
//}
//);
finalScore = time;

scoreSave = e => {
    preventDefault();


highScoreSave = e => {
    preventDefault();

    var score = {
        loggedName: user.value
    }


    bestScores.push();
    console.log(bestScores);
}
};