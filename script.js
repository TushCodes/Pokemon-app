const pokemonBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-data");
const name = document.getElementById("pokemon-name");
const planet = document.getElementById("pokemon-planet");
const movies = document.getElementById("pokemon-movies");

pokemonBtn.addEventListener('click', (event) => {
    let randNum = Math.ceil(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${randNum}/`)
    .then(response => response.json())
    .then(data => {
        //name
        name.innerText = data['name'];
        console.log(randNum);

        //planet
        fetch(data['homeworld'])
            .then(response=>response.json())
            .then((data) => {
                planet.innerText = data['name'];
            });
        
        //movies
        const movieList = data['films'];
        movies.style.display = 'block';
        movies.innerHTML = '';
        for(let i=0; i<movieList.length; i++) {
            fetch(movieList[i])
                .then(response=>response.json())
                .then((film) => {
                    let span = document.createElement('span');
                    span.innerText = film['title']+(i===movieList.length-1 ? '. ' : ', ');
                    movies.appendChild(span);
                });
        }
        
    })
});

clearBtn.addEventListener('click', () => {
    name.innerText = '';
    planet.innerText = '';
    movies.innerText = '';
});