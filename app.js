// Chapter 31 to 34 (Date And Methods)

// Task1
// var date = new Date();
// document.write(date);

// Task2
// var date = new Date();
// var str = date.toString();
// str = str.slice(4,7);
// var newstr = "uary";
// document.write("Current month: " + str + newstr); 

// Task3
// var date = new Date();
// var str = date.toString();
// var day = str.slice(0,3);
// document.write("Today is " + day + ".");

// Task4
// var days = prompt("Enter the day");
// var message = "It's Fun Day";
// switch(days){
//     case "saturday":
//         alert(message);
//         break;
//     case "sunday":
//         alert(message);
//         break;
// }

// Task5
// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate < 16){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// Task6
// var date = new Date();
// document.write("Current Date: " + date + "<br />");
// var milliseconds = date.getTime();
// document.write("Elapsed milliseconds since january 1, 1970: " + milliseconds + "<br />");
// var minutes = milliseconds/(1000*60*60);
// document.write("Elapsed minutes since january 1, 1970: " + minutes);

// Task7
// var date = new Date();
// var hours = date.getHours();
// if(hours < 12){
//     document.write("Its AM");
// }else{
//     document.write("Its PM");
// }

// Task8
// var laterDate = new Date("Dec 31, 2020");
// / document.write("Later Date: " + laterDate);

// Task9
// var date = new Date();
// console.log(date); 
// var ramadan = new Date("Jun 18, 2020");
// console.log(ramadan); 
// var time = date.getTime() - ramadan.getTime();
// console.log(time);
// var conv = time/(1000 * 3600 * 24);
// console.log(conv);
// var round = Math.round(conv);
// console.log(round);
// document.write(round + " Days have passed since 1<sup>st</sup> Ramadan, 2015");

// Task10
// var date = new Date();
// console.log(date);
// var secDate = new Date("01/01/2015");
// console.log(secDate);
// var a = date.getTime() - secDate.getTime();
// console.log(a);
// var b = a/1000;
// console.log(b);

// Task11
// var date = new Date();
// var hours = date.getHours();
// document.write("Current date is : " + date + "<br />");
// var hoursAgo = date.setHours(hours-1);
// document.write("1 hours ago : " + date + "<br />");

// task12
// var date = new Date();
// document.write("Current date : " + date + "<br />");
// var givenDate = new Date("Jan 21, 1921");
// document.write("100 years back: " + givenDate);
// var year = date.getFullYear();
// document.write("Current date : " + year + "<br />");
// var setYear = date.setFullYear(year-100);
// document.write("100 years back : " + setYear);/////////////////////////////

// task13
// var userAge = +prompt("Enter your age");
// document.write("Your age is : " + userAge + "<br />");
// var date = new Date();
// var year = date.getFullYear();
// var BirthYear = year - userAge;
// document.write("Your birth year is : " + BirthYear);

// task14
// var userName = prompt("Enter Customer Name ");
// var date = new Date();
// var str = date.toString();
// var month = str.slice(4 , 7)
// var units = Math.round(Math.random()*500);
// var unitCharge = 14;
// var netAmount = units*unitCharge;
// var lateCharge = 250;
// var amountLate = netAmount + lateCharge ;
// document.write("<h1>" + "K-Electric Bill" + "</h1>" + "<br />" ); 
// document.write("Customer Name : " + userName + "<br />"); 
// document.write("Month : " + month + "<br />"); 
// document.write("Number of units : " + units + "<br />"); 
// document.write("Charge per unit : " + unitCharge + "<br />"); 
// document.write("Net Amount Payable (within due date) : " + netAmount + "<br />"); 
// document.write("Late payment surcharge : " + lateCharge + "<br />"); 
// document.write("Gross Amount Payable ( after due date ) : " + amountLate); 




// Chapter 35 to 38

// task1
// function date(){
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// date();

// task2
// function greet(){
//     var firstName = prompt("Enter your first name ");
//     var lastName = prompt("Enter your last name ");
//     var fullName = firstName + lastName;
//     alert(fullName + " ! How are you.")
// }
// greet();

// task3
// function sum(){
//     var a = +prompt("Enter first number");
//     var b = +prompt("Enter last number");
//     var c = a+ b;
//     return c;
// }
// var sum1 = sum();
// alert("The sum of a & b is : " + sum1);

// task5
// function square(num){
//     var a = num**2;
//     alert("The square of given no. is : " + a);
// }
// square(3);

// task6


// task7
// function counting(){
//     var startNum = +prompt("Enter start no.");
//     var endNum = +prompt("Enter end no.");
//     for(i=startNum ; i<=endNum ; i++){
//         document.write(i + "<br />");
//     }
// }
// counting();

// task8
// function hypotenuse(){
//     function square(){
//         var base = +prompt("Enter the base of right angle triangle");
//         var perp = +prompt("Enter the perpendicular of right angle triangle");
//         var hyp = base**2 + perp**2;
//         alert(hyp**0.5);
//     }
//     square();
// }
// hypotenuse();


















