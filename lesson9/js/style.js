// footer time 
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var theYear = new Date().getFullYear();
document.getElementById('year').innerHTML = theYear;

const dow = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date();
let output = dow[date.getDay()]+', '+ date.getDate() + ' ' + month[date.getMonth()] + ' '+date.getFullYear();
document.getElementById('current-date').innerHTML = output;