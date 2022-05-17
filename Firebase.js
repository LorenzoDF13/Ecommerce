// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnHLP1vQ9xXy2bJOZ0X-7I3Ugzelpc3hE',
  authDomain: 'ecommerce-405cb.firebaseapp.com',
  projectId: 'ecommerce-405cb',
  storageBucket: 'ecommerce-405cb.appspot.com',
  messagingSenderId: '616867899093',
  appId: '1:616867899093:web:d800aa49c9b34478b3645c',
};

// Initialize Firebase
if (!getApps().length) initializeApp(firebaseConfig);
export const auth = getAuth();
