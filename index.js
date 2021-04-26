//API URL for the ISS data:
const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

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