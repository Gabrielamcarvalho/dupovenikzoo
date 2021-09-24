const navItems = document.querySelectorAll('.nav-item');
const animalsArticles = document.querySelectorAll('.animal');

navItems.forEach((e) =>
  e.addEventListener('click', (event) => {
    // event.preventDefault();
    navItems.forEach((item) => item.classList.remove('active'));

    e.classList.toggle('active');
    // console.log(e.classList.);
  })
);

window.addEventListener('scroll', (event) => {
  //   event.preventDefault();
  let current = '';

  animalsArticles.forEach((article) => {
    const articleTop = article.offsetTop;
    const articleHeight = article.clientHeight;

    if (scrollY >= articleTop - articleHeight / 2) {
      current = article.getAttribute('id');
    }
  });
  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.classList.contains(current)) {
      item.classList.add('active');
    }
  });
});
