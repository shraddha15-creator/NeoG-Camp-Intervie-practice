var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

var count= 1;

setInterval(() =>{
    if(count < 1000){
        count++; 
    counter.innerText = count;
    counter.style.backgroundColor = "red"
    }
}, 2)

setTimeout(() =>{
    followers.innerText = "followers on insta"
    followers.style.backgroundColor = "blue"
},2000)