# JS-A2-Poke717

## Description 

C'est un projet de Pokédex qui utilise PokeAPI. 
Sur la page d'accueil il y a la possibilité de trier les pokemons qui s'affichent selon leur :
- Type
- Génération
- Par ordre croissant ou décroissant dans l'odrdre du Pokedex

Il y a une page par pokemon qui affiche ses stats ainsi que ses évolutions et sa version Shiny
On a également fait le fameux jeu "Who is this Pokemon ?".

## Installation
Vous pouvez accéder au projet ici : https://js-a2-poke717.vercel.app/.
Pour installer et utiliser le projet, vous avez simplement à télécharger le zip et lancer l'index.html

## Les fonctions

- getPokemon() : Récupére les données d'un Pokemon avec son ID et crée les cartes (normal et shiny)
- createPokemonCard(pokemon), createPokemonCardShy(pokemon) : Crée une carte pour chaque pokemon
- getAllType() : Permet de récupérer tout les types de Pokemon sur l'API pour les mettres dans le select du tri
- getType(type) : Récupére tout les Pokemon avec le type donnée dans le select pour les afficher
- getAllGeneration() : Permet de récupérer toutes les générations de Pokemon sur l'API pour les mettres dans le select du tri
- getGeneration(generation) : Récupére tout les Pokemon de la génération donnée dans le select pour les afficher