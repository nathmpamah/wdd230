
// Footer date display.
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("current-date").innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

// Copyright year for the footer.
document.getElementById("copyright-year").innerHTML = (new Date().getFullYear());

