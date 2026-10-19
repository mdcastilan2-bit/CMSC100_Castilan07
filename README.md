# CMSC100_Castilan07

# CMSC100 Week 7 Lab: Favorite Food

## Author

Max Miguel D. Castilan

## Code Description

This project is a front-end scripting exercise built with HTML, CSS, and JavaScript, served locally using Node.js and Express.

The webpage has a navigation menu, a favorite food submission form, a food card section, and an advertisement sidebar.

The form accepts a food name, description, image URL, and rank. JavaScript validates the inputs, creates a food card for each valid submission, and arranges cards in ascending rank order. Each card includes a Delete button.

The project demonstrates DOM manipulation, event listeners, form validation, and serving static files with Express.

## How to Use

1. Install Node.js and npm.
2. Open a terminal in the project directory.
3. Install the dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. Open `http://localhost:3000/` in a web browser.
6. Fill in the food name, description, image URL, and rank.
7. Submit the form to add the food card.
8. Use each card's Delete button to remove it.

Ranks must be positive whole numbers. A lower rank number appears before a higher rank number.

Food cards are not saved permanently. Refreshing the page clears the cards.
