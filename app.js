window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector('.temperature');
const temperatureSpan = document.querySelector('.teperature span');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition
    (position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy ='https://cors-anywhere.herokuapp.com/';
        const api =`${proxy} 
        https://api.weatherapi.com/v1/current.json?key= 7052dc2a0bcc43b59e9144610221811&q=London&aqi=yes/${lat},${long}`;

fetch(api)
.then(response =>{
    return response.jason();
})
.then(data=>{
   const {temperature, summary, icon} = data.currently;
    // set Dom Elements from the Api
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimezone.textContent = data.timezone;
//Formola for Celsius
let Celsius= (temperature - 32)*(5 / 9);

    //Set Icon
    setIcons(icon.document.querySelector('.icon'));

    //Change temperature to Celsius/Farenheit
    temperatureSection.addEventListener('click', () =>{
        if(temperatureSpan.textContent ==="F"){
            temperatureSpan.textContent ="C";
            temperatureDegree.textContent = Math.floor(Celsius);
        }else{
            temperatureSpan.textContent ="F"; 
            temperatureDegree.textContent = temperature;
        }
    })
});
  });
} 

function setIcons (icon,iconId){
    const skycons = ({color: "white"});
    const currentIcon = icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconId,skycons[currentIcon]);
}
})