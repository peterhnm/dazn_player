browser.contextMenus.create({
  id: "toggle-media-player",
  title: "DAZN: Toggle Media Player"
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "toggle-media-player") {
    browser.tabs.executeScript({
      file: "media-player.js"
    });
  }
});