import React, { useContext, useState, useEffect } from "react";
import app, { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  async function signup(email, password) {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    app.firestore().collection("user").doc(user.user.uid).set({
      email: user.user.email,
      fav: [],
    });
  }

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function setCurrentUserInfo(user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const currentUserInfo = await app
          .firestore()
          .collection("user")
          .doc(user.uid)
          .get();
        setCurrentUser({ id: user.uid, ...currentUserInfo.data() });
        history.push("/");
      } else {
        setCurrentUser();
        history.push("/login");
      }
      setLoading(false);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    setCurrentUserInfo,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
