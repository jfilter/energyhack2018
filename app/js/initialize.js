import someFunction from './someFile';

document.addEventListener('DOMContentLoaded', () => {
  console.log('initialized');
  let i = 0;
  setInterval(() => {
    const xx = i++ % 360;
    console.log(xx);
    someFunction(xx);
  }, 10000);
});
