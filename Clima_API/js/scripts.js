const api = "0e95dd6820aaa02544c1b69ac6c1dfcf";
const apiCountryURl = "https://flagsapi.com/BR/flat/64.png" ;
const apiCountryURl2 = "const apiCountryURl"


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind")

const weatherContainer = document.querySelector("#weather-data");


//Funções

const getWeatherData = async(city) =>{

    apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}&lang=pt_br`

    //opbter dados json
    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data;

}



const shoWWeatherData = async (city) => {

    const data = await getWeatherData(city)

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    
    countryElement.setAttribute(
        "src", 
        `https://flagsapi.com/${data.sys.country}/flat/64.png`
        );

        humidityElement.innerText =  `${data.main.humidity}%`;
    windElement.innerText =  `${data.wind.speed}km/h`;
    
    weatherContainer.classList.remove("hide");




}





//Eventos
searchBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    const city = cityInput.value;

    shoWWeatherData(city);

})

cityInput.addEventListener("keyup", (e) =>{

    if(e.code ==="Enter"){
        const city = e.target.value;

        shoWWeatherData(city);
    }

})



