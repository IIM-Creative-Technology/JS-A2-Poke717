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
          const { id, name, sprites } = data; // on defini la constante pokemon
          // cretion d'un élement html qui va etre modifier et génerer par le js
          const innerpokemon = `
                <img src="${sprites}"/>
                <h4> ${name}</h4>
                <a href="single_poke.html?id=${id}" class="">Voir plus !</a>
              `;

          pokemonEL.innerHTML = innerpokemon;
          InnerEvolution.appendChild(pokemonEL);
        }
      });
  }
}
