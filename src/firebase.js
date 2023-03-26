import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBa2HxxEpJBqgQOJ_Q3IosDIc4oyKtuMb8",
  authDomain: "todo-list-59e0f.firebaseapp.com",
  databaseURL: "https://todo-list-59e0f-default-rtdb.firebaseio.com",
  projectId: "todo-list-59e0f",
  storageBucket: "todo-list-59e0f.appspot.com",
  messagingSenderId: "359262682062",
  appId: "1:359262682062:web:466ac720c35ec61a7ec99f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();