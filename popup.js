
document.getElementById('proceedButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url; 
    chrome.tabs.update(tabs[0].id, { url: url });
    window.close();
  });
});
