# HOMEWORK: Weather App

![ui](https://media.git.generalassemb.ly/user/6387/files/ac9a086c-9fd8-11e8-9e0d-52091e56436b)

For this homework you'll be using the Open Weather API. You're going to be using **vanilla JS** to display data from the API.

### Set up
1. Fork and clone this repo
2. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
3. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
4. Take a look at the API docs. All APIs are different so you need to study the documentation to see what the endpoints look like and what you will get back. 
5. Paste the URL into your browser to check out the data you're working with and to verify that your key works. You can use a [Chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) to format the JSON response.
<details>
  <summary>Click this arrow if you want to see what your URL should look like.</summary>
  
```
http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=imperial&appid=[PUT YOUR API KEY HERE]
```
</details>

### (Rough) Guide

#### Vanilla HTML Form

- Create an `index.html` file with standard boilerplate
- Build a vanilla HTML form
	- the action should be `http://api.openweathermap.org/data/2.5/weather?`
	- the method should be `GET`
	- include an input with a name `q`
	- and include an input with type `hidden` with a name `APPID` (your API key)
	- don't forget a submit button
- Load the `index.html` file in your browser and test it out by entering a city name in the input field and clicking on the submit button


If everything works, you should see a JSON response with a bunch of data.

#### A Scriptier Form

Now it's time to dynamically submit our form and insert a nicely formatted sub-set of the response in the DOM.

- To start, set the `action` of the form to just `#`
- Add a `script` tag with a src of `script.js` and the corresponding js file.  Remember to add a `defer` attribute to the script tag
- Above the script tag with `script.js` add the following tag:
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
``` This will load axios.  
-  Inside `script.js` query select for the `form` and assign it to a variable
-  add an event listener to the form for `submit` and use `preventDefault`
-  Extract the value out of the text input and assign it to a variable
-  Using an `async` function that takes a city name as an argument, make an `axios` GET request to the weather
api; use string interpolation to insert the city name and API key into the url.
Don't forget to `await` the response.
-  After parsing the response, use DOM manipulation to render the view from the mock up above.  


Yay!
## 🚀 Completion looks like:

Your app has an HTML file and a JavaScript file (with optional CSS) and does the following things:

- Handles the zip code input from the user
- Fetches data from the API when the zip code is submitted
- Parses the information that comes back from the API call
- Renders that information on the page


- **BONUS**: Include a button that converts the temperature from Celsius to Fahrenheit.  
- **BONUS**: Change the styling of the page based on weather conditions. 
