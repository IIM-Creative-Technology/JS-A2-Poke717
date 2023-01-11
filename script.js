const BASE_URL = "https://pokeapi.co/api/v2/";
const PARAM_URL = "";
const SORT_URL = "";
const TYPE_URL = "10";
const poke_container = document.getElementById("poke_container");
const poke_container1 = document.getElementById("poke_container1");
const pokemons_number = 30;
const pokemons_first = 151; // fixe le nombre de pokemon maximun a afficher
// permet de faire une itération pour que les pokemon soit afficher de 1 jusqu'au nombre choisi
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  // async sert faire charger plusieur chose en meme temps
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon); // apelle la fonction qui va crée les différante cart pokemon
  createPokemonCardShy(pokemon);
};

const getTypedPokemon = async (link) => {
  // async sert faire charger plusieur chose en meme temps
  const url = `${link}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon); // apelle la fonction qui va crée les différante cart pokemon
  createPokemonCardShy(pokemon);
};

// creation de carte pokemon
const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
  pokemonEL.setAttribute("id", "pokemon");
  const { id, name, sprites, types } = pokemon; // on defini la constante pokemon
  const type = types[0].type.name;

  // cretion d'un élement html qui va etre modifier et génerer par le js
  const pokeInnerHTML = ` 
    <div id="pok" class="hover-${type} pokemon">
      <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}"/>
      </div
      <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
        <br>
        <a href="single_poke.html?id=${id}" class="">Voir plus !</a>
      </div>
    </div>
    `;

  pokemonEL.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEL);
};

const createPokemonCardShy = (pokemon) => {
  const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
  pokemonEL.setAttribute("id", "pokemon");
  const { id, name, sprites, types } = pokemon; // on defini la constante pokemon
  const type = types[0].type.name;

  // cretion d'un élement html qui va etre modifier et génerer par le js
  const pokeInnerHTML = ` 
  <div id="pok" class="hover-${type} pokemon">
    <div class="img-container">
      <img src="${sprites.front_shiny}" alt="${name}"/>
    </div
    <div class="info">
      <span class="number">${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
      <br>
      <a href="single_poke.html?id=${id}" class="">Voir plus !</a>
    </div>
  </div>
  `;

  pokemonEL.innerHTML = pokeInnerHTML;
  poke_container1.appendChild(pokemonEL);
};

fetchPokemons();

function dark() {
  var element = document.getElementById("poke_container");
  element.remove();
}
function change() {
  var element = document.body;
  element.style.background = "linear-gradient(to right, #D4D3DD, #4b6043)";
}

function white() {
  var element = document.getElementById("poke_container1");

  element.classList.remove("shy");
}

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    dark();
    white();
    change();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    const fetchPokemons = async () => {
      for (let i = 1; i <= pokemons_first; i++) {
        await getPokemon(i);
        console.log("first");
      }
    };
    console.log("jjj");

    fetchPokemons();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    getPokemon(Math.floor(Math.random() * 1000));
  }
});


async function getTypePokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/type/"+TYPE_URL);
  const data = await response.json();

  data.pokemon.forEach((pokemon) => {
    const link = pokemon.pokemon.url;
    getTypedPokemon(link);
  });
}

// getTypePokemon()