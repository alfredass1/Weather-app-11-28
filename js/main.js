//gauti visus duomenis is api//
/*async function start(){
   let url = 'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term';
   let response = await fetch(url);

   let orai = await response.json(); 

   console.log(orai)
}

start()
*/


/*async function getData(){
   let url = 'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term';
   let response = await fetch(url);
   let orai = await response.json(); 

   console.log(orai['forecastTimestamps'])
}

getData()
*/

/*Iconst fetchWeather = async () => {
    weather = await fetch(
        'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
        ).then(res => res.json());

};

function today (value){
  return value.forecastTimeUtc.includes('2019-12-10');
}

const showWeather = async () => {
  // gaunami duomenys is api
      await fetchWeather();
      let weatherItems = weather.forecastTimestamps;
      weatherItems = weatherItems.filter(today)

      for (let i=0; i< weatherItems.length; i++){

        const irasas = document.createElement('div');
        irasas.classList.add("valandine")
        document.querySelector('#weather').appendChild(irasas);

        for (weatherItem in weatherItems[i]){

            let valandai = document.createElement('div');
            valandai.classList.add("valanda");
            valandai.textContent = weatherItems[i][weatherItem];
            irasas.appendChild(valandai);

        }


    }
}

showWeather()

*/


async function getData(city) {
    let url = 'https://api.meteo.lt/v1/places/' + city + '/forecasts/long-term';
    let response = await fetch(url);
    return await response.json();
}
//GAUTI DUOMENIM IS API//
async function showData() {
    const data = await getData('Kaunas');


    let realTime = new Date(data['forecastTimestamps'][0]['forecastTimeUtc']);
    let day = realTime.getDate();
    console.log(day)


    let weatherData = [];
    const hours = document.querySelector(".hours")
    console.log(data.forecastTimestamps[0].forecastTimeUtc)
    for (let i = 0; i < 24; i++) {
        weatherData [i] = data.forecastTimestamps[i];

        let newHour = new Date(data.forecastTimestamps[i].forecastTimeUtc);

        //---------------stulpelis--------------------------//

        const whatHour = document.createElement("div");
        hours.appendChild(whatHour);
        whatHour.className = "col hour";

        //--------eilute---laikas------//

        let time = document.createElement('div');
        whatHour.appendChild(time);
        time.className = 'row time';
        time.innerText = newHour.getHours() +":00";

        //--------eilute------laipsniai-----------------//

        let temp = document.createElement("div");
        whatHour.appendChild(temp);
        temp.className = "row temp";
        temp.innerText = data.forecastTimestamps[i].airTemperature +"°";

        //--------eilute-----------Krituliai--------------------------//

        let humidity = document.createElement("div")
        whatHour.appendChild(humidity)
        humidity.className = "row rain"
        humidity.innerText = data.forecastTimestamps[i].totalPrecipitation +" %";

        //------------eilute---vejas-----------------------------------//

        let wind = document.createElement("div")
        whatHour.appendChild(wind)
        wind.className = "row wind"
        wind.innerText = data.forecastTimestamps[i].windGust +" m/s";

    }


}

showData()