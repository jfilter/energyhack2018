import someFunction from './someFile';

document.addEventListener('DOMContentLoaded', () => {
  console.log('initialized');
  let i = 0;
  someFunction(i++);
  setInterval(() => {
    const xx = i++ % 360;
    someFunction(xx);
  }, 10000);
});
