async function generatePokemon() {
    // const rand = Math.floor(Math.random() * (151 - 1) + 1);
    const rand = getRandomInt(151);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
    const typeUrl = response.data.sprites.front_default;
    const pokeType = response.data.types[0].type.url;

    let img = document.createElement('img');
    img.src = typeUrl;
    document.getElementById("sec").appendChild(img);

    for (let i = 0; i<5; i++) {
        await getPokeFromType(pokeType);
    }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getPokeFromType(typePage) {
    const response = await axios.get(typePage);
    const pokePage = response.data.pokemon[getRandomInt(response.data.pokemon.length)].pokemon.url;
    const pokeData = await axios.get(pokePage);
    let img = document.createElement('img');
    img.src = pokeData.data.sprites.front_default;
    document.getElementById("sec").appendChild(img);
}
