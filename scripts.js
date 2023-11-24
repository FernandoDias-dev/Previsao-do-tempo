const key = "6a0f5d4bbda8c0f243a630acb2ea80c2";

function putDataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".text-forecast").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML = "Umidade " + data.main.humidity  + "%";
  document.querySelector(
    ".img-forecast"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json()); // Corrigido de jason() para json()

  putDataOnScreen(data);
}

function iClickedTheButton() {
  const city = document.querySelector(".input-city").value;

  searchCity(city);
}
