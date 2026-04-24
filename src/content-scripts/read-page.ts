// Source - https://stackoverflow.com/a/19758800
// Posted by gkalpak, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-23, License - CC BY-SA 3.0

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, _sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.documentElement.outerHTML);
    }
});

function getProblemTitle() {
  const titleElement = document.querySelector('a[href^="/problems/"]');

  const title = titleElement?.textContent?.trim() ?? null;

  console.log("LeetCode problem title:", title);

  return title;
}

getProblemTitle();