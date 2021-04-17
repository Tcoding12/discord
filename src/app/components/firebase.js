import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBBftGiCEBOmgHVYSHJbjX-H_YBwWfaBBc",
    authDomain: "discord-clone-81ec2.firebaseapp.com",
    projectId: "discord-clone-81ec2",
    storageBucket: "discord-clone-81ec2.appspot.com",
    messagingSenderId: "679183473197",
    appId: "1:679183473197:web:dc499814203c20badb36a4",
    measurementId: "G-GG6YTTYLV2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()
export { auth, provider}

export default db;