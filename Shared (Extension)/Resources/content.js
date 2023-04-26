browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

setInterval(function() {
	const children = document.querySelector('#bottom-sheet-sensor').parentElement.children
	for (const child of children) {
		if (child.hasAttribute('style')) {
			child.remove()
		}
	}
}, 1000);
