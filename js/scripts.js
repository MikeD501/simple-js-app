// functions part 2 below 

//IIFE below 
let pokemonRepository = (function () {
    //array
    let pokemonList = [
        {
            name: 'Charizard',
            age: 3,
            height: 7,
            type: ['fire', 'flying']
        },
    
        {
            name: 'Venusaur',
            age: 4,
            height: 8, 
            type:  ['Grass'],
        },
    
        {
            name: 'Blastoise',
            age: 5,
            height: 12, 
            type:  ['Water'],
        }
    ];

    function getAll() {
            return pokemonList;
    };

    function add(pokemon) {
            pokemonList.push(pokemon);
    };

    return {
        getAll,
        add: add,
    };
}) ();

//this prints the pokemonList Variables from the PokemonList in the PokemonRepository.  It gets the list from the getALL function at the bottom of the IIFE
pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + " is " + pokemon.height + "ft tall, and " + pokemon.age + " years old." + "<br />")
 });



