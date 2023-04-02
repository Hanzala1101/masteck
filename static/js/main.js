document.addEventListener("DOMContentLoaded", () => {
//   let hr = "0" + 0,
   let min = "0" + 0,
    sec = "0" + 0,
    ms = "0" + 0,
    startTimer;

  const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");
  const wave1 = document.querySelector(".box1"),
    wave2 = document.querySelector(".box2"),
    wave3 = document.querySelector(".box3"),
    wave4 = document.querySelector(".box4"),
    wave5 = document.querySelector(".box5");
    

  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
  resetBtn.addEventListener("click", reset);

  function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
    wave1.classList.add("animated");
    wave2.classList.add("animated");
    wave3.classList.add("animated");
    wave4.classList.add("animated");
    wave5.classList.add("animated");

    startTimer = setInterval(() => {
      ms++;

      ms = ms < 10 ? "0" + ms : ms;

      if (ms == 100) {
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }

      if (sec == 60) {
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }

    //   if (min == 60) {
    //     hr++;
    //     hr = hr < 10 ? "0" + hr : hr;
    //     min = "0" + 0;
    //   }

      putValue();
    }, 10);
  }

  function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    wave1.classList.remove("animated");
    wave2.classList.remove("animated");
    wave3.classList.remove("animated");
    wave4.classList.remove("animated");
    wave5.classList.remove("animated");

    clearInterval(startTimer);
  }

  function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    wave1.classList.remove("animated");
    wave2.classList.remove("animated");
    wave3.classList.remove("animated");
    wave4.classList.remove("animated");
    wave5.classList.remove("animated");

    clearInterval(startTimer);
    // hr = min = sec = ms = "0" + 0;
    min = sec = ms = "0" + 0;

    putValue();
  }

  function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    // document.querySelector(".hour").innerText = hr;
  }
});
