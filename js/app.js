$(document).ready(function() {
	var listitems ="";
	var count;
	for (count = 1; count < 101; count++) {
		listitems += "<li>";
		if((count % 3 === 0) && (count % 5 === 0)) {
			listitems += "fizzbuzz";
			console.log(count);
		}
		else if (count % 3 === 0) {
			listitems += "fizz";
			console.log(count);
		}
		else if (count % 5 === 0) {
			listitems += "buzz";
			console.log(count);	
		}
		else {
			listitems += count;
		}
		listitems += "</li>";
	}
	list.innerHTML +=listitems;
})