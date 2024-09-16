// Write your solution here
const button = document.querySelector('#clickMe');
console.log(button);

button.addEventListener('click',() =>{
    console.log("clicked!!");
});

button.addEventListener('mouseenter',() =>{
    console.log("On the button!!");
});

button.addEventListener('mouseleave',() =>{
    console.log("left the button!!");
});


const button1 = document.querySelector('#clickMeOnce');
console.log(button1);


//task3
function handleButton(){
    console.log("button is clicked!!");
    button1.removeEventListener('click',handleButton);
}
button1.addEventListener('click',handleButton);

//task4

document.addEventListener('DOMContentLoaded',() => {
    const button = document.querySelector('#clickMe');
    console.log(button);
    console.log("button loaded");
});