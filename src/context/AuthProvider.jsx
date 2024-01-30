/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from 'react';
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 建立使用者(email)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // 建立使用者(google)
  const signUpWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // 登入
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // 登出
  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGoogle,
    login,
    logOut
  }

  // 確認用戶登入狀態
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider