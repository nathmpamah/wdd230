const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// const result = document.getElementById('cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        let image = document.createElement('img')

        //name
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        
        //birthdate
        p.textContent = prophets[i].birthdate;
        card.appendChild(p);

        //birth place
        p1.textContent = prophets[i].birthplace;
        card.appendChild(p1);

        //img
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);
        card.appendChild(image);

        document.querySelector('.cards').appendChild(card);
    }
  });

// fetch(requestURL) 
//     .then(response => 
//         response.json())
//     .then(jsonObject => {
//         const prophets = jsonObject['prophets'];
//         let h='';
//         for(let i = 0; i < prophets.length; i++ )  {
//             h += `<h2>${prophet.name}</h2>
//                 <h2>${prophet.lastname}</h2>`; 
//         } 
//         result.innerHTML = h;
//     });