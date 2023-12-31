const myHeading = document.createElement("h2");
let intervalId;
let isHeadingAppended = false;

function startTime() {
  if (!isHeadingAppended) {
    document.body.appendChild(myHeading);
    isHeadingAppended = true;
  }

  intervalId = setInterval(updateTime, 1000);
}

function stopTime() {
  clearInterval(intervalId);

  // Remove the heading element from the body when stopping the timer
  if (document.body.contains(myHeading)) {
    document.body.removeChild(myHeading);
    isHeadingAppended = false;
  }
}

const startButton = document.createElement("button");
startButton.innerText = "start";
document.body.appendChild(startButton);
startButton.addEventListener("click", startTime);

const stopButton = document.createElement("button");
stopButton.innerText = "stop";
document.body.appendChild(stopButton);
stopButton.addEventListener("click", stopTime);

const updateTime = function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `${hours < 10 ? "0" + hours : hours} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds < 10 ? "0" + seconds : seconds}`;
  myHeading.innerText = time;
};
