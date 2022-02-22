// functions part 2 below 

//IIFE below 
let pokemonRepository = (function () {
    //array that is now empty
    let pokemonList = [];

    //api url with pokemon 
    let apiUrl ="https://pokeapi.co/api/v2/pokemon/";

    function getAll() {
            return pokemonList;
    };

    function add(pokemon) {
            pokemonList.push(pokemon);
    };

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let pokemonUl = document.querySelector('.pokemon-list');
        let button = document.createElement('button');
            button.innerHTML=pokemon.name;
            //Code below adds text when the button is clicked 
            button.addEventListener('click', event=> {
                showDetails(pokemon);
            });
            //adds the li and button elements to the site 
        pokemonUl.appendChild(listItem);
        pokemonUl.appendChild(button);
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
        }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        }).catch(function (e) {
        console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }

    return {
        getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };

}) ();
    
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon)  {
            pokemonRepository.addListItem(pokemon);
        });
    });
