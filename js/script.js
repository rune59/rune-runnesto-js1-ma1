const cats = [
    {
        name: "Bert",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:
// Create an object called cat.

// Give the object one property called complain. complain's value 
// should be a method(a function) which logs the string "Meow!".
const cat = [
    {
        complain: complain()
    }
];

function complain() {
    console.log("Meow!");
}




// Question 2:
// Select the h3 from the HTML using the querySelector method and assign 
// it to a variable called heading.

// Change its innerHTML value to "Updated heading".

const heading = "Updated heading";
const actualHeading = document.querySelector("h3");
actualHeading.innerHTML = heading;
// console.log(actualHeading);


// Question 3:
// Use the style property on the heading variable from the question above 
// to change its font size to "2em".

actualHeading.style.fontSize = "2em";





// Question 4:
// Add a class to the heading variable called subheading.

actualHeading.classList.add("subheading");





// Question 5:
// Write code that selects all the p elements on a page and assigns them to 
// a variable called paragraphs.

// Loop through the p elements and change the colour of each to "red".

const paragraphs = document.querySelectorAll("p");
for (i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}




// Question 6:
// Select the div with a class of results, assign it to a variable called 
// resultsContainer and set its inner HTML to be < p > New paragraph</ > and its 
// background colour to be yellow.

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";






// Question 7:
// Create a function that has one parameter called list.

// Inside the function, loop through the list parameter and console log the 
// name property in each object.

// Call the function and pass in the cats variable in the script.js file in the repo.
function myFunction(list) {
    for (i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}
myFunction(cats)



// Question 8:
// Create a function called createCats. The function will have one parameter called cats.

// Inside the function loop through the value passed in as cats and create HTML 
// for each object in the array.

// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.

// If the age property is missing, it should display “Age unknown” instead.

// Return the HTML from the function.

// Call the function and pass in the cats array as the argument.

// Assign the return value of the function to the innerHTML property of the element 
// on the HTML page with a class of cat - container.

function createCats(cats) {
    let html = "";
    for (i = 0; i < cats.length; i++){
        let name = "Unknown name"; 
        if (cats[i].name) {
            name = cats[i].name;
        }
        let age = "Age unknown";
        if (cats[i].age) {
            age = cats[i].age;
        }
        html +=`<div>
                    <h5>Name: ${name}</h5>
                    <p>Age: ${age}</p>
                </div>`;
    }
    return html; 
}
const newHtml = createCats(cats);
// console.log(newHtml);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;

