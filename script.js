const pokemonBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-data");
const name = document.getElementById("pokemon-name");
const types = document.getElementById("pokemon-types");
const loader = document.getElementById("loader");
const infoHeader = document.querySelector(".info-header");

pokemonBtn.addEventListener('click', () => {
    // reset UI
    loader.style.display = 'block';
    infoHeader.style.display = 'none';
    name.innerText = '';
    const imageEl = document.getElementById('pokemon-image');
    imageEl.src = '';
    types.innerText = '';

    const maxPokemon = 898;
    const randId = Math.floor(Math.random() * maxPokemon) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`)
      .then(res => res.json())
      .then(data => {
        loader.style.display = 'none';
        infoHeader.style.display = 'block';
        // Name
        const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        name.innerText = formattedName;
        // Image
        imageEl.src = data.sprites.front_default;
        imageEl.alt = formattedName;
        // Types
        const typeNames = data.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
        types.innerText = 'Type: ' + typeNames.join(', ');
      })
      .catch(err => {
        loader.style.display = 'none';
        alert('Failed to fetch Pokémon data.');
        console.error(err);
      });
});

clearBtn.addEventListener('click', () => {
    loader.style.display = 'none';
    infoHeader.style.display = 'none';
    name.innerText = '';
    document.getElementById('pokemon-image').src = '';
    types.innerText = '';
});