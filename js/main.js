
function calculate(){
    var a=parseInt(document.getElementById("text1").value);
    var b=parseInt(document.getElementById("text2").value);
    var c=parseInt(document.getElementById("text3").value);
    var output=a+b+c;
    console.log(output);
    document.getElementById("output").innerHTML = output;

}

function submit(){
    var dbusername="admin@gmail.com";
    var dbpassword="admin@123";
    var username=document.getElementById("text1").value;
    var password=document.getElementById("text2").value;
    if (dbusername==username && dbpassword==password){
        alert("Login Successfull.....")
    }else{
        alert("login Failed.....")
    }
}
function find(){
    var month=document.getElementById("text").value;
    switch (month) {
        case "january": alert("Duruthu"); break;
        case "february": alert("Navam"); break;
        case "march": alert("Madin"); break;
        case "april":alert("Bak"); break;
        case "may": alert("vesak"); break;
        case "june": alert("poson"); break;
        case "july": alert("asela"); break;
        case "august":alert("nikini"); break;
        case "september" : alert("binara"); break;
        case "october": alert("vap"); break;
        case "november": alert("il"); break;
        case "december": alert("uduvap"); break;
        default : alert("invalid"); break;
    }
}

var raindata=[56.4,67.7,34.5,90.4,45,34];
var temp=[];
for (var i=1;i<5;i++) {
    temp.push(raindata[i]);
}
var temp1=raindata.slice(1,5);
console.log(temp1);

console.log(temp);

function Capital(){
    var name=document.getElementById("capital").value;
    var name1=name.toUpperCase();
    name1=name1.split("");
    console.log(name1);
}
console.log("Hello Yasindu......");

var name = "Yasindu";

console.log("Hello " + name);

//function
function printData() {

    var email = document.getElementById('email').value;
    console.log(email);
    document.getElementById('result').innerHTML = email;
    alert(email);
}

//flow controllers ---> if, else, elseif, switch

//true,false,a ststemnt that genarates true or false

var x = 45;
var y = 40;

if (x > y) {

}

//+,-,*,/,% ----> arithmatic op
//>,<,<=,>=,==,!= -----> relational operators
//&&, || -----> logical operators

//5+5=10
//"5"+"5"="55"

var dbUserName = "admin@gmail.com";
var dbPassword = "admin@123";

//get userName from user
//get password from user
//check both username and password is match

//1
if (true) {

}

//2
if (true) {

} else {

}

//
if (true) {

} else if (true) {

} else if (true) {

} else {

}

/////////////

var num = 24;

num = num + 3; //num*=3

////////////

var num2 = 34;

num2++; //num2=num2+1

var stdName = "Pasindu";

switch (stdName) {
    case "Yasindu":
        console.log("Hello Yasindu....");
        break;
    case "Kavindu":
        console.log("Hello Kavindu....");
        break;
    case "Pasindu":
        console.log("Hello Pasindu....");
        break;
    default:
        console.log("Not matched...");
}

///////////////

var month = "January";

//loops --> for-loop, while-loop, do-while-loop, foreach

for (var i = 0; i < 6; i++) {

}

var num3 = 67;

while (num3 > 50) {
    num3--;

    if (true) {
        break;
    }
}

var age = 26;

var rainData = [56.4, 67.7, 34.5, 90.4, 45, 34]

//Yasindu -----> [Y,A,S,I,N,D,U]

//Get user's name from user input
//Convert name to Capital
//


/////////////////////////////

//data types

var stdName = "Kamal"; //string
var age = 23; //number
var mark = 78.6; //number
var isMarried = false; //boolean

var std1 = { name: "kavindu", age: 20, color: "black", isSmoke: true, } //object

//variable types ---> var, let, const

var a = 67;
let b = 78;
const z = 89;

////////////////////////

var val1 = 90;
val1 = 67;

let val2 = 56;
val2 = 67;

// const val3 = 78;
// val3=67;

////////////////////////

var val4 = 89;
var val4 = 78;

// let val5 = 56;
// let val5 = 34;

// const val6 = 56;
// const val6 = 34;

///////////////////////

var val7 = 45;

{
    console.log(val7);
    var val8 = 34;
}

console.log(val8);

//------------------

// let val9 = 67;

// {
//   console.log(val9);
//   let val10 = 90;  
// }

// console.log(val10);

//------------------

//const is same as let, block scope


//////////////////

//JSON

// {
//     "name":"Yasindu",
//     "address":"Panadura",
//     "age":60
// }

//////////////////////

var cars = ["Toyota", "Jeep", "Mazda", "BMW", "AUDI", "Suzuki", 89]

for (var val of cars) {
    console.log(val)
}

/////////////////////

function saveData(name, address) {
    return name;
}

const deleteData = function () {

}

//arrow function
const updateData = () => {

}

 



