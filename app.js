const btns = Array.from(document.querySelectorAll('.tab-btn'));
const articles = Array.from(document.querySelectorAll('.content'));
const about = document.querySelector('.about');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class for buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide articles
    articles.forEach((article) => {
      article.classList.remove('active');
      const element = document.getElementById(id);
      element.classList.add('active');
    });
  } else {
    e.preventDefault();
  }
});
