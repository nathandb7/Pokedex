let nombre = localStorage.getItem('nombre');
const URL_POKE = `https://pokeapi.co/api/v2/pokemon/${nombre}`;


const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

fetch(URL_POKE)
    .then(respuesta => respuesta.json())
    .then(data => {
        createPokemon2(data);
    });


function createPokemon2(pokemon) {

    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card2");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite1 = document.createElement("img");
    sprite1.src = pokemon.sprites.front_default;

    const sprite2 = document.createElement("img");
    sprite2.src = pokemon.sprites.back_default;

    const sprite3 = document.createElement("img");
    sprite3.src = pokemon.sprites.back_shiny;

    spriteContainer.appendChild(sprite1);
    spriteContainer.appendChild(sprite2);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    cardContainer.appendChild(card);
    pokemonContainer.appendChild(flipCard);
}
