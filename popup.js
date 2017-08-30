var det
chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.id = "details") {
				sendResponse()
				det = request
			}
		}
	)
document.getElementById("month").value = det.month
document.getElementById("day").value = det.day
document.getElementById("year").value = det.year
