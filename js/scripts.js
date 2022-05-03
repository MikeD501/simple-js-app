// functions part 2 below 

//IIFE below 
let pokemonRepository = (function () {
    //modal container
    let modalContainer = document.querySelector('#modal-container');

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
        //document.write(item.imageUrl + "<br />" + item.height + " is ft tall. <br/>" + item.types);
        showModal(item.name, item.height, item.imageUrl); // this function makes the modal show up, and fills in the content
      });
  }

      //modal function 
   function showModal() {
        let modalContainer = document.querySelector('#modal');
        modalContainer.classList.add('is-visible');
       // hideModal();
      }

    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal();
      });

      function showModal(title, text, image) {
        let modalContainer = document.querySelector('#modal-container');
        
        //clear all existing modal content
        modalContainer.innerHTML = ' ';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //close button
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.addEventListener('click', hideModal); //this closes the modal with the X on the top right 
      
        //title 
        let titleElement = document.createElement('h1');
        titleElement.innerHTML= "Name: " + title; // this adds the name of the pokemon to the modal 
        // content 
        let contentElement = document.createElement('p');
        contentElement.innerHTML= "Height: " +  text + "ft <br/>" ;  //this adds the height of the pokemon to the modal
        //image of pokemon
        let pokemonImgElement = document.createElement('p');
        pokemonImgElement.innerHTML="<img src=" + image + ">";

        modal.appendChild(closeButtonElement); // X button
        modal.appendChild(titleElement); //h1
        modal.appendChild(contentElement); //p
        modal.appendChild(pokemonImgElement); //img
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
      }

      document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('Modal title', 'This is Modal content!');
      });
      // this function closes the modal
      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      }

      //this closes by hit esc
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && 
          modalContainer.classList.contains('is-visible')) {
            hideModal();
          }
      });
      //this closes by clicking on the transpernt screen outside the modal
      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer){
          hideModal();
        }
    }); 


    return {
        getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };

}) ();
    
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon)  {
            pokemonRepository.addListItem(pokemon);
        });
    });
