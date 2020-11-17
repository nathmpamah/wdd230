const url = 'https://byui-cit230.github.io/weather/data/towndata.json'
const town1 = document.getElementById('town1')
const town2 = document.getElementById('town2')
const town3 = document.getElementById('town3')


fetch(url)
    .then(response => response.json())
    .then(jsonObject => {
        const towns = jsonObject['towns'];
        let h1='';
        h1 += `<div class='towncatelog'><h2>${towns[4].name}</h2>
        <p class='motto'>${towns[4].motto}</p>
        <P>Year Founded: ${towns[4].yearFounded}</P>
        <P>Population: ${towns[4].currentPopulation}</P>
        <P>Average Rainfall: ${towns[4].averageRainfall}</P></div>
        <img src='/lesson9/images/town1.jpg' alt='${towns[4].photo}'>
        `;
        
        town1.innerHTML = h1;
        
        
        let h2= '';
        h2 += `<div class='towncatelog'><h2>${towns[1].name}</h2>
        <p class='motto'>${towns[1].motto}</p>
        <P>Year Founded: ${towns[1].yearFounded}</P>
        <P>Population: ${towns[1].currentPopulation}</P>
        <P>Average Rainfall: ${towns[1].averageRainfall}</P></div>
        <img src='/lesson9/images/town2.jpg' alt='${towns[1].photo}'>
        `;

        town2.innerHTML = h2;
        

        let h3 = '';
        h3 += `<div class='towncatelog'><h2>${towns[5].name}</h2>
        <p class='motto'>${towns[5].motto}</p>
        <P>Year Founded: ${towns[5].yearFounded}</P>
        <P>Population: ${towns[5].currentPopulation}</P>
        <P>Average Rainfall: ${towns[5].averageRainfall}</P></div>
        <img src='/lesson9/images/town3.jpg' alt='${towns[5].photo}'>
        `;
        
        town3.innerHTML =h3;
        
    });