
let menu = document.querySelector("#city")

function getWeather() {
   let cityId = menu.value;
   fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=257bbb36fe65249c5e2821a206c56d88`)
      .then(function (resp) { return resp.json() })
      .then(function (data) {
         document.querySelector('.package-name').textContent = data.name;
         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
         document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      })
}
getWeather();
menu.onchange = getWeather;

