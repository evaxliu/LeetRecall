chrome.runtime.onInstalled.addListener(()=>{console.log("Chrome extension installed")});chrome.action.onClicked.addListener(e=>{console.log("Extension icon clicked",e)});
