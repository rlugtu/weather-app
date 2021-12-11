// Document.querySelector finds an element in the html
// Find by class name by putting the class name in as the argument prepended with . 

// event listener causes the html to watch for an event. When the event is activated it will execute a function 

// you can do a lot with query selector like overwriting it's inner html (its actual value)

// API NOTES 
// fetch retrieves data from an api via a 'promise'
// .then does an action on that data


const searchButton = document.querySelector('.search-button')
const searchBar = document.querySelector('.search-lookup')
const searchDescription = document.querySelector('.search-result-description')

const updateValues = (data) => {
    console.log(data)
    const temp = document.querySelector('.temp')
    const city = document.querySelector('.city')
    const humidity = document.querySelector('.humidity')
    const wind = document.querySelector('.wind-gusts')
    const feelsLike = document.querySelector('.feels-like')
    const min = document.querySelector('.temp-min')
    const max = document.querySelector('.temp-max')

    temp.innerHTML = data.main.temp + '&#x2109'
    feelsLike.innerHTML = 'Feels Like: ' + data.main.feels_like
    city.innerHTML = 'City: ' + data.name
    wind.innerHTML = 'Wind Gusts: ' + data.wind.gust
    humidity.innerHTML = `Humidity: ${data.main.humidity}`
    min.innerHTML = `Temp min: ${data.main.temp_min}`
    max.innerHTML = `Temp max: ${data.main.temp_max}`
}

const handleSearch = () => {
    searchDescription.innerHTML = `Search Results for ${searchBar.value}`

    let results;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=351fbd2da00ad4e776ef440fb201a922&units=imperial`)
        .then((res) => res.json())
        .then((data) => {
            results = data
            updateValues(results)
        })
}

// in this case we are finding the search button element and adding an event listener that watches for when that element is clicked. 
searchButton.addEventListener('click', handleSearch)

