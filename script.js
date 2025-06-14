// script.js

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', function () {
      alert(`You clicked on ${btn.textContent}`);
    });
  });
});
