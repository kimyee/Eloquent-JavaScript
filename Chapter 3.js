//Minimum
function min(x, y){
	if(x < y)
		return x;
	else
		return y;
}
console.log(min(0, 10));
console.log(min(0, -10));

//Recursion
function isEven(n){
	if(n==0)
		return true;
	else if (n==1)
		return false;
	else if (n>1)
		return isEven(n-2)
	else
		return isEven(n+2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean Counting
function countBs(x){
	var counter = 0;
	var x_array = x.split("");
	function logArrayElements(element, index, array){
		// console.log(index + ": " + element );
		if(element == "B"){
			// console.log("true");
			counter+=1;
			// console.log("Number of uppercase Bs: " + counter);

		}else{
			// console.log("false");
		}
	}
	x_array.forEach(logArrayElements);
	console.log("Number of uppercase Bs: " + counter);
}

console.log(countBs("BBC"));

function countChar(x, y){
	var counter = 0;
	var x_array = x.split("");
	function logArrayElements(element, index, array){
		// console.log(index + ": " + element );
		if(element == y){
			// console.log("true");
			counter+=1;
			// console.log("Number of uppercase Bs: " + counter);

		}else{
			// console.log("false");
		}
	}
	x_array.forEach(logArrayElements);
	console.log("Number of " + y + ": " + counter);
}

console.log(countChar("kakkerlak", "k"));