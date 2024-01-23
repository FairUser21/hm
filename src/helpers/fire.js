import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1M7-A5X-8oRxmOID5bzINJNDjTqmRyjE",
  authDomain: "hmproject-c54a0.firebaseapp.com",
  projectId: "hmproject-c54a0",
  storageBucket: "hmproject-c54a0.appspot.com",
  messagingSenderId: "741337083272",
  appId: "1:741337083272:web:48fe20b72455bd3bd1de3d",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
