// Таймер зворотнього відліку для секції "Deals"
// Запускається після завантаження компонента, бо #days, #hours тощо — у deals.html
function initDealsTimer() {
  const daysEl = document.getElementById('days');
  if (!daysEl) return;

  const countDownDate = new Date('March 31, 2026 23:59:59').getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
      return;
    }

    const formatTime = (time) => time < 10 ? `0${time}` : time;

    document.getElementById('days').innerHTML = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
    document.getElementById('hours').innerHTML = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    document.getElementById('minutes').innerHTML = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    document.getElementById('seconds').innerHTML = formatTime(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);
}

document.addEventListener('component:loaded', initDealsTimer);

// Таймер міні-карточки товару (shop page)
const TimerDays = document.getElementById('mc-days');
const TimerHrs = document.getElementById('mc-hours');
const TimerMins = document.getElementById('mc-minutes');
const TimerSecs = document.getElementById('mc-seconds');

if (TimerDays && TimerHrs && TimerMins && TimerSecs) {
  let totalSeconds = (0 * 86400) + (5 * 3600) + (59 * 60) + 47;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;

    const pad = (n) => n < 10 ? '0' + n : n;
    TimerDays.textContent = pad(Math.floor(totalSeconds / 86400));
    TimerHrs.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    TimerMins.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    TimerSecs.textContent = pad(totalSeconds % 60);
  }, 1000);
}
