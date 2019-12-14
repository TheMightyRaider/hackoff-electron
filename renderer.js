// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const start = document.querySelector("button.start");
let video = document.querySelector(".camera");

let isShowing = false;

start.addEventListener("click", () => {
  if (isShowing == false) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
        video.hidden = false;
        start.textContent = "Disable Camera";
        isShowing = true;
        // Notification.requestPermission().then(result => {
        const notification = new Notification("Camera is Running", {
          body: "Chrome is accessing it!"
        });
        notification.onclick = () => {
          console.log("Notification clicked");
        };
        console.log("notified", notification);
        // });
      });
    }
  } else {
    start.textContent = "Enable Camera";
    video.pause();
    video.hidden = true;
    isShowing = false;
  }
});
