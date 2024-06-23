let RegEx = /^[a-zA-Z0-9]*$/;

document.getElementById("myForm").addEventListener("submit", function(event) {
	let input = document.getElementById("inputField").value;
	if (input == "") {
		alert("No Input Found");
		event.preventDefault();
	} else if (!RegEx.test(input)) {
		alert("Invalid Input");
		event.preventDefault();
	} else {
		alert("Valid Input");
		document.getElementById("myForm").submit();
	}	
});