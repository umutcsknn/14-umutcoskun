// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUXNYMuBEDEmSG5n67NivMVTzrb-5J-jE",
  authDomain: "umutcoskun-80a88.firebaseapp.com",
  projectId: "umutcoskun-80a88",
  storageBucket: "umutcoskun-80a88.appspot.com",
  messagingSenderId: "867845407292",
  appId: "1:867845407292:web:63e8fcd9c731fe75d2b939"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});