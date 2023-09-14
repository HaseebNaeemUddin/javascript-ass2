// >>>>>>>>>>>>>>>>>>>>>>>>>>>Chap9-11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1---------------------------------------------

// var userInput = prompt("Enter your city");
// if (userInput === "karachi"){
//     alert("Welocme to the city of lights");
// }


// Q2----------------------------------------

// var gender = prompt("Enter your gender");
// if (gender === "male"){
//     alert("Good Morning Sir");
// }
// if (gender === "female"){
//     alert("Good Morning Mam");
// }


// Q3----------------------------------------------

// var color = prompt("Enter color of signal");
// if(color === "red"){
//     alert("Must stop");
// }
// if(color === "yellow"){
//     alert("Reday to move");
// }
// if(color === "green"){
//     alert("move now");
// }

// Q4--------------------------------------------

// var fuel = prompt("Enter remaining fuel in your car");
// if(fuel < 0.25 ){
//     console.log("Please refill the fuel in your car")
// }

// Q5(a)-------------------------------------------

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Displayed

// Q5(b)------------------------------------------

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Not displayed

// Q5(c)----------------------------------------------

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Condition 2 and 4 is true

// Q5(D)--------------------------------------

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Displayed

// Q5(E)---------------------------------

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// Not displayed

// Q5(F)--------------------------------------------

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// Not display


// Q6----------------------------------------------------------------------

// var firstSubject = +prompt("Enter your first subject number");
// var secondSubject= +prompt("Enter your second subject number");
// var thirdSubject = +prompt("Enter your third subject number");
// var totalMarks = +prompt("Enter your total subjects marks");
// var obtainsMarks = firstSubject + secondSubject + thirdSubject;
// var percentage = obtainsMarks / totalMarks * 100;


// if(percentage >=80 && percentage <=100){
//     document.write("Total Marks:" + totalMarks + "<br>" + "Marks Obtained:" + obtainsMarks + "<br>"+ "Percentage:"+ percentage + "<br>" + "Grade:"+ "A*"+"<br>"+ "Remarks:"+"Excellent");
// }
// else if(percentage >=70 && percentage <=80){
//     document.write("Total Marks:" + totalMarks + "<br>" + "Marks Obtained:" + obtainsMarks + "<br>"+ "Percentage:"+ percentage + "<br>" + "Grade:"+ "A"+"<br>"+ "Remarks:"+"Good");
// }
// else if(percentage >=60 && percentage <=70)
// {
//     document.write("Total Marks:" + totalMarks + "<br>" + "Marks Obtained:" + obtainsMarks + "<br>"+ "Percentage:"+ percentage + "<br>" + "Grade:"+ "B"+"<br>"+ "Remarks:"+"You need to improve");
// }
// else(percentage >= 50 && percentage <= 60);
// {
//     document.write("Total Marks:" + totalMarks + "<br>" + "Marks Obtained:" + obtainsMarks + "<br>"+ "Percentage:"+ percentage + "<br>" + "Grade:"+ "C"+"<br>"+ "Remarks:"+"Fail");
// }

// Q7------------------------------------------------------

// var secretNumber = 7;
// var userGuess = +prompt("Enter a number between 1-10");
// if(userGuess === secretNumber)
// {
//     document.write("Bingo! Correct answer");
// }
// else (secretNumber === userGuess +1)
// {
//     document.write("Close enough to the correct answer");
// }

// Q8-----------------------------------------------

// var num = +prompt("Enter a number");
// if (num % 3 === 0){
//     document.write("Number is divisible by 3");
// }

// Q9---------------------------------------

// var num = +prompt("Enter a number");
// if(num % 2 === 0){
//     document.write("It is an even number");
// }
// else if (num % 3 === 0){
//     document.write("It is an odd number");
// }

// Q10-------------------------------------------

// var temp = +prompt("Enter temperature here");

// if (temp >=40 && temp <=50){
//     document.write("Its too hot outside");
// }
// else if (temp >=30 && temp <=40){
//     document.write("The weather today is normal");
// }
// else if(temp >=20 && temp <=30){
//     document.write("Todays Weather is cool");
// }
// else if(temp >=10 && temp <=20)
// {
//     document.write("OMG! todays weather is so cool");
// }

// Q11----------------------------------

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");
// var operator = prompt("add your operation (+, -, *, /, %) ");

// if(operator === "+"){
//     alert(num1 + num2);
// }
// else if (operator === "-"){
//     alert(num1 - num2);
// }
// else if (operator === "*"){
//     alert(num1 * num2);
// }
// else if(operator === "&"){
//     alert(num1 % num2);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CHAPTER 12-13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// Q1------------------------------

// var userInput = +prompt("Enter a number");
// if(userInput >= 48 && userInput <= 57){
//     alert("its a number");
// }
// else if(userInput >= 65 && userInput <= 90){
//     alert("Its an uppercase letter");
// }
// else if(userInput >= 97 && userInput <= 122){
//     alert("Its an lowercase letter");
// }

// Q2------------------------------------

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// if(num1 === num2){
//     alert("Both integers are equal");
// }
// else if(num1 > num2){
//     alert("The first num is larger"+ num1);
// }
// else if(num1 < num2){
//     alert("The second integer is larger"+ num2);
// }

// Q3---------------------------------------

// var num = +prompt("Enter your number");
// if(num > 0){
//     alert("This is a positive number");
// }
// else if(num < 0){
//     alert("This is a negative number");
// }
// else {
//     alert("This number is zero")
// }

// Q4------------------------

// var char = prompt("Enter a character");
// var vowel = ("a","e","i","o","u");

// if(char === vowel){
//     alert("True");
// }
// else {
//     alert("False");
// }

// Q5--------------------------------------

// var pass = ("Pakistan");
// var userPass = prompt("Enter your Password");
// if(!userPass){
//     alert("Please enter your password");
// }
// else if(pass === userPass){
// alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect Password");
// }

// Q6----------------------------------------------------

// var greeting;
// var hour = +prompt("Enter no Of Hours");
// if (hour < 18) {
//     alert(greeting = "Good day");
// }
// else {
// alert(greeting = "Good evening");
// }

// Q7-----------------------------------------------

// var inputTime = +prompt("Enter Time in 24 hrs time format");


// if(inputTime === 1900 && inputTime >= 0 && inputTime < 1200 ) {
//     var inputTime = +prompt("Enter Time in 24 hrs time format");
//       if(inputTime >= 1200 && inputTime <1700 ) {
//         var inputTime = +prompt("Enter Time in 24 hrs time format");
//            if(inputTime >=1700 && inputTime < 2100 ) { 
//             var inputTime = +prompt("Enter Time in 24 hrs time format");
//                 if(inputTime >= 2100 && inputTime <=2359 ) {
//                     alert("Good Night");
//                 }
//                 else 
//                 {
//                     alert("Good Evening");

//                 }    
//                 else 
//                 {
//                     alert("Good Afternoon");
//                 }
//                else
//                {
//                     alert("Good Morning");
//                 }
