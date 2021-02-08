//Validtion Code For Inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['pass'];

username.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (username.value.length < 7) {
		username.style.border = "1px solid red";
		username.focus();
		return false;
	}
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		password.focus();
		return false;
	}

}
function user_Verify(){
	if (username.value.length >= 6) {
		username.style.border = "1px solid silver";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 4) {
		password.style.border = "1px solid silver";
		return true;
	}
}

