document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementsByClassName('card');
    let allImages = document.getElementsByClassName('card-image');
    let movesDisplay = document.querySelector('.move-counter');
    let toggledCardsArray = [];
    let move = 0;
    let winCount = 0;
    const restart = document.getElementById('restart');

    const imagesLinkArray = [
        { id: 1, image: 'pfp1.jpg', newAlt: 'Angular Image' },
        { id: 2, image: 'pfp2.jpg', newAlt: 'HTML Image' },
        { id: 3, image: 'pfp3.jpg', newAlt: 'JavaScript Image' },
        { id: 4, image: 'team1.jpg', newAlt: 'React Image' },
        { id: 5, image: 'pfp2.jpg', newAlt: 'Vue Image' },
        { id: 6, image: 'team2.jpg', newAlt: 'JavaScript Image' },
        { id: 7, image: 'team3.jpg', newAlt: 'Vue Image' },
        { id: 8, image: 'pfp1.jpg', newAlt: 'HTML Image' },
        { id: 9, image: 'team3.jpg', newAlt: 'CSS Image' },
        { id: 10, image: 'pfp3.jpg', newAlt: 'Angular Image' },
        { id: 11, image: 'team2.jpg', newAlt: 'CSS Image' },
        { id: 12, image: 'team1.jpg', newAlt: 'React Image' }
    ];

  
    const restartGame = () => {
        let toggledCard = document.getElementsByClassName('card toggled');
        imagesLinkArray.sort(() => Math.random() - 0.5);
        Object.values(toggledCard).forEach(function (el) {
            setTimeout(() => {
                el.classList.remove("toggled");
            }, 0);
        });
        toggledCardsArray.length = 0;
        move = 0;
        winCount = 0;
        movesDisplay.innerText = `Moves: ${move}`;
        let allImagesSrc = document.getElementsByClassName('card-image');
        Object.values(allImagesSrc).forEach((el, index) => {
            el.src = imagesLinkArray[index].image;
            el.alt = imagesLinkArray[index].newAlt;
            el.id = imagesLinkArray[index].id;
        });
    };
    restart.addEventListener('click', restartGame);

    
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            this.classList.add("toggled");
            toggledCardsArray.push(this);
            let thisImgSrc = this.querySelector('.card-image').src;
            let previousImgSrc =
                toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
            if (thisImgSrc !== previousImgSrc) {
                toggledCardsArray.forEach(function (el) {
                    setTimeout(() => {
                        el.classList.remove("toggled");
                    }, 500);
                });
                toggledCardsArray.length = 0;
                move++;
            } else {
                toggledCardsArray.length = 0;
                move++;
                winCount++;
            }
            movesDisplay.innerText = `Moves: ${move}`;
            if (winCount === 6) {
                setTimeout(() => {
                    alert(`Congratulations!!! You won the game in ${move} moves.`);
                }, 300);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startGame');
    const playerNameInput = document.getElementById('playerName');
    const playerNameDisplay = document.getElementById('playerNameDisplay');
    const topScorersBody = document.getElementById('topScorersBody');

    // Array to store player information
    const players = [];

    startButton.addEventListener('click', function () {
        const playerName = playerNameInput.value.trim();
        if (playerName === '') {
            alert('Please enter your name to start the game.');
        } else {
           
            playerNameInput.style.display = 'none';
            startButton.style.display = 'none';
        

           
            players.push({
                name: playerName,
                moves: 0 
            });
        }
    });

    // Function to update player's moves
    function updatePlayerMoves(playerName, moves) {
        const player = players.find(p => p.name === playerName);
        if (player) {
            player.moves = moves;
       
            playerNameDisplay.innerText = `Player: ${player.name}, Moves: ${player.moves}`;
        }
    }

   
    function displayTopScorers() {
    
        topScorersBody.innerHTML = '';
        
        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.moves}</td>
            `;
            topScorersBody.appendChild(row);
        });
    }

    function restartGame() {
      
        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.moves}</td>
            `;
            topScorersBody.appendChild(row);
        });
    
        
        const currentPlayerName = playerNameInput.value.trim();
        if (move === 12 && currentPlayerName !== '') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${currentPlayerName}</td>
                <td>${move}</td>
            `;
            topScorersBody.appendChild(row);
        }
    
    
        players.length = 0;
    
       
        playerNameInput.style.display = 'block';
        startButton.style.display = 'block';
        playerNameInput.value = '';
    
     
        playerNameDisplay.innerText = '';
    }
    

   
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', restartGame);
});
