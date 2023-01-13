const BASE_URL = "https://pokeapi.co/api/v2/";
const PARAM_URL = "";
const SORT_URL = "";
const TYPE_URL = "10";
const poke_container = document.getElementById("poke_container");
const poke_container1 = document.getElementById("poke_container1");
const pokemons_number = 40;
const pokemons_first = 151; 
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
  createPokemonCardShy(pokemon);
};


// creation de carte pokemon
const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
  pokemonEL.setAttribute("id", "pokemon");
  pokemonEL.classList.add("pokdiv");
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
  pokemonEL.classList.add("pokdiv");
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


const getPokemonWithURL = async (link) => {
    const url = link;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    createPokemonCardShy(pokemon);
};

const submit = document.querySelector('#submit');
function getType(type){
  fetch("https://pokeapi.co/api/v2/type/"+type)
  .then(response => response.json())
  .then(data => {
    const TypePokemon = data.pokemon;
    TypePokemon.forEach(pokemon => {
      getPokemonWithURL(pokemon.pokemon.url)
    })
  })
  .catch(error => console.log(error));
}

const Order = document.querySelector('#pokedex');
submit.addEventListener('click', (e)=>{
  e.preventDefault();
  const pokecontainer = document.getElementById('poke_container')
  const limit = pokecontainer.childElementCount;
  for (let i = 1; i <= limit; i++) {
    const childcontainer = document.getElementById('pokemon')
    pokecontainer.removeChild(childcontainer)
  }
  const pokecontainer1 = document.getElementById('poke_container1')
  for (let i = 1; i <= limit; i++) {
    const childcontainer = document.getElementById('pokemon')
    pokecontainer1.removeChild(childcontainer)
  }
  const typeSelect = document.querySelector("#type");
  const generationPoke = document.querySelector('#generation');
  if (typeSelect.value === "" && generationPoke.value === "") {
    document.getElementById('errorfilter').classList.add("hidden");
    fetchPokemons()
    if (Order.value === "decroissant") {
      setTimeout(() => {
        reverse();
      }, "500")
    }
  }
  else if (typeSelect.value !== "" && generationPoke.value === "") {
    getType(typeSelect.value)
    document.getElementById('errorfilter').classList.add("hidden");
    if (Order.value === "decroissant") {
      setTimeout(() => {
        reverse();
      }, "500")
    }
  }
  else if (typeSelect.value === "" && generationPoke.value !== "") {
    getGeneration(generationPoke.value)
    document.getElementById('errorfilter').classList.add("hidden");
    if (Order.value === "decroissant") {
      setTimeout(() => {
        reverse();
      }, "500")
    }
  }
  // else if (typeSelect.value !== "" && generationPoke.value !== "") {
  else {
    document.getElementById('errorfilter').classList.remove("hidden");
  }
})

const select = document.querySelector('#type');

function getAllType(){
  fetch('https://pokeapi.co/api/v2/type')
  .then(response => response.json())
  .then(data => {
    const types = data.results;
    types.forEach(element => {
      select.options[select.length] = new Option(element.name, element.name, true, true); 
    });
  })
  .catch(error => console.error(error));
}

const generation = document.querySelector('#generation');

function getAllGeneration(){
  fetch('https://pokeapi.co/api/v2/generation')
  .then(response => response.json())
  .then(data => {
    const generations = data.results;
    generations.forEach(element => {
      generation.options[generation.length] = new Option(element.name,(generation.length),  true, true); 
    });
  })
  .catch(error => console.error(error));
}

function getGeneration(generation){
  fetch("https://pokeapi.co/api/v2/generation/"+generation)
  .then(response => response.json())
  .then(data => {
    const GenPokemon = data.pokemon_species;
    GenPokemon.forEach(pokemon => {
      const url = pokemon.url.replace('-species/', '/');
      getPokemonWithURL(url)
    })
  })
  .catch(error => console.log(error));
}

function reverse() {
  var divs = poke_container.getElementsByClassName("pokdiv");
  var reversedDivs = [].slice.call(divs).reverse();
  for (var i = 0; i < reversedDivs.length; i++) {
    poke_container.appendChild(reversedDivs[i]);
  }
}