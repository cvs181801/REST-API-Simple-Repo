const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

async function getIssData() {
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { latitude, longitude } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}

getIssData();