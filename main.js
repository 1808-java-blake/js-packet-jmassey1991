// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let entirePage = document.getElementsByTagName('*');
    for (let i = 0; i < entirePage.length; i++) {
        if (entirePage[i].textContent === 'USA') console.log(`${entirePage[i].innerHTML} at Tag ${entirePage[i]}`);
    }
}
//getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    let allTRs = document.getElementsByTagName('tr');
    for (let i = 0; i < allTRs.length; i++) {
        let allTDs = allTRs[i].getElementsByTagName('td');
        for (let j = 0; j < allTDs.length; j++) {
            if (allTDs[j].textContent === 'Sales') console.log(allTDs[j - 1].textContent);
        }
    }
}
//getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let allAs = document.getElementsByTagName('a');
    for (let i = 0; i < allAs.length; i++) {
        let allSPANs = allAs[i].getElementsByTagName('span');
        for (let j = 0; j < allSPANs.length; j++) {
            console.log(allSPANs[j].textContent);
        }
    }

}
//getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    let selectSkills = document.getElementsByName('skills');

    for (let i = 0; i < selectSkills.length; i++) {
        let allOptions = selectSkills[i].getElementsByTagName('option');
        for (let j = 0; j < allOptions.length; j++) {
            if (allOptions[j].selected === true) {
                console.log(allOptions[j].textContent);
            }
        }
    }
}
//getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute() {
    let entirePage = document.getElementsByTagName('*');
    for (let i = 0; i < entirePage.length; i++) {
        if (entirePage[i].attributes.getNamedItem('data-customAttr') === null) continue;
        console.log(entirePage[i].attributes.getNamedItem('data-customAttr'));
    }
    // let dataCus = entirePage.getAttribute('data-customAttr');
    // console.log(dataCus);
}
//getCustomAttribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sumEvent() {
    let nums = document.getElementsByClassName('nums');

    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener("change", () => {
            document.getElementById('sum').innerText = `
            ${+document.getElementById('num1').value + +document.getElementById('num2').value}`;
        })
    }
}
sumEvent();



// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

function skillEvent() {
    let selectSkills = document.getElementsByName('skills');
    selectSkills[0].addEventListener("change", () => {
        let allOptions = selectSkills[0].getElementsByTagName('option');
        for (let j = 0; j < allOptions.length; j++) {
            if (allOptions[j].selected === true) {
                alert(`Are you sure ${allOptions[j].innerText} is one of your skills?`)
            }
        }

    });
}
skillEvent();

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function favoriteColor() {
    let allColors = document.getElementsByName('favoriteColor');
    let currentColor = {};
    currentColor.value = 'grey';


    for (let j = 0; j < allColors.length; j++) {
        //console.log(allColors[j]);
        for (let i = 0; i < allColors.length; i++) {

            if (allColors[i].selected === true) currentColor = allColors[i];

        }
        //console.log(currentColor.value);
        allColors[j].addEventListener("click", () => {

            alert(`So you like ${allColors[j].value} more than ${currentColor.value} now?`)
            currentColor = allColors[j];
            for (let k = 0; k < allColors.length; k++) {
                allColors[k].style.backgroundColor = `${currentColor.value}`;   // Just changes property of button no visual effect
                allColors[k].parentElement.style.backgroundColor = `${currentColor.value}`; // adds visual effect 
            }
        })


    }
}
favoriteColor();

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function showHideEvent() {
    let allEmployees = document.getElementsByClassName('empName');
    for (let i = 0; i < allEmployees.length; i++) {
        console.log()
        allEmployees[i].addEventListener('mouseover', () => {

            if (allEmployees[i].style.opacity == 100) allEmployees[i].style.opacity = 0;
            else allEmployees[i].style.opacity = 100;
        })

    }
}
showHideEvent();

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
setInterval(() => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let amOrpm = '';
    if (h < 12) amOrpm = 'AM';
    else amOrpm = 'PM'
    if (m < 10) m = '0' + m;
    if (s < 10) m = '0' + s;

    document.getElementById('currentTime').innerText = `${h % 12}:${m}:${s} ${amOrpm}`;
}
    , 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function delay() {
    document.getElementById('helloWorld').addEventListener('click', () => {
        setTimeout( () => {
            document.getElementById('helloWorld').style.color = getRandomColor();
        }, 3000)
       
    });

}
delay();

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func){
   
    
    for(let i = 0; i < node.childNodes.length; i++){
        //console.log(node.childNodes[i]);
        func(node.childNodes[i], func);
    }
}
walkTheDOM(document, walkTheDOM);


