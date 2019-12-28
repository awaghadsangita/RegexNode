
function validateEmail(email){
	if(email == "")
		return false;
	if(typeof(email) === 'undefined')
		return false;
	
	let emailRegex=RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
	return emailRegex.test(email);

}

module.exports=validateEmail
