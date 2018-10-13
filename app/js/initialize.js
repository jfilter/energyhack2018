import someFunction from './someFile';

let int = null;
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('initialized');
  someFunction(i++);
  int = setInterval(() => {
    const xx = i++ % 360;
    someFunction(xx);
  }, 10000);
});
