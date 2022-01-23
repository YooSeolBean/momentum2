const API_KEY = "eab93a998b03299731704212f2132fb1";
function onGeoOk(location){
  const lat = location.coords.latitude
  const lng = location.coords.longitude
 
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  
  fetch(url).then(response => response.json())
            .then((data)=>{
              const weather = document.querySelector("#weather span:first-child");
              const city = document.querySelector("#weather span:last-child");
              city.innerText = data.name;
              weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
      
            });
 
}

function onGeoError(){
  alert("if you don't share your GPS, We can't provide weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);