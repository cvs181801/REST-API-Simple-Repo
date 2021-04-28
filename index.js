//API URL for the ISS data:
const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

//define the map (using Leaflet.js)
let myMap = L.map('ISSMap').setView([0,0], 1);

//create an ISS icon, and set the marker starting point
var issIcon = L.icon({
    iconUrl: 'ISS.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
    //popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowSize: [25, 16],
    //shadowAnchor: [22, 94]
});

const marker = L.marker([0, 0], {icon: issIcon}).addTo(myMap);

//define the map tile - my unique MapBox token has been added!
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiODk4OXZhbGt5cmllODk4OSIsImEiOiJja28wbXphZm4wNzl5MnZyd2dnMG1vNDdxIn0.zR05e3yW1qQj8d0CQRZgMQ'
}).addTo(myMap);

//set the view to start out by showing the ISS icon in the middle of the page.
let firstTime = true;

//get ISS data and display latitude, longitude, and altitude:
async function getIssData() {
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { latitude, longitude, altitude, velocity } = data;

    //Set the marker showing where the ISS is at based on current lat and lon! 
    marker.setLatLng([latitude, longitude]);

    //only set the view to show ISS icon in middle of page once, then stop.
    if (firstTime) { 
    myMap.setView([latitude, longitude], 1);
    firstTime = false;
    }

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('alti').textContent = altitude;
    document.getElementById('velo').textContent = velocity;
    
}

getIssData();

setInterval(getIssData, 1000);


