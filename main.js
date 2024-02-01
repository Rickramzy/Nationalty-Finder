"use strict"

// Accessing the searchForm and result IDs from the HTML
const form = document.getElementById('searchForm');
const resultContainer = document.getElementById('result');

//Event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Eliminating trailing spaces from the current input (value)
    const nameInput = document.getElementById('nameInput').value.trim();

    //Accessing the API
    fetch('https://api.nationalize.io/?name=' + nameInput)
        .then(response => response.json())
        .then(data => {
            const countries = data.country.map(country => country.country_id); //transforming each element of an array returning a new array of the answer
            resultContainer.textContent = `Your nationality is likely to be... ${countries}!`;
        })
        .catch(error => {
            resultContainer.textContent = 'Oops! Something went wrong. Please try again.';
        });
});



// const Google = '   *****Google Chrome*****   ';
// console.log(Google);

// const result = Google.trimStart();
// console.log(result);
