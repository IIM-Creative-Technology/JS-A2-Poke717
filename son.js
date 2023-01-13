const musicList = [
  "son/Pokemon_Center_Remix.mp3",
  "son/Pokémon - Pikachu aime bien qu'on lui caresse la queue-[onlinevideoconverter.com].mp3",
  "son/Generique_Pokemon_-_Simon_Du_33.mp3",
  "son/Générique français de la saison 1 de Pokemon-[onlinevideoconverter.com].mp3",
];

let audio;
let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * musicList.length);
}
console.log(randomNumber);

const button_music = document.getElementById("button_music");
const button_pause = document.getElementById("button_pause");
const button_replay = document.getElementById("button_replay");

button_music.addEventListener("click", function () {
  audio = new Audio(musicList[randomNumber]);
  audio.muted = true;
  audio.autoplay = true;
  console.log("ici");
  audio.muted = false;
});

button_pause.addEventListener("click", function () {
  audio.pause();
});

button_replay.addEventListener("click", function () {
  audio.currentTime = 0;
  audio.play();
});
