function scrollUp() {
	window.scrollBy(0, -1);
}

function scrollDown(){
	window.scrollBy(0, 1);
}


chrome.runtime.onMessage.addListener(function(request) {
	// この続きを書く

})

chrome.tabs.query({active:true, lastFocusedWindow:true, currentWindow:true})
