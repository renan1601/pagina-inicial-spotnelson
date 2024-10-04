// Selecionando os elementos do DOM
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const audioPlayer = document.getElementById('audio-player');

// Variável para controlar o estado da reprodução
let isPlaying = false;

// Função para tocar ou pausar a música
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶';  // Mudar o botão para 'Play'
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '||';  // Mudar o botão para 'Pause'
    }
    isPlaying = !isPlaying;
}

// Função para tocar a música anterior
function playPrevious() {
    // Lógica para selecionar a música anterior
    console.log("Música anterior");
}

// Função para tocar a próxima música
function playNext() {
    // Lógica para selecionar a próxima música
    console.log("Próxima música");
}

// Eventos de clique para os botões
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPrevious);
nextBtn.addEventListener('click', playNext);
