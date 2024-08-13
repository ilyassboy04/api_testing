
async function fetchData(){
    try{


        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok){
            throw new Error("Failed to fetch data.");
        }


        const data = await response.json();
        console.log(data.types[0].type.name)
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonsprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block";
    }
    catch (error){
        console.error(error);
    }
}