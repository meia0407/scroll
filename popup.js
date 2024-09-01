function setSpeed() {
	var speed = document.getElementById("inputNumber").value;

	if (speed.match(/[0-9]{1,2}+/g) != speed) {
		speed = "1";
	}

	return speed;
}

function setID() {
	// ここを書く
}


document.getElementById("upButton").onclick = function() {
	// この続きを書く
	chrome.tabs.sendMessage(Number(tab_id), {method: "up"})
}
