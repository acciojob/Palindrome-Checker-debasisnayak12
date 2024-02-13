// complete the given function

function palindrome(str){
    let split = str.split("");
	let rev = split.reverse();
	if(str.toLowerCase() == rev.toLowerCase()){
		return true;
	}
	return false;
}
module.exports = palindrome
