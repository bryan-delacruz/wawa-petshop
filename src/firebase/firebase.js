import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBi9GeK5htTOQmrkKuGerTD7tTKnjUDqCM",
        authDomain: "wawa-petshop.firebaseapp.com",
        projectId: "wawa-petshop",
        storageBucket: "wawa-petshop.appspot.com",
        messagingSenderId: "1043234500545",
        appId: "1:1043234500545:web:80a39c130253c873704940"
    }
)

export const getFirebase=()=>app;
export const getFirestore=()=>firebase.firestore(app);
