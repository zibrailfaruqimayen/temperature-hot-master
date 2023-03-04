// do not show API KEY on your js file
const API_KEY = `73caf1820dd13f3ada2093588c1cfbb9`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  // const temperature = document.getElementById("temperature");
  // temperature.innerText = data.main.temp;
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  console.log(data.weather[0].main);
};

// set weather condition
const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;

  // set city
  document.getElementById("city").innerText = city;
  loadTemperature(city);
  searchField.value = "";
});

loadTemperature("dhaka");
//
//
//
// const news api=`fa77500342cd40aa9c2126bec9c707a2`
