const tg = window.Telegram.WebApp;

const userPhoto = document.querySelector('.user-photo > img');
userPhoto.setAttribute('src', tg.initDataUnsafe.user.photo_url);

const userName = document.querySelector('.user-name');
userName.textContent = tg.initDataUnsafe.user.first_name;
