const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
    themeToggle.innerHTML = body.dataset.theme === 'light' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

const songs = ['https://e.top4top.io/m_336821ut30.mp3', 'https://i.top4top.io/m_3328477of9.mp3', 'https://b.top4top.io/m_3336dxw3y1.mp3', 'https://b.top4top.io/m_33367ome01.mp3', 'https://e.top4top.io/m_3336uygem1.mp3'];
let currentSong = 0;
const audioPlayer = document.getElementById('audio-player');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function playNextSong() {
    currentSong = (currentSong + 1) % songs.length;
    audioPlayer.src = songs[currentSong];
    audioPlayer.play();
}

shuffleArray(songs);
audioPlayer.src = songs[currentSong];
audioPlayer.addEventListener('ended', playNextSong);