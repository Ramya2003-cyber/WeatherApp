// const API_KEY = 'd1b5d97cb0bb6cff785bf32bd2917c73';

// // const submit=document.getElementById("submit");
// // submit.addEventListener("click",handleClick);

// const cityname = document.getElementById("cityname");
// window.onload=getUserCityLocation;
// const temp1 = document.getElementById("temperature");
// function handleClick()
// {
//     const city = document.getElementById("myInput").value;
// }

// function handleClick1(city)
// {

//     console.log(city);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1b5d97cb0bb6cff785bf32bd2917c73`)
//         .then(response => response.json())
//         .then(data => {
//             const temperature1 = data.main.temp;
//             temp1.textContent = `${temperature1}° Celsius`;
//             cityname.textContent=   `${city}`;
//             console.log(`The temperature in ${city} is ${temperature1}°C.`);
//         })
//         .catch(error => console.error(error));

// }



// function getUserCityLocation() {
//     // Check if the Geolocation API is supported in the browser
//     if (navigator.geolocation) {
//         // Get the user's current position
//         navigator.geolocation.getCurrentPosition(position => {
//             // Get the latitude and longitude of the user's position
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;

//             // Use an API to get the user's city based on their latitude and longitude
//             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d1b5d97cb0bb6cff785bf32bd2917c73`)
//                 .then(response => response.json())
//                 .then(data => {
//                     // Get the city name from the API response and log it to the console
//                     const city = data.name;
//                     handleClick1(city);
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         });
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//     }
// }

// getUserCityLocation();


const API_KEY = 'd1b5d97cb0bb6cff785bf32bd2917c73';
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temperature");

// Move this line above the API_URL line

const spinner = document.getElementById('spinner');
spinner.style.display = 'block';

const submit = document.getElementById("submit");
submit.addEventListener("click", handleClick);

function handleClick() {
    const city = document.getElementById("myInput").value;

    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none';
            const temperature = data.main.temp;
            temp.textContent = `${temperature}° Celsius`;
            cityname.textContent = `${city}`;
            console.log(`The temperature in ${city} is ${temperature}°C.`);
        })
        .catch(error => console.error(error));
}

function getUserCityLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    spinner.style.display = 'none';
                    const city1 = data.name;
                    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${API_KEY}`;
                    fetch(cityUrl)
                        .then(response => response.json())
                        .then(data => {
                            const temperature = data.main.temp;
                            temp.textContent = `${temperature}° Celsius`;
                            cityname.textContent = `${city1}`;
                            console.log(`The temperature in ${city1} is ${temperature}°C.`);
                        })
                        .catch(error => console.error(error));
                    console.log(city1);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

getUserCityLocation();
