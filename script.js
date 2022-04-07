let p1 = 10;
let p2 = 10;

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const paragraph = document.querySelector(".intro-text");
const text = "This is sample text";

const textWrap = document.createElement("p"); //create the paragraph element and assign it to the textWrap
textWrap.classList.add("intro-text"); //adding the class to the paragraph tag
container.append(textWrap); //the element is appended

p1 = window.prompt("Enter in the first value to multiply: "); //prompts user to input value with an alert window, then store values
p2 = window.prompt("Enter in the second value to multiply: ");

document.getElementById("myBtn").addEventListener("click", function() { //assign event listener to the element myBtn
    myFunction(p1, p2); //declare function and pass already declared p1, p2
  });
  
  function myFunction(a, b) { //assign p1, p2 to a, b
    document.getElementById("demo").innerHTML = "multiplication: " + a * b; //assign a * b to the innerHTMl of the demo element id
  }
//have the user input two different values, assign those values to p1 and p2, then multiply those two values