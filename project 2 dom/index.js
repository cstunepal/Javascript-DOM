// Javascript for the website is utilized here


// Variables

let openbtn = document.getElementById('open-btn');
let modalCNT = document.getElementById('modal-container');
let closebtn = document.getElementById('close-btn');


// Event Listeners

openbtn.addEventListener('click', function(){
    modalCNT.style.display = 'block';

});


closebtn.addEventListener('click', function(){
    modalCNT.style.display = 'none';
});

window.addEventListener('click', function(){
    if (e.target === modalCNT){
        modalCNT.style.display = 'none';
    }
});


