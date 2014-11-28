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
	for(var x = start; x <= end; x++){
		numList.push(x);
	}
	for(var i=0; i<10; i=i+step){
		revisedNumList.push(numList[i]);
	}
	console.log(numList);
	console.log(revisedNumList);

}

display(1, 10, 2)
