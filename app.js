window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector('.temperature');
  const temperatureSpan = document.querySelector('.temperature span');
  let tempIcon = document.querySelector('.icon');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition
    (position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
console.log(lat,long);
        // const proxy ='https://cors-anywhere.herokuapp.com/';
        // const api =`${proxy} 
        //  https://api.weatherapi.com/v1/current.json?key= 7052dc2a0bcc43b59e9144610221811&q=London&aqi=yes/${lat},${long}`;
const api = `https://api.weatherapi.com/v1/current.json?key=%207052dc2a0bcc43b59e9144610221811&q=${lat},${long}`

fetch(api)
.then(response =>{
    return response.json();
})
.then(data=>{
   // const {temperature, summary} = data.current;
const { temp_c, humidity, temp_f } = data.current;
      const { text, icon } = data.current.condition;
      console.log(data.current);
      const { country, name, region, localtime, tz_id } = data.location;
    // set Dom Elements from the Api
    temperatureDegree.textContent =  temp_f;
    temperatureDescription.textContent = text;
    locationTimezone.textContent = tz_id;
//Formola for Celsius
let Celsius= (temp_f - 32)*(5 / 9);

    //Set Icon
   // setIcons('https:'+icon, document.querySelector('.icon'));
   tempIcon.src=icon;
    //Change temperature to Celsius/Farenheit
    temperatureSection.addEventListener('click', () =>{
        if(temperatureSpan.textContent ==="F"){
            temperatureSpan.textContent ="C";
            temperatureDegree.textContent = Math.floor(Celsius);
        }else{
            temperatureSpan.textContent ="F"; 
            temperatureDegree.textContent = temp_f;
        }
    })
});
  });
} 

function setIcons (icon){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon;
    console.log(icon);
    skycons.play();
    return skycons.set(code,skycons[currentIcon]);
}
})