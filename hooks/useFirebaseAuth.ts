import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut as authSignOut,
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase-config";
import { AuthUser } from "../types";

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const signOut = () => authSignOut(auth).then(clear);

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const authStateChanged = async (user: AuthUser) => {
      setIsLoading(true);

      if (!user) {
        clear();
        return;
      }
      setAuthUser(user);
      setIsLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
    signIn,
  };
};

export default useFirebaseAuth;
