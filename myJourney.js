function loadScores() {
    const scoreText = localStorage.getItem('score');
    const scoreList = document.querySelector('#scoreList');
    if(scoreText) {
        scoreList.innerHTML = scoreText;
    } else {
        scoreList.innerHTML = '<tr><td colSpan=4>No quizzes logged yet</td></tr>';
    }
  }
  loadScores();