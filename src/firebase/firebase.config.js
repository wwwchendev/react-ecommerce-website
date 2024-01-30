/* eslint-disable no-undef */
// 載入firebase核心
import { initializeApp } from 'firebase/app';


// 您的網路應用程式的 Firebase 配置
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// 初始化Firebase應用
const app = initializeApp(firebaseConfig);

export default app;