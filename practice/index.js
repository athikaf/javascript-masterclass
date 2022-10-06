// console.log("this is from seperate file")

/*
we can write multi line comments like this
xyz
*/

//Data-types
//Strings
//Numbers
//boolean

// console.log(typeof(10))
// console.log(typeof("hello"))
// console.log(typeof(true))

//Variables - pieces of data



// myName = "Syed";
// console.log(myName)

// let yourName = prompt("Please enter your name");
// console.log(yourName)

// alert("My name is "+myName+" and your name is "+yourName);

// console.log(myName.length)

// let myName = "Ateeq";
// console.log(myName)

// console.log(2+3);
// console.log(3-2);
// console.log(4*5);
// console.log(10/3);

//%
// console.log(10%3)
// console.log(91%2)

// console.log(2+3*(5-10)/2);
//BDMAS

// let x = 5;
// // x = x+1;
// x++;
// console.log(x)
// x--;
// console.log(x)
// x += 3 //x = x+3
// console.log(x)
// x *= 3;
// console.log(x)
// x -=4;
// console.log(x)
// x /=5;
// console.log(x)

//Fucntions
// function hello(){
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")
// }

// hello();

// function sum(a,b){
//     console.log(a+b)
// }

// sum(5,2);
// sum(10,8)
// sum(12,13)

//1.4 = 1, 1.5 or 1.9 = 2;
// function chocolates(money){
//     console.log(Math.floor(money/1.5))
//     let remaining = money%1.5;
//     return remaining;
//     console.log("this wont work")
// }

// let change = chocolates(10);
// console.log(change)

//Math.random will generate numbers from 0 to 0.99
//multiplying with 6 to get in the range of 0 to 5.99
//Math.floor to get discrete non floating values
//0 to 5, but i want from 1 to 6, so we add 1.


//Dice roll
// function diceRoll(){
//     let roll = Math.floor(Math.random()*6)+1;
//     console.log(roll)
//     if(roll == 6){
//         console.log("you are out of jail, congrats!");
//     }else {
//         console.log("you did not get out, good luck next time.")
//     }
// }

// diceRoll();

//!==
//<
//>
//<=
//>=

//Comparators
//AND &&
//OR ||
//NOT !

// if(2>1 || 1==0){
//     console.log("this is working")
// }else{
//     console.log("this is not working")
// }

// console.log(1);
// console.log(2)
// console.log(3);
// console.log(4)
// console.log(5);
// console.log(6)
// console.log(7);
// console.log(8)
// console.log(9);
// console.log(10)

// let count = 1;
// while(count<=100){
//     console.log(count);
//     count++;
// }

// for(let i = 1;i<=10;i++){
//     console.log(i)
// }
/*
Athika
Adnan
Syed
Hamza
Sheraz
*/

// let guestName = prompt("Please enter your name");

// if(guestName == "Athika"){
//     alert("Welcome");
// }else if(guestName == "Adnan"){
//     alert("welcome")
// }


//Array
// let nums = [1,2,3,4,5];
// // console.log(nums[0])
// console.log(nums.length)

// let guestList = ["athika","adnan","syed","hamza","sheraz"]
// // console.log(guestList)
// guestList.push("faiq");
// // console.log(guestList)

// for(let i=0;i<guestList.length;i++){
//     if(guestList[i]== guestName){
//         console.log("welcome");
//     }
// }

// document.querySelector("h1").innerHTML = "Hola"
// document.getElementById("h1").textContent = "this is using id"
// document.getElementsByClassName("new")[0].textContent = "this is now <b>bold content</b>"
// document.querySelector(".new")
// document.querySelector("p").innerHTML = "this got targeted"
// document.querySelectorAll("p")[1].innerHTML = "this got targeted"
// document.querySelectorAll("p")[1].style.fontSize = "100px"
// document.querySelector("input").style.backgroundColor = "yellow"

// let button = document.querySelector("#btn");
// button.addEventListener("click",()=>{
//     console.log(button.value)
//     document.querySelector("p").classList.toggle("styled")
// })


//fat arrow functions/ call back function

let input = document.querySelector("#text")
let submit = document.querySelector("#submit")

submit.addEventListener("click",()=>{
    let data = document.querySelector("#data")
    data.innerHTML += input.value;
    data.style.color = "red"
})

let anchor = document.querySelector("a");
anchor.setAttribute("href","https://www.google.com/")