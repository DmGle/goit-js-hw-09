import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('.form');

  formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstDelay = parseInt(this.elements.delay.value, 10);
    const step = parseInt(this.elements.step.value, 10);
    const amount = parseInt(this.elements.amount.value, 10);

    for (let i = 1; i <= amount; i++) {
      const currentDelay = firstDelay + (i - 1) * step;

      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });
});