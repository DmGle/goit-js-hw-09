import Notiflix from 'notiflix';
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

let selectedDate;
let countdownInterval;

document.querySelector('[data-start]').addEventListener('click', startTimer);

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = new Date(selectedDates[0]);

    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future'); 
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
});

function startTimer() {
  function updateTimer() {
    const currentDate = new Date();
    const timeDiff = selectedDate - currentDate;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      updateField('[data-days]', '00');
      updateField('[data-hours]', '00');
      updateField('[data-minutes]', '00');
      updateField('[data-seconds]', '00');
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDiff);
      updateField('[data-days]', addLeadingZero(days));
      updateField('[data-hours]', addLeadingZero(hours));
      updateField('[data-minutes]', addLeadingZero(minutes));
      updateField('[data-seconds]', addLeadingZero(seconds));
    }
  }

  function updateField(selector, value) {
    const element = document.querySelector(selector);
    element.textContent = value;
  }

  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
