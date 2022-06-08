// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBoLmG4P__3H9kxDPV2TRLAG15brpvtQ_0',
	authDomain: 'sellphone-db29b.firebaseapp.com',
	projectId: 'sellphone-db29b',
	storageBucket: 'sellphone-db29b.appspot.com',
	messagingSenderId: '889277732663',
	appId: '1:889277732663:web:20ff5e24314695fc8c6cb2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage };
