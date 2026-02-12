let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelector("li");

div.addEventListener("click" , function(event) {
    console.log("div was clicked");
});

ul.addEventListener("click" , function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

lis.addEventListener("click" , function(event) {
    event.stopPropagation();
    console.log("li was clicked");
});