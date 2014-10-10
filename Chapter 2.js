// Looping a triangle
var sign = "#";
var counter = 1;
while (counter <=7){
console.log(sign);
sign = sign + "#";
counter++;

}

// FizzBuzz
var counter = 1;
while(counter <=100){
if(counter %3 == 0 && counter %5 == !0) console.log("Fizz");
else if(counter %5 == 0 && counter %3 == !0) console.log("Buzz");
else if (counter %3 == 0 && counter %5 ==0) console.log("FizzBuzz");
else console.log(counter);
counter++;
}

//Chess Board
var hashSpace = ("# ");
var spaceHash = (" #");
var size = 8;
var number = 1;
//need this code if browser does not support .repeat
String.prototype.repeat = function(n) {
    return new Array(1 + (n || 0)).join(this);
}
for (var number = 1; number <= size/2; number++){
console.log(hashSpace.repeat(size));
console.log(spaceHash.repeat(size));
}