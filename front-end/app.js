const firebaseConfig = {
  apiKey: "AIzaSyDqnAH3hh_RYTeFuHaV-XMJNHmkCJkdNIw",
  authDomain: "todosporum-3094c.firebaseapp.com",
  projectId: "todosporum-3094c",
  storageBucket: "todosporum-3094c.appspot.com",
  messagingSenderId: "355418366079",
  appId: "1:355418366079:web:1c75e1d7507c607608df4a",
};

firebase.initializeApp(firebaseConfig);

function createLogin() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
    console.log('Usuario', user);
    alert('Usuário criado e login feito');
  }).catch(error => {
    console.error('Erro', error);
  });
}

function loginEmail() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    alert('Usuário Logado!');
  }).catch(error => {
    console.error('Error', error);
  });
}

var currentUser = firebase.auth().currentUser;

function deleteUser() {
  if (currentUser) {
    currentUser.delete().then(() => {
      alert('Usuário deletado');
    });
  }
}
