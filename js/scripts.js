const pokemonList = [
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

document.write(JSON.stringify(pokemonList));