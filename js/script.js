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


function getAuthDate(seconds) {
  const milliseconds = seconds * 1000;  // js работает с миллисекундами
  const date = new Date(milliseconds);
  const day = date.getDate().toString().padStart(2, '0');
  const month = monthNamesRU[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day} ${month} ${year} ${hours}:${minutes}`;
}


const userInfo = document.querySelector('.user-info');
userInfo.innerHTML = `
  <ul>
    <li>
      <span>auth_date:</span>
      <span>${getAuthDate(tg.initDataUnsafe.auth_date)}</span>
    </li>
    <li>
      <span>id:</span>
      <span>${tg.initDataUnsafe.user.id}</span>
    </li>
    <li>
      <span>first_name:</span>
      <span>${tg.initDataUnsafe.user.first_name}</span>
    </li>
    <li>
      <span>username:</span>
      <span>${tg.initDataUnsafe.user.username}</span>
    </li>
  </ul>
`;

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());
  tg.sendData(JSON.stringify(entries));
});
