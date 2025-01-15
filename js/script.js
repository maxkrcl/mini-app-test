const tg = window.Telegram.WebApp;

const dayNamesRU = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

const monthNamesRU = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

const currentDate = new Date();  // объект даты

const dayTitle = document.querySelector('.day-title');
dayTitle.textContent = dayNamesRU[currentDate.getDay()];

const dayDate = document.querySelector('.day-date');
const day = currentDate.getDate().toString().padStart(2, '0');  // день
const month = monthNamesRU[currentDate.getMonth()];             // месяц
const year = currentDate.getFullYear();                         // год
dayDate.textContent = `${day} ${month} ${year}`;

const userPhoto = document.querySelector('.user-photo > img');
userPhoto.setAttribute('src', tg.initDataUnsafe.user.photo_url);

const userName = document.querySelector('.user-name');
userName.textContent = tg.initDataUnsafe.user.first_name;
