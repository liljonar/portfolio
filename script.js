
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle-checkbox');

// 1. Load saved theme or default to light
const saved = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', saved);
toggle.checked = saved === 'dark';

// 2. Listen to toggle changes
toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// 3. Smooth scroll
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// 4. Basic form validation
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  if (![...form.elements]
      .filter(el => el.required)
      .every(el => el.value.trim())) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});
