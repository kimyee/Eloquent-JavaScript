//The sum of a range
function addition(start, end){
	var numList = [];
	var total = 0;
	for(var x = start; x <= end; x++){
		numList.push(x);
	}
	for(var i = 0; i < numList.length; i++){
		total += numList[i];
	}
	console.log(total);
	console.log("--------------------------------------");
}

addition(0, 10)


//The sum of a range -- bonus
function display(start, end, step){
	var numList = [];
	var i = 0;
	var revisedNumList = [];
	if(end < start){
		for(var x = start; x >= end; x--){
			numList.push(x);
		}
		console.log(numList);
		console.log("--------------------------------------");
	}else{
		for(var x = start; x <= end; x++){
			numList.push(x);
		}
		// console.log(numList);

		for(var i = 0; i < end; i = i + step){
			revisedNumList.push(numList[i]);
		}
		console.log(revisedNumList);
		console.log("--------------------------------------");
	}
}

display(1, 10, 2)
display(5, 2, -1)


//Reversing an array using a new array
function reverseArray(array){
	var newArray = [];
	// console.log(array);
	for(var maxIndex = array.length-1; maxIndex > -1; maxIndex--){
		newArray.push(array[maxIndex]);
	}
	console.log(newArray);
	console.log("--------------------------------------");
}
reverseArray(["A", "B", "C"])

//Reversing an array without using a new array
var arrayValue = [1, 2, 3, 4, 5];
for(i = 1; i < arrayValue.length; i++){
	// console.log(arrayValue);
	arrayValue.unshift(arrayValue[i]);
	arrayValue.splice(i+1, 1);
}
console.log(arrayValue);


