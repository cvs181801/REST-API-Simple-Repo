const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

const paragraph = document.getElementByID("iss-data");

async function getIssData() {
    const response = await fetch(issApiUrl);
    const data = await response.json();
    console.log(data);
}

getIssData();