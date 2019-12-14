// // All of the Node.js APIs are available in the preload process.
// // It has the same sandbox as a Chrome extension.
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })

const electron = require("electron");
const nodifier = require("node-notifier");
const fs = require("fs");

function startnotify() {
  nodifier.notify({
    title: "Camera is on",
    message: "Chrome is using it"
  });
}

function endnotify() {
  nodifier.notify({
    title: "Camera is off",
    message: "Last used by Chrome"
  });
}

window.startnotify = startnotify;
window.endnotify = endnotify;
