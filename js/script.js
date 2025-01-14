const tg = window.Telegram.WebApp;

const userPhoto = document.querySelector('.user-photo > img');
userPhoto.setAttribute('src', tg.initDataUnsafe.photo_url);

const userName = document.querySelector('.user-name');
userName.textContent = tg.initDataUnsafe.first_name;
