import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const area = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

valueLocalStorage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(dataFormStorage, 500));

function dataFormStorage(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: input.value, message: area.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function valueLocalStorage() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const parseStorage = JSON.parse(saveMessage);
  if (parseStorage) {
    input.value = parseStorage.email;
    area.value = parseStorage.message;
  }
}
