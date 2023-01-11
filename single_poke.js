(async function () {
  const pageId = getPageId();
  console.log(pageId);
  getPage(pageId);
})();

function getPageId() {
  return new URL(location.href).searchParams.get("id");
}

function getPage(pageId) {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pageId}`;
  console.log(API_URL);
  getMovies(API_URL);

  const main = document.getElementById("single_poke");

  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        singleMovie(data);
        function singleMovie(data) {
          const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
          pokemonEL.classList.add("single_poke");
          const { id, name, sprites, types } = data; // on defini la constante pokemon
          const type = types[0].type.name;
          // cretion d'un élement html qui va etre modifier et génerer par le js
          if (types.length == 1) {
            const pokeInnerHTML = ` 
                <div class="img_single_pokemon">
                    <img src="${sprites.front_default}" alt="${name}"/>
                </div>
                <div class="single_info">
                    <p class="single_number">
                        ${id}
                    </p>
                    <h2 class="single_name">
                        ${name}
                    </h2>
                    <p class="single_type">
                        Type: <span class="${types[0].type.name}">${type}</span>
                    </p >
                </div>
            </div>`;
            pokemonEL.innerHTML = pokeInnerHTML;
            main.appendChild(pokemonEL);
          } else if (types.length == 2) {
            const pokeInnerHTMTwoType = ` 
                <div class="img_single_pokemon">
                    <img src="${sprites.front_default}" alt="${name}"/>
                </div>
                <div class="single_info">
                    <p class="single_number">
                        number in pokedex : ${id}
                    </p>
                    <h2 class="single_name">
                        ${name}
                    </h2>
                    <p class="single_type">
                        Type: <span class="${types[0].type.name}">${types[0].type.name}</span> 
                        <span class="${types[1].type.name}">${types[1].type.name}</span>
                    </p >
                </div>
            </div>`;
            pokemonEL.innerHTML = pokeInnerHTMTwoType;
            main.appendChild(pokemonEL);
          }
        }
      });
    function getColor(type) {
      if (type == "fire") {
        return "red";
      } else if (type == "water") {
        return "water";
      } else if (type == "grass") {
        return "Grass";
      }
    }
  }
}
