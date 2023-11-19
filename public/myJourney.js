async function loadScores() {
    let scores = [];
    try {
        scoresResponse = await fetch('/api/scores');
        scores= await scoresResponse.json();
        
    } catch {
        const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    console.log("scores:")
    console.log(scores);
    displayScores(scores);
    }

    function displayScores(scores) {
        const userScoreListElement = document.querySelector('#userScoreList');
        for (const [username, score] of scores) {
            if(username === localStorage.getItem('username')) {
                const scoreRow = document.createElement('tr');
                scoreRow.innerHTML = `<td>${score}</td>`;
                listElement.appendChild(scoreRow);
            }
        }
        const allScoreListElement = document.querySelector('#allScoreList');
        for (const [username, score] of userScores) {
            const scoreRow = document.createElement('tr');
            scoreRow.innerHTML = `<td>${score}</td>`;
            listElement.appendChild(scoreRow);
        }

    }



    const scoreText = localStorage.getItem('score');
    const scoreList = document.querySelector('#scoreList');
    if(scoreText) {
        scoreList.innerHTML = scoreText;
    } else {
        scoreList.innerHTML = '<tr><td colSpan=4>No quizzes logged yet</td></tr>';
    }
}
loadScores();