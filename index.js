//API URL for the ISS data:
const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

//define the map (using Leaflet)
const myMap = L.map('ISSMap').setView([0,0], 1);

//define the map tile

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL,{ attribuition });
tiles.addTo(myMap);

//get ISS data and display latitude, longitude, and altitude:
async function getIssData() {
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { latitude, longitude, altitude } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('alti').textContent = altitude;
}

getIssData();
