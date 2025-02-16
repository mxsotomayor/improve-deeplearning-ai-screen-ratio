// nothing fancy here, just a simple script to make the video element responsive
let videoWrapper  = document.querySelector("[data-media-provider]"), videoEl =  videoWrapper.querySelector("video");
videoEl.style.objectFit = "contain";
videoEl.style.width = "100%";
videoEl.style.height = "100%";

// keep learning ai