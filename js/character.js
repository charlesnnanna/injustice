//Declaraction of Variables
const characters = document.querySelectorAll('.characters img');
const currentCharacter = document.querySelectorAll('.current-character')
const charactersArray = [...characters];
const currentCharacterArray = [...currentCharacter];



//Creating a click event for each character thumbnail
const addClickEvent = () => {
    charactersArray.map((character, index) => {
        character.addEventListener('click',(event) => {

            event.preventDefault();
            charactersArray.map((character) => {
                character.id = '';
            })
        
            currentCharacterArray.map((currentCharacter) => {
                currentCharacter.style.display = 'none';
                
            })
                
                charactersArray[index].id = 'active-character';
                currentCharacterArray[index].style.display = 'flex';
            
        } );
    })
} 


//Run the addEvent function
addClickEvent();





