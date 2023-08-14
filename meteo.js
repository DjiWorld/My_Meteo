// affiche message en alert 
// faire un prompt 

// let cityName = prompt("C'est quoi ta ville ?");
// input(cityName) // Ma réponse est stocké dans cityName 

function town() {
    let cityInput = document.getElementById("inputCity");
    let cityDiv = document.getElementById("city");
    
    let cityName = cityInput.value;

    requestWeather(cityName);

    cityDiv.innerHTML = cityName;
}

const API_KEY="fc07e5077f5c4bb125d715784664bd0e"; 
const API_LINK="https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&q=";

 // ici, javascript on lui dit "attends fréro !!"
async function requestWeather(cityName) {            
const response = await fetch(API_LINK + cityName +`&appid=${API_KEY}&lang=fr`)
const data = await response.json(); 
console.log(data);
let temp = document.getElementById("temp");
temp.innerHTML = Math.round(data.main.temp) + "°C"; 
if (Math.round(data.main.temp) < 10) {
    temp.style.color="#A5E4E1";
} else if  (Math.round(data.main.temp) < 20) {
        temp.style.color="#B6F5A7";
} else {
    temp.style.color="#F5D5A7";
}
let humidity = document.getElementById("humidity");
humidity.innerHTML = data.main.humidity + " humidité";
let wind = document.getElementById("wind");
wind.innerHTML = data.wind.speed + " m/s";
}

// je dois trouver comment arrondir les résultat, car y'a des virgule en fonction de la temperature,
// si il fait froid mettre des codes couleurs.
// et aussi a la place du promp faire la recherche sur le input ... OSKOUR 

requestWeather(cityDiv); 
console.log(cityDiv);









