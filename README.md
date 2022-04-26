# Hide and Seek

## Demo

https://alchemycodelab.github.io/web-01-hide-and-seek/

## Getting Started

Use [this repo](https://github.com/alchemycodelab/half-baked-web-01-hide-and-seek) as a template for this deliverable.

## Learning Objectives

-   Describe the relationship between state and view in an application.
-   Increment numerical state, stored in a let, in response to a user event (usually a click).
-   Derive implicit numerical state using explicitly tracked numerical state.
-   When updating numerical state on click, update the DOM to reflect the new state to the user.
-   Create an array of primitive values and access any item in that array by index using bracket notation
-   Use document.getElementById to ‘grab’ a DOM element by id
-   Add an event listener to a 'grabbed' button element and call a function (console.log , alert , etc) inside that event listener.
-   On click, manipulate the textContent, style.color, and style.backgroundColor of a DOM element with a hard-coded string value
-   On click, use classList.toggle() to add a css class to a DOM element.
-   Use Math.random to get a random item from an array

### Description

A large amount of code has been provided for you with this deliverable. Your goal is to write the code needed in the `handleGuess` function in `app.js` to get the app to work properly. You do not need to add any additional code.

Look closely at the HTML provided for you. When you add a class called `face` to the container elements, an emoji will appear revealing the hiding place. When a user clicks on a button, a random hiding place is generated. Your goal is to

1. Add the `face` class to the container with the correct hiding place
1. Determine if the user picked the correct hiding place
1. Increment the wins / losses

### Rubric

| Task                                                                                                 |     |
| :--------------------------------------------------------------------------------------------------- | --: |
| On clicking a hiding place button, the total number of guesses increment                             |   2 |
| On clicking the correct hiding place button, the total number of correct guesses increment           |   2 |
| On clicking the incorrect hiding place button, the number of incorrect guesses increments            |   2 |
| On click, see the correct hiding place's image change, clearing out the previous correct guess style |   4 |
