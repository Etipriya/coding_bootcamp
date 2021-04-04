# Help for the Homework

## A mixture of hints, and guidance:

### General Guidance

This is an interesting homework because there's a mixture of different work going on we have:

1. Building out the HTML identifying areas of:
   - Static text: Figure out what isn't going to change, what doesn't need updating via JavaScript.
   - Dynamic data: Determine what we need to address as dynamic functionality in our JavaScript.
2. Address our CSS. This isn't a CSS heavy homework, so don't focus on making it look absolutely beautiful - unless you want to .. at the end of the time for the homework!
3. Plan out the functionality that we need, we should know the areas of dynamic data we need to deal with based on our plan.
4. (This can be done way earlier too) Investigate the API, figure out what data we are working with and figure out what endpoints give us what we need.

Your folder structure should look like:

```
weather-dashboard/
	assets/
		js/
			main.js
		css/
			style.css
		images/
			...screenshots
	index.html
	README.md
```

> Hint: The UV data isn't included with the weather data endpoint - likewise it's not included with the forecast. So we need to be looking at using 3 different endpoints!
>
> This means 3 different endpoints with 3 different requirements too!

---

> **EDIT:** The UV Index endpoint MIGHT not work as it's getting deprecated- so it might mean they've moved to this API https://openweathermap.org/api/one-call-api for the UV index, where there's a UVI property.
>
> **This still required the query parameters for the lattitude and longitude just like the previous UV index endpoint**
>
> You can get the lattitude and longitude from the data given back from current weather endpoint:

```json
...
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
...
```

---

### Specific things for Homework 6:

1. MUST submit a deployed live application URL
2. You MUST be able to search via city
3. When you search for a city you MUST be able to see:
   - city name
   - date
   - icon of the current weather condition
   - current temperature
   - current humididty
   - windspeed
   - UV index
4. When you search for a city you MUST be able to see A 5 day forecast MUST display showing:
   - the date
   - icon of the current weather condition
   - temper
5. The UV Index MUST use different colours to indicate whether the conditions are:
   - favourable
   - moderate
   - severe
6. Previously searched for cities MUST be stored in local storage and should display to the user.
7. User is able to repeat a search for a city's weather based on clicking it in the search history.
