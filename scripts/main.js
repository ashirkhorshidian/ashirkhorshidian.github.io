var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/northwood-m70d-zoom.jpg') {
        myImage.setAttribute('src','images/northwood-m70d-back-zoom.jpg');
    } else {
        myImage.setAttribute('src','images/northwood-m70d-zoom.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'This is the Northwood M70-D, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is the Northwood M70-D, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}