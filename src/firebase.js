import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAIiMg6yyeRM4HiJXql78TgTyF_lnoxGRQ",
    authDomain: "slack-clone-5f344.firebaseapp.com",
    projectId: "slack-clone-5f344",
    storageBucket: "slack-clone-5f344.appspot.com",
    messagingSenderId: "154215061950",
    appId: "1:154215061950:web:0cf1e4f7969f67aa6e01ef"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider}
  export default db;