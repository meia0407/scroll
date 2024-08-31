document.getElementById("upButton").addEventListener("click", () => {

	chrome.tabs.sendMessage(Number(tab_id), {method: "up"})
		// この続きを書いてね。
		// manifest.json への追加も忘れずに。
})
