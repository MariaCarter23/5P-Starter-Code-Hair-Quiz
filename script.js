let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");


let comment= 
    document.querySelector( ".comment").
value;
    console.log (comment);
    
    	
let message = document.querySelector(".message");
let button = document.querySelector("button");

button.onclick = function() {
    let name = document.querySelector(".color").value;
    let pink = Number(document.querySelector(".pink").value);
    let sleep = 8  - pink;
    
    message.style.display = "block";
  
    document.querySelector(".message").innerHTML = "test";
};
    