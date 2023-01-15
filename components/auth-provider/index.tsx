import React, { ReactElement } from "react";

import AuthContext from "../../contexts/auth-context";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";

interface AuthProviderProps {
  children: ReactElement;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
