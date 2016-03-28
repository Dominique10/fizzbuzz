$(document).ready(function(){

	/*User enter value on page load*/
	var maxNumber=prompt("Please enter number for FizzBuzz");
	var num1 = parseInt(maxNumber);
	checkingValue(num1);

	/*Input validation*/
	function checkingValue(parameter2){
		if (isNaN(parameter2)) {
			maxNumber=prompt("Please enter valid number for FizzBuzz. No String Values");
			num1  = parseInt(maxNumber);
			checkingValue(num1);
			
		} else if ((maxNumber % 1) !=0) {
			maxNumber=prompt("Please enter valid number for FizzBuzz. No Decimals");
			num1  = parseInt(maxNumber);
			checkingValue(num1);
		}
		else{
			substitute(num1);
		}
	}
/*Function that does all the work for FizzBuzz*/
	function substitute(parameter1){
		var number =1;
		var FizzBuzz;
		while(number <= parameter1){
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
		}	
});