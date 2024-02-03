// DOM Manipulation

//  Event for Project One

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
 {
    quote: `"Starting to Grind like never before"`,
    person: `Bibash Poudel`
 },
 {
    quote: `"It is hard Isn't it"`,
    person: `Bebus Poudel`
 },
];

btn.addEventListener("click",function(){
    let random= Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
