
// Hamburger Button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')
  
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Footer date display.
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("current-date").innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

// Copyright year for the footer.
document.getElementById("copyright-year").innerHTML = (new Date().getFullYear());

let date = days[d.getDay()]
if (date == "Friday") {
    document.getElementById("message").style.display = "block";
}

// Font loader
WebFont.load({
    google: {
      families: ['Quicksand']
    }
  });
