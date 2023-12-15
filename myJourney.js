async function loadScores() {
    let scores = [];
    try {
        scoresResponse = await fetch('/api/scores');
        scores= await scoresResponse.json();
    } catch {
        const scoresText = localStorage.getItem('scores');
        console.log("failed fetch request")
    }
    console.log("scores:")
    console.log(scores);
    displayScores(scores);
}

    function displayScores(scores) {
        const userScoreListElement = document.querySelector('#userScoreList');
        const allScoreListElement = document.querySelector('#allScoreList');
        scores.forEach((scoreOBJECT) => {     
            let score = scoreOBJECT.score;     
            let username = scoreOBJECT.username; 

            if(username === localStorage.getItem('username')) {
                const scoreRow = document.createElement('div');
                scoreRow.innerHTML = `<div>${score}</div>`;
                userScoreListElement.appendChild(scoreRow);
            } else {
                const scoreRow = document.createElement('div');
                scoreRow.innerHTML = `<div>${score}</div>`;
                allScoreListElement.appendChild(scoreRow);
            }
        })
        const userScoreList = document.querySelector('#userScoreList');
        if(userScoreList === null || userScoreList == []) {
            const scoreText = localStorage.getItem('scores');
            
            if(scoreText) {
                userScoreList.innerHTML = scoreText;
            } else {
                userScoreList.innerHTML = '<tr><td colSpan=4>No quizzes logged yet for this acccount</td></tr>';
            }
        }
    }
loadScores();