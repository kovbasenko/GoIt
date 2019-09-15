class CountdownTimer {
  constructor(date) {
    this.selector = "#timer-1";
    this.targetDate = new Date(date);
  }

  startTimer() {
    const refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };

    const time = Date.now() - timer.targetDate.getTime();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;

    const secsInterval = setInterval(() => {
      if (parseInt(refs.secs.textContent) > 0) {
        refs.secs.textContent = parseInt(refs.secs.textContent) - 1;
        return;
      }

      refs.secs.textContent = 59;

      if (parseInt(refs.mins.textContent) > 0) {
        refs.mins.textContent = parseInt(refs.mins.textContent) - 1;
        return;
      }

      refs.mins.textContent = 59;

      if (parseInt(refs.hours.textContent) > 0) {
        refs.hours.textContent = parseInt(refs.hours.textContent) - 1;
        return;
      }

      refs.hours.textContent = 59;

      if (parseInt(refs.days.textContent) > 0) {
        refs.days.textContent = parseInt(refs.days.textContent) - 1;
        return;
      }

      alert("TIMER!!");
      clearInterval(secsInterval);
    }, 1000);
  }
}

const timer = new CountdownTimer("Jul 17, 2019");
timer.startTimer();
