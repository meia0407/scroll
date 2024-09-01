

chrome.runtime.onMessage.addListener(function(request) {
	// この続きを書いてね。
})







function scrollUp() {
	window.scrollBy(0, -1);
}

function scrollDown(){
	window.scrollBy(0, 1);
}

document.getElementById("upButton").addEventListener("click", () => {
	chrome.tabs.query({active:true, lastFocusedWindow:true, currentWindow:true,})

})

document.getElementById("downButton").addEventListener("click", () =>{
	var speed
})

document.getElementById("upButton").addEventListener("click", () => {
	chrome.tabs.query({active:true, lastFocusedWindow:true, currentWindow:true,})

})

