import { createContext } from "react";

import { AuthUser } from "../types";

interface AuthContextProps {
  authUser: AuthUser;
  isLoading: boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  authUser: null,
  isLoading: true,
  signOut: async () => {},
});

export default AuthContext;
