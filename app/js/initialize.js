import someFunction from './someFile';

let int = null;
// let i = 0;
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('initialized');

  const spl = window.location.href.split('/');
  const value = spl[spl.length - 1];
  console.log(value);
  var isNumber = value.match(/^[0-9]+$/);
  if (isNumber) {
    i = parseInt(value);
  }
  console.log(i);
  doFun(i++);
  int = setInterval(() => {
    const xx = i++ % 360;
    doFun(xx);
  }, 10000);
});

function doFun(i) {
  var o1 = document.querySelector('#o1').checked;
  var o2 = document.querySelector('#o2').checked;
  var o3 = document.querySelector('#o3').checked;
  var o4 = document.querySelector('#o4').checked;
  console.log(o1, o2, o3);
  someFunction(i, !o1, !o2, !o3, !o4);
}
