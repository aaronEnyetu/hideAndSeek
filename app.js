// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses

    totalGuesses++;
        //console.log(totalGuesses)
        
        // then if the user guess is correct, increment the correct guesses
    if (correctSpot === userGuess) {
        correctGuesses++;
            //console.log(totalGuesses, incorrectGuesses, correctGuesses);
        
    } else {
        incorrectGuesses++;
            //console.log(totalGuesses, incorrectGuesses, correctGuesses);
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = incorrectGuesses;
    winsEl.textContent = correctGuesses;


    
    
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
        treeContainer.classList.remove('face');
        boulderContainer.classList.remove('face');
        
        
    }
    else if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
        shedContainer.classList.remove('face');
        boulderContainer.classList.remove('face');
    
        
    }
    else {
        boulderContainer.classList.add('face');
        treeContainer.classList.remove('face');
        shedContainer.classList.remove('face');
        
        

    }


    
    
}
