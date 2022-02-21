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

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
            button.innerHTML=pokemon.name;
        pokemonUl.appendChild(listItem);
        pokemonUl.appendChild(button);
    }

    return {
        getAll,
        add: add, 
        addListItem,
    };

}) ();

    
    let pokemonUl = document.querySelector('.pokemon-list');
    
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });


    /*
pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + " is " + pokemon.height + "ft tall, and " + pokemon.age + " years old." + "<br />")
 });
*/
