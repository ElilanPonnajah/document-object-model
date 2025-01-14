const title = "Planeten";
const subTitle = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];





function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}


const h1Name = document.querySelector('.h1');
h1Name.textContent = "BOM"; 


const pSubtitle = document.querySelector('p');
pSubtitle.textContent = "50 euro"; 

const Olist = document.querySelector('.list');
Olist.innerHTML = ""; 

for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    Olist.innerHTML += `<li> ${planet} </li> `;
}


    
const navigation = document.querySelector(".navigation");
navigation.innerHTML = routes; 



// const addBtn = document.querySelector(".btn-add-planet");

// addBtn.addEventListener("click", addPlanet()){
//     Olist.innerHTML += `<li> ${planet} </li> `;
// }; 

// const makeDark = document.querySelector(".btn btn-make-dark"); 
// makeDark.addEventListener("click", makeDark);



