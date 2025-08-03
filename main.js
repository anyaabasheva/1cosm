// Переключение вкладок в разделе "Курсы"

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Удалить активный класс со всех вкладок и контента
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Добавить активный класс к текущей вкладке и соответствующему контенту
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(`tab-${tabId}`).classList.add('active');
  });
});

// Плавная прокрутка по якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Проверка формы перед отправкой
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    if (!name || !email) {
      e.preventDefault();
      alert('Пожалуйста, заполните все поля.');
    }
  });
}