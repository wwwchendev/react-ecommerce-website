/* eslint-disable no-undef */
// 載入firebase核心
import { initializeApp } from 'firebase/app';
// 載入firebase各項服務
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; //Firebase 提供的 NoSQL 文件型數據庫服務
import { getStorage } from 'firebase/storage'; //用於存儲和管理應用程序文件（例如圖像、音頻、視頻等）的雲端存儲服務。

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

// 取得身份驗證服務的實例
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage, };