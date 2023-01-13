const BASE_URL = "https://pokeapi.co/api/v2/";
const PARAM_URL = "";
const SORT_URL = "";
const TYPE_URL = "10";
const poke_container = document.getElementById("poke_container");
const poke_container1 = document.getElementById("poke_container1");
const pokemons_number = 40;
const pokemons_first = 151; 
const test = [];
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  test.push(pokemon);
  createPokemonCard(pokemon);
  createPokemonCardShy(pokemon);
};

console.log(test);

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


// A FAIRE ---------------------------------------------------------------------------------------

// async function getTypePokemon() {
//   const response = await fetch("https://pokeapi.co/api/v2/type/"+TYPE_URL);
//   const data = await response.json();

//   data.pokemon.forEach((pokemon) => {
//     const link = pokemon.pokemon.url;
//     console.log(link);
//   });
// }


// const main = document.getElementById("poke_container");

// const getPokemonWithURL = async (link) => {
  // console.log(link);
//   const url = `${link}`;
//   const res = await fetch(url);
//   const pokemon = await res.json();
//   createPokemonCard(pokemon);
//   createPokemonCardShy(pokemon);
// };

// function getPokemons(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const PokemonsList = data.pokemon
//       PokemonsList.forEach(pokemon => {
//         console.log(pokemon.url)
//         const pokemonEL = document.createElement("div"); 
//         pokemonEL.setAttribute("id", "pokemon");
//         getPokemonWithURL(pokemon.url)



// AFTER ---------------------------------------------------------------

        // const { id, name, sprites } = pokemon;
        // const type = types[0].type.name;
        // if (types.length == 1) {
        //   const pokeInnerHTML = ` 
        //       <div class="img_single_pokemon">
        //           <img src="${sprites.front_default}" alt="${name}"/>
        //       </div>
        //       <div class="single_info">
        //           <p class="single_number">
        //               ${id}
        //           </p>
        //           <h2 class="single_name">
        //               ${name}
        //           </h2>
        //           <p class="single_type">
        //               Type: <span class="${types[0].type.name}">${type}</span>
        //           </p >
        //       </div>
        //   </div>`;
        //   pokemonEL.innerHTML = pokeInnerHTML;
        //   main.appendChild(pokemonEL);
        // } 

        // else if (types.length == 2) {
        //   const pokeInnerHTMTwoType = ` 
        //       <div class="img_single_pokemon">
        //           <img src="${sprites.front_default}" alt="${name}"/>
        //       </div>
        //       <div class="single_info">
        //           <p class="single_number">
        //               number in pokedex : ${id}
        //           </p>
        //           <h2 class="single_name">
        //               ${name}
        //           </h2>
        //           <p class="single_type">
        //               Type: <span class="${types[0].type.name}">${types[0].type.name}</span> 
        //               <span class="${types[1].type.name}">${types[1].type.name}</span>
        //           </p >
        //       </div>
        //   </div>`;
        //   pokemonEL.innerHTML = pokeInnerHTMTwoType;
        //   main.appendChild(pokemonEL);
        // }

// BEFORE --------------------------------------------------------------------------------------


  //     })
  //   })
  // };
// ----------------------------------------------------------------------------------------------

const getPokemonWithURL = async (link) => {
    const url = link;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    createPokemonCardShy(pokemon);
};

const submit = document.querySelector('#submit');
function getType(type){
  const pokecontainer = document.getElementById('poke_container')
  const limit = pokecontainer.childElementCount;
  for (let i = 1; i <= limit; i++) {
    const childcontainer = document.getElementById('pokemon')
    pokecontainer.removeChild(childcontainer)
  }
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
submit.addEventListener('click', (e)=>{
  e.preventDefault();
  const typeSelect = document.querySelector("#type");
  const generationPoke = document.querySelector('#generation');
  getType(typeSelect.value)
  getGeneration(generationPoke.value)
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
      generation.options[generation.length] = new Option(element.name,(generation.length+1),  true, true); 
    });
  })
  .catch(error => console.error(error));
}

function getGeneration(generation){
  fetch("https://pokeapi.co/api/v2/generation/"+generation)
  .then(response => response.json())
  .then(data => {
    const gen = data.pokemon_species;
    console.log(gen);
  })
  .catch(error => console.log(error));
}