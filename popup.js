document.querySelector(".play").addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "play",
    play: { source: "https://streaming.live365.com/a18155", volume: 1 },
  });
});

document.querySelector(".pause").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "pause" });
});
