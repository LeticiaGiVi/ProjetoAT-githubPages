
const firebaseConfig = {
  apiKey: "AIzaSyAWOQ3DmHU1-F9ts6oe-kJEm5bdHvGybs8",
  authDomain: "projeto2mibteste-e0eb2.firebaseapp.com",
  projectId: "projeto2mibteste-e0eb2",
  storageBucket: "projeto2mibteste-e0eb2.appspot.com",
  messagingSenderId: "207584217469",
  appId: "1:207584217469:web:00e2e091e7d8a9da0e2414"
};

const app = initializeApp(firebaseConfig);

  const emailField = document.getElementById('email-login');
  const passwordField = document.getElementById('password-login');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', () => {
   const email = emailField.value;
   const password = passwordField.value;
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
   // Usuário logado com sucesso
   const user = userCredential.user;
   console.log('Usuário logado:', user);
   })
   .catch((error) => {
   // Tratar erros de autenticação
   const errorMessage = error.message;
   console.error('Erro de autenticação:', errorMessage);
   });
  });