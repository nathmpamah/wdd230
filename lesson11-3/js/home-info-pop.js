const getURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(getURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                card.setAttribute("id", "home-section");
                let h2 = document.createElement('h2');
                let p_one = document.createElement('p');
                let p_two = document.createElement("p");
                let p_three = document.createElement("p");
                let p_four = document.createElement("p");
                let image = document.createElement("img");

                h2.textContent = towns[i].name;
                h2.setAttribute("id", "home-data-name");

                card.appendChild(h2);

                image.setAttribute("src", "images/" + towns[i].photo);
                image.setAttribute("id", "home-images");
                image.setAttribute("alt", towns[i].name);

                card.append(image);

                p_one.textContent = towns[i].motto;
                p_one.setAttribute("id", "home-motto");

                card.append(p_one);

                p_two.textContent = "Year Founded: " + towns[i].yearFounded;
                p_two.setAttribute("id", "home-year");

                card.append(p_two);

                p_three.textContent = "Population: " + towns[i].currentPopulation;
                p_three.setAttribute("id", "home-pop");

                card.append(p_three);

                p_four.textContent = "Annual Rainfall: " + towns[i].averageRainfall + "in.";
                p_four.setAttribute("id", "home-rain");


                card.append(p_four);

                document.querySelector('div.cards').appendChild(card);
            };
        } // temporary checking for valid response and data parsing
    });

fetch(getURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            let pagename = document.getElementById("pagename").innerHTML;

            let area = document.createElement("section");
            area.setAttribute("id", "event-area");
            let p_event_1 = document.createElement("p");
            let p_event_2 = document.createElement("p");
            let p_event_3 = document.createElement("p");
            let p_event_4 = document.createElement("p");

            if (pagename == "Soda Springs, Idaho" && towns[i].name == "Soda Springs") {
                p_event_1.textContent = towns[i].events[0];
                p_event_1.setAttribute("class", "event");

                area.appendChild(p_event_1);

                p_event_2.textContent = towns[i].events[1];
                p_event_2.setAttribute("class", "event");

                area.appendChild(p_event_2);

                p_event_3.textContent = towns[i].events[2];
                p_event_3.setAttribute("class", "event");

                area.appendChild(p_event_3);

                document.querySelector("div.town-events-grid").appendChild(area);
            } else if (pagename == "Preston, Idaho" && towns[i].name == "Preston") {
                p_event_1.textContent = towns[i].events[0];
                p_event_1.setAttribute("class", "event");

                area.appendChild(p_event_1);

                p_event_2.textContent = towns[i].events[1];
                p_event_2.setAttribute("class", "event");

                area.appendChild(p_event_2);

                p_event_3.textContent = towns[i].events[2];
                p_event_3.setAttribute("class", "event");

                area.appendChild(p_event_3);

                document.querySelector("div.town-events-grid").appendChild(area);
            } else if (pagename == "Fish Haven, Idaho" && towns[i].name == "Fish Haven") {
                p_event_1.textContent = towns[i].events[0];
                p_event_1.setAttribute("class", "event");

                area.appendChild(p_event_1);

                p_event_2.textContent = towns[i].events[1];
                p_event_2.setAttribute("class", "event");

                area.appendChild(p_event_2);

                p_event_3.textContent = towns[i].events[2];
                p_event_3.setAttribute("class", "event");

                area.appendChild(p_event_3);

                document.querySelector("div.town-events-grid").appendChild(area);
            };
        } // temporary checking for valid response and data parsing
    });