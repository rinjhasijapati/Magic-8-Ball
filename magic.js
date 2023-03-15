document.addEventListener("DOMContentLoaded", function() {        //Makes sure that the JavaScript code is executed after the HTML elements have been loaded

let words = ["Better not tell you now", "Cannot predict now", "Most likely", "My reply is no", "Outlook good", "Outlook not so good", 
             "Reply hazy try again", "Signs point to yes", "Yes", "You may rely on it", "Don’t count on it", "Without a doubt"];
let output = document.getElementById("response");
let btns = document.getElementById("btn"); 
let value = document.getElementById("text");

btns.addEventListener("click", function(){
    var random = words[Math.floor(Math.random() *words.length)]; 
    if(value.value == ""){                                           //value.value is a property of the input element object, and it contains the string value of the text entered by the user.
        output.innerHTML = "Please enter your text";
    }else{
        output.innerHTML = random;
    }
});

});