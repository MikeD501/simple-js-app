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

 // document.write(JSON.stringify(pokemonList));  //

for (let i=0; i < pokemonList.length; i++) /*this loop starts at 0, counts items in array, and adds 1 each time it runs*/
 {
    document.write(pokemonList[i].name + " is " + pokemonList[i].height + "ft tall. " + "<br/>");
    /* The above command writes the name of the pokemon with its height in the browser */

        if (pokemonList[i].height > 10) {
            document.write( " -- Wow, thats big! ");
        }
        /*the above if statement checks if a pokemon is above 10 tall and if it is it displays a special msg */
}
