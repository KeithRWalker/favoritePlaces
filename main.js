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
        domString += `
        <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
               <div class="placeName">
               <strong class="d-inline-block mb-2">${place.placeName}</strong>
               <h6>${place.placeState}</h6>
               </div>
               <h6 class="mb-0 placeName">
                  Favorite Places
               </h6>
               </br>
               <ul>
               <li>Favorite Restraunt:<br> ${place.favRestraunt}</li><br>
               <li>Favorite Bar:<br> ${place.favBar}</li><br>
               <li>Favorite Hotel:<br> ${place.favHotel}</li><br>
               <li>Favorite Attraction:<br> ${place.favAttr}</li><br>
               </ul>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="${place.placeImage}">
         </div>
        `
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