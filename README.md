# Weather App Intro

## Part 1
### Goals
- Basic HTML 
- CSS practice (use flexbox if you can)
- Image Imports
- Responsive Design 

- Part 1 will be used to give you some practice seeing a template or base image and creating it on your own. Below is an example or template that you can follow but feel free to make any designs you want. 
- This is mainly a frontend practice so I'll be looking at how you organized your html and more importantly how you went about styling the page with css. I'd like this page to be responsive so look into media queries if you haven't already 
- Just hardcode all the values. We're going to integrate this with an API to make the app dynamic in Part 2


## Topics to research:
- Media Queries 
- Responsive Design 
- Mobile First Design (less important) 

Have a look at these screenshots. You can either copy the design as best you can but I'd prefer if you made your own design or include your own interpretation if this design is too basic 
![alt text](./screenshots/login.JPG)
![alt text](./screenshots/weather.JPG)


## Part 2 (Only after I've reviewed Part 1)
### Topics:
- Integration with a weather API
- Dom Manipulation

### Goals
- Use a weather API to dynamically search for data and get the actual weather of a location
- Use Dom Manipulation to replace the hardcoded template from part 1
- Use Dom Manipulation to add some creative styling based on values from the API 
- we'll talk about how to do this via javascript in your main.js


# Intro (DOM Manipulation)
A way I found to connect html, css and javascript is like this. 
- HTML is the body or structure of a person. Hands, legs, etc
- CSS are the clothes (styling) of those body parts
- Javascript act as the brains allowing you to come alive and change the clothes or parts of the body. Without Javascript your page is static and can't change.

1. connect your main js to the index.html by adding the script tag after the closing body tag
```
</body>
<script src="./main.js"></script>
</html>
```
### In Main.js
 Make sure its connected! you can do this by just adding a function that you know will call
```
alert('hi')
```
if you see the alert when you refresh the page your all set to get started

Here are Dom Manipulation Concepts
- find an element on the html
    - Document.querySelector()
    - This tells JS to find an element on the html based on the argument that you pass inside the parenthesis 
    - to find an element like a p tag you just put Document.querySelector(p) which will find the first p tag but thats not too helpful. Lets find an element with a specific class name
    - you do this by prepending the classname with a . 
     ```
     const button = Document.querySelector('.my-button-class')
     ```
    - this will find the element with a class called my-button-class and assign it to a variable. Now you can do things with it!
- Add event listeners to those Variables
    - so we have a variable called button. Now we want to add an event listener to watch whenever an action happens on that button
    - lets watch for a click event which whill execute a function when the button is clicked
    - make a function
    ```
    let myFunc = () => {
        alert('hey alen')
    }
    ```
    - cool now link this to execute whenever the button is clicked
    ```
     button.addEventListener('click, myFunc)
    ```
    - you should now see the button executes alerts hey alen whenever you click the button!

- Overwrite Elements that we find after the button is clicked
    - try this out:
    - Make a function to alert the value inside your input element
    - inside that function you want to querySelector the input element (probably should put a class on it to make it easy) then assign it to a variable
    - then with that variable alert it's value like so
    ```
    const myFunc = () => {
        const input = document.querySelector('.my-input)

        alert(input.value)
    }
    ```
    - now in your buttons event listener put myFunc in there. Type something in the input box and click the button and you should see it alert whatever you typed in!

    - now lets overwrite the search result description with the value of the input (add this to the myFunc because we want this all to happen after a button click)

     ```
    const myFunc = () => {
        const input = document.querySelector('.my-input)

        const description = document.querySelector('.result-description)

        description.innerHTML = 'Search Result: ' + input.value
    }
    ```
    - OR use string interpolation 

     ```
    const myFunc = () => {
        const input = document.querySelector('.my-input)

        const description = document.querySelector('.result-description)

        description.innerHTML = `Search Results: ${input.value}`
    }
    ```

    - Now you can see how the page is coming alive by accessing values in inputs and overwriting other elements on the page



# Using an API

- we'll talk more about the structure of getting data from an api but for now i'll give you the code (2 Functions)
```

const updateValues = (data) => {
    console.log(data)

    start overwriting dom elements with the results of the data!
}
```

```
const handleSearch = () => {
    const searchBar = document.querySelector('.search-input)

    let results;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=351fbd2da00ad4e776ef440fb201a922&units=imperial`)
        .then((res) => res.json())
        .then((data) => {
            results = data
            updateValues(results)
        })
}
```
- what does handleSearch do?
    - we grab the the value of the input, similar to what we did before and plug that value into the api. The api will return data and we pass that into a helper function called updateValues

- what is updateValues for?
    - update Values is what we did above but with data we retrieve from the api.
    - so first we console.log(data) so we can see which values we want
    - just like before its up to you to find the proper elements on the page and overwrite the values with values from the api
    - note data is in the from of an object so you would do something like
    ```
    const temp = document.querySelector('temp')

    temp.innerHTML = data.main.temp 
    ```

- connect handleSearch to your buttons event listener and watch the magic whenever you click the button
