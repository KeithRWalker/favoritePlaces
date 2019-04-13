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
            <div class="cardContainer">

            <header class="cardHeader">
            <h1>${place.placeName}</h1>
            <h3>${place.placeState}</h3>
        </header>

                <div class="cardContent">

                    <ul class="cardFav">
                        <li><h1>Favorite Restraunt:</h1> <p>- ${place.favRestraunt}</p></li>
                        <li><h1>Favorite Bar:</h1> <p>- ${place.favBar}</p></li>
                        <li><h1>Favorite Hotel:</h1> <p>- ${place.favHotel}</p></li>
                        <li><h1>Favorite Attraction:</h1> <p>- ${place.favAttr}</p></li>
                    </ul>

                <img class="cardImg" alt="Image of ${place.placeName}" src="${place.placeImage}">
                </div>
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