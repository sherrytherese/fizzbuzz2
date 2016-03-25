$(document).ready(function() {

	var numberPrompt = prompt("Please enter a number to count to","");
	var endNumber = parseInt(numberPrompt);

	var listitems ="";
	var count;
	for (count = 1; count < endNumber; count++) {
		//listitems += "<li>";
		if((count % 3 === 0) && (count % 5 === 0)) {
			listitems += "<li>fizzbuzz</li>";
			console.log(count);
		}
		else if (count % 3 === 0) {
			listitems += "<li>fizz</li>";
			console.log(count);
		}
		else if (count % 5 === 0) {
			listitems += "<li>buzz</li>";
			console.log(count);	
		}
		else {
			listitems += "<li>"+count+"</li>";
		}
		//listitems += "</li>";
	}
	$('#list').html(listitems);
	//list.innerHTML +=listitems;
})

