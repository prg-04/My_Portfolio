const toggle = document.querySelector('.toggle');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.link');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navlinks.classList.toggle('open');
});

links.forEach((link) => {

  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    navlinks.classList.remove('open');
  });
});

