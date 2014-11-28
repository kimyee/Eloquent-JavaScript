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
	}else{
		for(var x = start; x <= end; x++){
			numList.push(x);
		}
		// console.log(numList);

		for(var i = 0; i < end; i = i + step){
			revisedNumList.push(numList[i]);
		}
		console.log(revisedNumList);
	}
}

display(1, 10, 2)
display(5, 2, -1)
