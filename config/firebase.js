import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

// add your app on firebase, copy firebaseConfig here, enable email/password auth
const firebaseConfig = {
  apiKey: "AIzaSyDc0_bhNDfkiXZrjbwoGdvMKUPb-WLIpxA",
  authDomain: "murshid-f076f.firebaseapp.com",
  projectId: "murshid-f076f",
  storageBucket: "murshid-f076f.appspot.com",
  messagingSenderId: "466056794636",
  appId: "1:466056794636:web:b64d968b931a376d83d429",
  measurementId: "G-YKK74Q307S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});