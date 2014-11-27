//The sum of a range
function addition(start, end){
	var numList = [];
	var total = 0;
	for(x = 0; x <= 10; x++){
		numList.push(x);
	}
	for(i = 0; i < numList.length; i++){
		total += numList[i];
	}
	console.log(total);
}

addition(0, 10)