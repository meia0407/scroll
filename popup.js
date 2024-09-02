function setSpeed() {
	var speed = document.getElementById("inputNumber").value;

	if (speed.match(/[0-9]{1,2}+/g) != speed) {
		speed = "1";
	}

	return speed;
}

function setID() {
	const tab_id = chrome.tabs.query(
		{
			active:true,
			lastFocusedWindow:true, 
			currentWindow:true
		}
	);

	return Number(tab_id);
}


document.getElementById("upButton").onclick = function() {
	const speed = setSpeed();
	chrome.tabs.sendMessage(tab_id, {"method": speed});

	const tab_id = setID();
	chrome.tabs.sendMessage(tab_id, {"method": "up"});
}

document.getElementById("downButton").onclick = function() {
	const speed = setSpeed();
	chrome.tabs.sendMessage(tab_id, {"method": speed});

	const tab_id = setID();
	chrome.tabs.sendMessage(tab_id, {"method": "down"});
}

document.getElementById("stopButton").onclick = function() {
	const tab_id = setID();
	chrome.tabs.sendMessage(tab_id, {"method": "stop"});
}
