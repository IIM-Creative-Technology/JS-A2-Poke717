function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
const randomNumber = generateRandomNumber();
console.log(randomNumber);
const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
console.log(API_URL);
getPoke(API_URL);

const main = document.getElementById("quizzPokemon");
const valide = document.getElementById("valide");

const reponse_quizz = document.getElementById("reponse_quizz").value;

const button_quizz = document.getElementById("button_quizz");

function getPoke(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      singlePoke(data);
      function singlePoke(data) {
        const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
        pokemonEL.classList.add("quizzPokemon");
        const { id, name, sprites, types, height, weight, stats } = data; // on defini la constante pokemon
        const type = types[0].type.name;
        // cretion d'un élement html qui va etre modifier et génerer par le js
        const pokeInnerHTML = `
            <div class="img_single_pokemon">
                <img id="reponse" class="quizz-img" src="${sprites.front_default}" alt="${name}"/>
            </div>
            `;
        pokemonEL.innerHTML = pokeInnerHTML;
        main.appendChild(pokemonEL);
        console.log(name);
        button_quizz.addEventListener("click", function (e) {
          e.preventDefault();
          if (document.getElementById("reponse_quizz").value == name) {
            const pokemonEL = document.createElement("div");
            const reponses = document.getElementById("reponse");
            reponses.classList.remove("quizz-img");
            pokemonEL.classList.add("reponse");
            const reponse_poke = `
                <h3> Vous avez trouvé </h3>
                `;
            pokemonEL.innerHTML = reponse_poke;
            valide.appendChild(pokemonEL);
          } else {
            const pokemonEL = document.createElement("div");
            pokemonEL.classList.add("reponse");
            const reponse_poke = `
                <h3> Mauvaise reponse </h3>
                `;
            pokemonEL.innerHTML = reponse_poke;
            valide.appendChild(pokemonEL);
          }
        });
      }
    });
}