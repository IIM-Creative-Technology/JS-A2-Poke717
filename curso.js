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
  getPoke(API_URL);

  const main = document.getElementById("single_poke");

  function getPoke(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        singlePoke(data);
        function singlePoke(data) {
          const { types } = data; // on defini la constante pokemon
          const type = types[0].type.name;
          if (type == "fire") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-flame");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
            };
          } else if (type == "water") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-water");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "grass") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-grass");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "normal") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-normal");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "bug") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-bug");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "fighting") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-fighting");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "flying") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-flying");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "poison") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-poison");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "electric") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-electric");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "ground") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-ground");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "psychic") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-psychic");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "rock") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-rock");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "ice") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-ice");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "dragon") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-dragon");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "ghost") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-ghost");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "dark") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-dark");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "steel") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-steel");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          } else if (type == "fairy") {
            document.onmousemove = function (e) {
              var cursor = document.getElementById("cursor-fairy");
              cursor.style.left = e.pageX + "px";
              cursor.style.top = e.pageY + "px";
              cursor.style.display = "block";
              console.log("ici");
            };
          }
        }
      });
  }
}
