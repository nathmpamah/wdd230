// Wind Chill calc //
let temp = document.getElementById("temp").innerText;
let windSpeed = document.getElementById("wind").innerText;

if (temp <= 50 && windSpeed >= 3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
} else {
    windChill = "n/a";
}

document.getElementById("wind-chill").innerHTML = windChill.toFixed(0);


