/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Yue Teng");
// var firstname="Yue";
// console.log(firstname);

var email = "tengyue1991@gmail.com";
var newEmail = email.replace("gmail","udacity");

console.log(email);
console.log(newEmail);

name = "Yue Teng";
var formattedName = HTMLheaderName.replace("%data%",name);

// .append() adds something to the tail of HTML
// .prepend() adds something to the beginning of HTML
role = "Data Analytics Engineer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName);

