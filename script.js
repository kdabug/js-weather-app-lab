const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";
//https://samples.openweathermap.org/data/2.5/weather?zip=89145,us&appid=053a7650f87c76d09503df6648d5a922
const form = document.querySelector("form");
const submitButton = document.querySelector('input[type="submit"]');
console.log(submitButton);
const zipCode = document.querySelector('input[type="number"]').value;
console.log(zipCode);

const renderWeather = data => {
  const node = document.createElement("div");
  node.innerHTML = `
    <div class='added-info'>
    <div id='name'><h3>${data.name}</h3></div>
    <div id='main-temp'><h1>${data.main.temp}</h1></div>
  <h2>Look for ${data.weather["0"].description}</h2>
  <div id='min-max'>
  <div id='min'><h3>min</h3><h2>${data.main.temp_min}</h2></div>
  <div id='max'><h3>max</h3><h2>${data.main.temp_max}</h2></div></div></div>`;
  document.body.appendChild(node);
};

// const renderWeatherConditions = async () => {
//   const zipCode = await fetchWeather();
//   zipCode.forEach(renderWeather);
// };

const fetchWeather = async (code, apiKey) => {
  const resp = await axios(
    `${BASE_URL}zip=${code},us&appid=${apiKey}&units=imperial`
  );
  console.log(resp.data);
  renderWeather(resp.data);
};

// const handleSubmit = async planetData => {
//   const resp = await axios.post(`${BASE_URL}/planets`, planetData);
//   renderPlanet(resp.data.planet);
// };

submitButton.addEventListener("click", ev => {
  ev.preventDefault();
  const zipCode = document.querySelector('input[type="number"]').value;
  const appID = document.querySelector('input[type="hidden"]').value;
  console.log(zipCode, appID);
  fetchWeather(zipCode, appID);
  form.style.display = "none";
});
