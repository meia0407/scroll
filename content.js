var pace = 1;
var state = "stop";

function scrollUp(pace) {
	window.scrollBy(0, -1 * pace);
}

function scrollDown(pace){
	window.scrollBy(0, pace);
}


chrome.runtime.onMessage.addListener(function(request) {
	speed = request.speed;
	
	if (request.method == "upButton") {

	} else if (request.method == "downButton") {

	} else if (request.method == "stopButton") {

	}

})
