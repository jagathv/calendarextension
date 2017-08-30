//content.js
var chrono = require('chrono-node')
//getHighlightedText() code from user Tim Down on StackOverflow - https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
function getHighlightedText() {
	  var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

dateArray = []

function parseText(text) {
	processedText = nlp(text).dates().data()
	//for ()
	Details.day = processedText.date
	Details.month = processedText.month
	Details.year = processedText.year
}


//for ()
var Details 
Details.id = "details"



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //selected = getHighlightedText()

      rawtext = getHighlightedText()

      parseText(rawtext)
      chrome.runtime.sendMessage(Details, function(response) {
        console.log("Details sent to popup.js")
      })    
    }
  }
);