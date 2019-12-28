let read=require("readline-sync");
let email=read.question("Enter the email :");

let emailRegex=RegExp("^[a-zA-Z0-9]([._+]{0,1}[a-zA-Z0-9])*[@]{1}bridgelabz[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2}){0,1}$");
let result=emailRegex.test(email);

if(result){
	console.log("Valid email");
}else{
	console.log("Invalid email");
}
