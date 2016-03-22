$(document).ready(function(){
	/*Create var to hold counting value*/
	var number =1;
	var FizzBuzz;
	/*While number is less than loop*/
	while(number <= 100){
		FizzBuzz = "na";
		if(number%3==0 && number%5==0){
			console.log("FizzBuzz");
			FizzBuzz = "FizzBuzz";
			// $("#display-number").text("FizzBuzz");
		}
		else if (number%3==0 ) {
			console.log("Fizz");
			FizzBuzz = "Fizz";
			// $("#display-number").text("Fizz");
		}
		else if (number%5==0 ) {
			console.log("Buzz");
			FizzBuzz = "Buzz";
			// $("#display-number").text("Buzz");
		}
		else{
		console.log(number);
		// $("#display-number").text(number);
	}
	/*Checking the var FizzBuzz to append the correct term to the list*/
	if (FizzBuzz=="FizzBuzz" || FizzBuzz == "Fizz" || FizzBuzz == "Buzz") {
		$("ul").append("<li>" + FizzBuzz + "</li>");
	}
	/*The FizzBuzz var was not changed so the number will print*/
	else{
		$("ul").append("<li>" + number + "</li>");
	}

		number++;
	}
});