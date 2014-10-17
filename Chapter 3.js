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

