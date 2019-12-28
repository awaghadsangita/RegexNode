let read=require("readline-sync");
let pincode=read.question("Enter the Pincode :");
let pincodeRegex1=RegExp('^[0-9]{6}$')
let pincodeRegex2=RegExp('^[0-9]{3}[ ]{1}[0-9]{3}');

if(pincodeRegex1.test(pincode)|| pincodeRegex2.test(pincode)){
	console.log("valid pincode")
}else{
	console.log("invalid pincode")
}

