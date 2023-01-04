const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
  const input = e.currentTarget[0].value;
  const textarea = e.currentTarget[1].value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: input, message: textarea })
  );
});
// form.addEventListener('submit', onFormsubmit);
// function onFormsubmit(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   if (email === '' || password === '') {
//     alert('Всі поля повинні бути заповнені!!!');
//   } else {
//     const formData = {
//       email,
//       password,
//     };
//     console.log(formData);
//     form.reset();
//   }
// }

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
