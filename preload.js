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
    title: "Stopped trackig your posture.",
    message: "See results for your improvement."
  });
}

function correctpos() {
  nodifier.notify({
    title: "Bad posture",
    message: "Keep your back straight",
    sound: true
  });
}
function filesystem(filename, data) {
  fs.writeFile(filename, data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Saved");
    }
  });
}

window.startnotify = startnotify;
window.endnotify = endnotify;
window.savefile = filesystem;
window.correctpos = correctpos;
