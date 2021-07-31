const menu = document.querySelector('.menu');

menu.addEventListener('click', _ => {
  const target = document.querySelectorAll('.target');

  target.forEach(item => {
    item.classList.toggle('change');
  });
});

const icons = document.querySelectorAll('.section-1-icons i');
//let i = 1;
setInterval(() => {
  //i++;
  const icon = document.querySelector('.section-1-icons i.change');

  icon.classList.remove('change');

  //   if (i > icons.length) {
  //     icons[0].classList.add('change');
  //     i = 1;
  //   } else {
  //     icon.nextElementSibling.classList.add('change');
  //   }

  if (icon.nextElementSibling == null) {
    icon.parentElement.firstElementChild.classList.add('change');
    return;
  }

  icon.nextElementSibling.classList.add('change');
}, 4000);
