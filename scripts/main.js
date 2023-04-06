// --------------- Home Page -----------------
// Weather API
    // URL for Current Weather: https://api.openweathermap.org/data/2.5/weather?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4
    async function PopulateCurrentWeather(){
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4");
        data = await response.json();

        const currentTemp = document.querySelector(".current_temp");
        currentTemp.textContent = data.main.temp;
        const currentCondition = document.querySelector(".current_condit");
        let conditCapitalized = data.weather[0].description.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");
        currentCondition.textContent = conditCapitalized;
        const humidity = document.querySelector(".humidity");
        humidity.textContent = data.main.humidity;
        const weatherImg = document.querySelector("img.weather");
        const iconCode = data.weather[0].icon;
        weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    }
    PopulateCurrentWeather();

    // URL for Multiday weather: https://api.openweathermap.org/data/2.5/forecast?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4
    async function PopulateFutureData(){
        apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.5427&lon=117.7854&units=imperial&appid=ac915a6d1258935157073b6ba78cb9f4");
        apiData = await apiResponse.json();

        const temps = [];
        // Get temperature at noon for the next 3 days
        apiData.list.forEach((item) =>{
            const date = new Date(item.dt_txt);

            if (date.getHours() === 12 && temps.length < 3 && date.getDate() >= new Date().getDate()){
                temps.push(item.main.temp);
            }
        });

        // Set the temperatures for the html elements for the next three days
        const oneDay = document.querySelector(".one h4");
        oneDay.textContent = temps[0] + "°F";
        const twoDay = document.querySelector(".two h4");
        twoDay.textContent = temps[1] + "°F";
        const threeDay = document.querySelector(".three h4");
        threeDay.textContent = temps[2] + "°F";

    }
    PopulateFutureData();

// Last Updated In Footer
    const lastUpdate = document.querySelector(".lastupdate");
    lastUpdate.textContent = document.lastModified;

// Open nav when hamburger menu pressed and close when x is clicked
    const navButton = document.querySelector(".closed");
    const openNav = document.querySelector(".open");
    const logoNTitle = document.querySelector(".logontitle");
    const evenSpaceProblem = document.querySelector(".evenspacing");
    navButton.addEventListener("click", () =>{
        openNav.style.display = "block";
        navButton.style.display = "none";
        logoNTitle.style.display = "none";
        evenSpaceProblem.style.display = "none";

    })

    const xButton = document.querySelector(".x_symbol");
    xButton.addEventListener("click", () =>{
        openNav.style.display = "none";
        navButton.style.display = "block";
        logoNTitle.style.display = "flex";
        evenSpaceProblem.style.display = "block";
    })


