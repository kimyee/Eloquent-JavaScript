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

//Reversing an array
function reverseArrayInPlace(arrayValue){
	var newArray = [];
	// console.log(array);
	for(var maxIndex = arrayValue.length-1; maxIndex > -1; maxIndex--){
		newArray.push(arrayValue[maxIndex]);
	}
	console.log(newArray);
	console.log("--------------------------------------");

}

reverseArrayInPlace(["A", "B", "C"])

function reverseArray(array){
	var popValue = array.pop();
	console.log(array);
	console.log(popValue);
	array.unshift(popValue);
	console.log(array);




}
reverseArray(["A", "B", "C"])

