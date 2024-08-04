let score = 0;
let isGameActive = false;
let hitArea;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('start-button').addEventListener('click', function() {
    // Скрываем кнопку после нажатия
    this.style.display = 'none';
});

function startGame() {
    score = 0;
    isGameActive = true;
    document.getElementById('score').textContent = 'Очки: ' + score;
    hitArea = document.getElementById('hit-area');
    hitArea.style.display = 'block';

    playMusic();
}

function playMusic() {
    const audio = new Audio('music/track1.mp3');
    audio.play();

    // Генерация ритма
    setInterval(() => {
        if (isGameActive) {
            showHitArea();
        }
    }, 2000); // каждые 2 секунды
}

function showHitArea() {
    hitArea.style.backgroundColor = 'red';

    setTimeout(() => {
        hitArea.style.backgroundColor = '#4CAF50';

        // Добавление события нажатия
        hitArea.onclick = () => {
            score++;
            document.getElementById('score').textContent = 'Score: ' + score;
        };

    }, 1000); // показывать красный цвет 1 секунду
}

// Остановка игры (можно добавить кнопку для остановки игры)
