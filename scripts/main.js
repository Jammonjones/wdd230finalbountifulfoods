// --------------- Home Page -----------------
// Weather API
    // URL for Current Weather: https://api.openweathermap.org/data/2.5/weather?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4
    async function PopulateCurrentWeather(){
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4");
        data = await response.json();
        console.log(data);

        const currentTemp = document.querySelector(".current_temp");
        currentTemp.textContent = data.main.temp;
        const currentCondition = document.querySelector("current_condit");
        currentCondition.textContent = data.
    }
    PopulateCurrentWeather();

    // URL for Multiday weather: https://api.openweathermap.org/data/2.5/forecast?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4
    async function PopulateFutureData(){
        apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4");
        apiData = await apiResponse.json();
        console.log(apiData);

        
    }
    PopulateFutureData();