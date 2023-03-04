// do not show API KEY on your js file
const API_KEY = `73caf1820dd13f3ada2093588c1cfbb9`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  const temperature = document.getElementById("temperature");
  console.log(data.main.temp);
  temperature.innerText = data.main.temp;
  //   temperature.innerText = data.main.temp;
};

loadTemperature("dhaka");
