let sity_lat = 55.0794;
let sity_lon = 38.7783;
let menu = document.querySelector(".dropdown-menu")
let sity = document.querySelectorAll('.dropdown-item');

menu.onclick = () => {
   let x = 0;
   let y = 0;
   for (let i = 0; i < sity.length; i++) {
      sity[i].onclick = function () {
         let target_name = +this.getAttribute('data-sity');
         console.log(target_name)
         switch (target_name) {

            case 1:
               x = 55.0794;
               y = 38.7783;
               break;
            case 2:
               x = 55.761665;
               y = 37.606667;
               break;
            case 3:
               x = 50.433334;
               y = 30.516666;
               break;
            case 4:
               x = 53.90454;
               y = 27.56152;
               break;
            case 5:
               x = 9.0578500;
               y = 7.4950800;
               break;
         }
         sity_lat = x;
         sity_lon = y;
      }
   }
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${sity_lat}&lon=${sity_lon}&appid=257bbb36fe65249c5e2821a206c56d88`)
      .then(function (resp) { return resp.json() })
      .then(function (data) {
         document.querySelector('.package-name').textContent = data.name;
         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
         document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      })
}

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${sity_lat}&lon=${sity_lon}&appid=257bbb36fe65249c5e2821a206c56d88`)
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      document.querySelector('.package-name').textContent = data.name;
      document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
      document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   })
