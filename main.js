let places = [];

const getPlaceData = () => {
    const myReq = new XMLHttpRequest();
    myReq.addEventListener('load', dataLoad);
    myReq.addEventListener('error', dataError);
    myReq.open('GET', './db/places.json');
    myReq.send();
    console.log(myReq);
};

function dataLoad() {
    const data = JSON.parse(this.responseText);
    places = data.places;
    console.log('dataLoad 1 OK');
    domStringBuilder(data.places);
    console.log('dataLog 2 OK')
};

function dataError() {
    console.log('oh shit');
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((place) => {
        domString +=  `<div class="card text-center p-3 bg-transparent border">`;
        domString +=    `<h2 class="card-title">${place.placeName}</h1>`;
        domString +=    `<h2 class="card-text">${place.placeState}</h3>`;
        domString +=    `<img class="card-img" alt="Image of ${place.placeName}" src="${place.placeImage}">`;
        domString +=    `<p class="card-text"><h5>Favorite Restraunt:</h5> ${place.favRestraunt}</p>`;
        domString +=    `<p class="card-text"><h5>Favorite Bar:</h5> ${place.favBar}</p>`;
        domString +=    `<p class="card-text"><h5>Favorite Hotel:</h5> ${place.favHotel}</p>`;
        domString +=    `<p class="card-text"><h5>Favorite Attraction:</h5> ${place.favAttr}</p>`;
        domString +=  `</div>`;
    });
    printToDom('cardDiv', domString);
};

const printToDom = (divId, text) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = text;
};

const init = () => {
    getPlaceData();
};

init();
