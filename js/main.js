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

async function getData(city){
   let url = 'https://api.meteo.lt/v1/places/'+city+'/forecasts/long-term';
   let response = await fetch(url);
   return await response.json();

}

async function showData() {
    const data = await getData ('Kaunas');





    console.log(data)
}

showData()
