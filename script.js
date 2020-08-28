'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      if (response.ok){
         return response.json()
      }
      throw new Error("Breed Not Found!")
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const breed = $("#breed").val();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

