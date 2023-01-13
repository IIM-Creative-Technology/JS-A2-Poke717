(async function () {
  const pageId = getPageId();
  console.log(pageId);
  getPage(pageId);
})();

function getPage(pageId) {
  const API_URL = `https://pokeapi.co/api/v2/evolution-chain/${pageId}/`;
  console.log(API_URL);
  getPoke(API_URL);

  const InnerEvolution = document.getElementById("InnerEvolution");

  function getPoke(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        singlePoke(data);
        function singlePoke(data) {
          const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
          pokemonEL.classList.add("single_poke");
          const { chain } = data; // on defini la constante pokemon
          console.log(chain);
          console.log(chain.species.name);
          const url = chain.species.name;
          const poke_URL = `https://pokeapi.co/api/v2/pokemon/${url}/`;
          console.log(poke_URL);
          getPoke(poke_URL);
          function getPoke(url) {
            fetch(url)
              .then((res) => res.json())
              .then((data) => {
                // cretion d'un élement html qui va etre modifier et génerer par le js
                const pokemonEL = document.createElement("div"); // creation de div cette div va etre notre card
                pokemonEL.classList.add("single_poke");
                const { id, name, sprites, type } = data; // on defini la constante pokemon
                const innerpokemon = `
                    <div id="pok" class="hover-${type} pokemon">
                        <div class="img-container">
                            <img src="${sprites.front_default}" alt="${name}"/>
                            </div
                            <div class="info">
                            <span class="number">${id}</span>
                            <h3 class="name">${name}</h3>
                            <br>
                            <a href="single_poke.html?id=${id}" class="">Voir plus !</a>
                        </div>
                    </div>
                    `;

                pokemonEL.innerHTML = innerpokemon;
                InnerEvolution.appendChild(pokemonEL);
              });
          }
        }
      });
  }
}
