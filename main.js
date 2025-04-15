function CheckMonth() {
	var inputMonth = document.getElementById('month').value;	

	switch (parseInt(inputMonth)) {
		case 1: 
			document.getElementById("result").innerHTML = "January";
			break;  
		case 2: 
			document.getElementById("result").innerHTML = "February";
			break; 
		case 3: 
			document.getElementById("result").innerHTML = "March";
			break; 
		case 4: 
			document.getElementById("result").innerHTML = "April";
			break; 
		case 5: 
			document.getElementById("result").innerHTML = "May";
			break; 
		case 6: 
			document.getElementById("result").innerHTML = "June";
			break;  
		case 7: 
			document.getElementById("result").innerHTML = "July";
			break; 
		case 8: 
			document.getElementById("result").innerHTML = "August";
			break; 
		case 9: 
			document.getElementById("result").innerHTML = "September";
			break; 
		case 10: 
			document.getElementById("result").innerHTML = "October";
			break; 
		case 11: 
			document.getElementById("result").innerHTML = "November";
			break; 
		case 12: 
			document.getElementById("result").innerHTML = "December";
			break; 
		default:
			document.getElementById("result").innerHTML = "Invalid month. Please input a number from 1-12";

		} 
	}

// 12-2 Winter; 3-5 Spring; 6-8 Summer; 9-11 Autumun

function CheckSeason() {
	var inputMonth = document.getElementById('month').value;	

	switch (parseInt(inputMonth)) {
		case 12: 
		case 1: 
		case 2: 
			document.getElementById("result").innerHTML = "Winter";
			break; 
		case 3: 
		case 4: 
		case 5: 
			document.getElementById("result").innerHTML = "Spring";
			break;  
		case 6: 
		case 7: 
		case 8: 
			document.getElementById("result").innerHTML = "Summer";
			break; 
		case 9: 
		case 10: 
		case 11: 
			document.getElementById("result").innerHTML = "Autumn";
			break; 
		default:
			document.getElementById("result").innerHTML = "Invalid season. Please input a number from 1-12";

		} 
	}	
 

						
