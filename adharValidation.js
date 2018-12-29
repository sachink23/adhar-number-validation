// multiplication table d
	var d=[
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 0, 6, 7, 8, 9, 5], 
		[2, 3, 4, 0, 1, 7, 8, 9, 5, 6], 
		[3, 4, 0, 1, 2, 8, 9, 5, 6, 7], 
		[4, 0, 1, 2, 3, 9, 5, 6, 7, 8], 
		[5, 9, 8, 7, 6, 0, 4, 3, 2, 1], 
		[6, 5, 9, 8, 7, 1, 0, 4, 3, 2], 
		[7, 6, 5, 9, 8, 2, 1, 0, 4, 3], 
		[8, 7, 6, 5, 9, 3, 2, 1, 0, 4], 
		[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
	];
	// permutation table p
	var p=[
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
		[1, 5, 7, 6, 2, 8, 3, 0, 9, 4], 
		[5, 8, 0, 3, 7, 9, 6, 1, 4, 2], 
		[8, 9, 1, 6, 0, 4, 3, 5, 2, 7], 
		[9, 4, 5, 3, 1, 2, 6, 8, 7, 0], 
		[4, 2, 8, 6, 5, 7, 3, 9, 0, 1], 
		[2, 7, 9, 3, 8, 0, 6, 4, 1, 5], 
		[7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
	];
	// inverse table inv
	var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
	// converts string or number to an array and inverts it
	function invArray(array){
		
		if (Object.prototype.toString.call(array) == "[object Number]"){
			array = String(array);
		}
		
		if (Object.prototype.toString.call(array) == "[object String]"){
			array = array.split("").map(Number);
		}
		
		return array.reverse();
		
	}
	// generates checksum
	function generate(array){
			
		var c = 0;
		var invertedArray = invArray(array);
		
		for (var i = 0; i < invertedArray.length; i++){
			c = d[c][p[((i + 1) % 8)][invertedArray[i]]];
		}
		
		return inv[c];
	}
	// validates checksum
	function validate(array) {
		var c = 0;
		var invertedArray = invArray(array);
		
		for (var i = 0; i < invertedArray.length; i++){
			c=d[c][p[(i % 8)][invertedArray[i]]];
		}
		return (c === 0);
	}
	
	function validate_adhar(array) {
		console.clear();
		var adhar2 = document.getElementById("adhar_input").value;
		if (adhar2 >= 100000000000 && adhar2 <= 999999999999) {
			if(validate(array) == false) {
				document.getElementById("adhar_input").style.background = "#ff8282";
				document.getElementById("text").innerHTML = "Invalid Adhar Number.";
				console.log(false);
				return false;
			}
			else {
				document.getElementById("adhar_input").style.background = "lightgreen";
				document.getElementById("text").innerHTML = "Valid Adhar Number.";
				console.log(true);
				return true;
			}
		}
		else {
			document.getElementById("adhar_input").style.background = "#ff8282";
			document.getElementById("text").innerHTML = "Adhar Number should be 12 Digits.";
			console.log(false);
			return false;
		}
	}
	
	function predict_digit() {
		console.clear();
		var adhar3 = document.getElementById("adhar_input2").value;
			if (adhar3 >= 10000000000 && adhar3 <= 99999999999) {	
				adhar3 = adhar3 * 10;
			
				for(var i=1; i<11; i++) {
						
						if (validate(adhar3) == true) {
							document.getElementById("text2").innerHTML = adhar3;
							console.log(adhar3);
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			else if (adhar3 >= 1000000000 && adhar3 <= 9999999999) {
				adhar3 = adhar3 * 100;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<101; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			else if (adhar3 >= 100000000 && adhar3 <= 999999999) {
				adhar3 = adhar3 * 1000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<1001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			else if (adhar3 >= 10000000 && adhar3 <= 99999999) {
				adhar3 = adhar3 * 10000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<10001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			
			else if (adhar3 >= 1000000 && adhar3 <= 9999999) {
				adhar3 = adhar3 * 10000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<10001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			else if (adhar3 >= 100000 && adhar3 <= 999999) {
				adhar3 = adhar3 * 100000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<100001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			else if (adhar3 >= 10000 && adhar3 <= 99999) {
				adhar3 = adhar3 * 1000000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<1000001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			
			else if (adhar3 >= 1000 && adhar3 <= 9999) {
				adhar3 = adhar3 * 10000000;
				var adhar = "000000000000";
				var j=1;
				var print_area = document.getElementById("print_area");
				for(var i=1; i<10000001; i++) {
						
						if (validate(adhar3) == true) {
							adhar[j] = adhar3;
							console.log(adhar3);
							j++;
						}
						adhar3 = adhar3 + 1;
				}
				console.log(true);
				return true;
			}
			
			
			
		
			else {
				console.error("Invalid Input");
				console.log(false);
				return false;
			}
		}
