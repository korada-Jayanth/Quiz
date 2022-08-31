const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highscores = JSON.parse(localStorage.getItem("highscore")) || [];
const Max_High_scores = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

     const score = {
         score:Math.floor(Math.random() * 100),
         name: username.value
     };
     highscores.push(score); 
     highscores.sort( (a,b) =>  b.score-a.score)
     highscores.splice(5);

     localStorage.setItem("highscores", JSON.stringify(highscores));
     window.location.assign("/");
};