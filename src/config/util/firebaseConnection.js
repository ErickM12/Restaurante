import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC7Ee4KPxi99Vjyt5-K_MxupJhScf4nMfc",
  authDomain: "restauranteb-40cb1.firebaseapp.com",
  projectId: "restauranteb-40cb1",
  storageBucket: "restauranteb-40cb1.appspot.com",
  messagingSenderId: "446154473336",
  appId: "1:446154473336:web:14bbab41c9276b2ba5928d",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
