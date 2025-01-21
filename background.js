chrome.runtime.onInstalled.addListener(() => {
  console.log("Malicious Link Blocker Developed by the Fsociety github@imanotlamo");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.notification) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Malicious Site Blocked",
      message: request.message
    });
  }
});
