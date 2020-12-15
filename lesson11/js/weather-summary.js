// Weather API Weather Summary

let URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=";

let cityID = "";

let pagename = document.getElementById("pagename").innerHTML;

if (pagename == "Preston, Idaho") {
    cityID = "5604473";
}
else if (pagename == "Soda Springs, Idaho") {
    cityID = "5607916";
}
else {
    cityID = "5605242";
}

let key = "2fcc76035c8ea35fae12e45da49246aa";

let requestURL = URL + cityID + "&appid=" + key;

console.log(requestURL);

const apiURL = requestURL;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);

        document.getElementById('description').textContent = jsObject.weather[0].description;

        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);

        // Wind Chill calc //
        let temp = document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        let windSpeed = document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);

        if (temp <= 50 && windSpeed >= 3) {
            windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        } else {
            windChill = "n/a";
        }

        document.getElementById("wind-chill").textContent = Math.round(windChill);
    });