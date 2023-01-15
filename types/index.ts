import { User } from "firebase/auth";

export type Todo =
  | {
      description: string;
      completeDate: string;
    }
  | {
      id: string;
      description: string;
      completeDate: string;
    };

export type AuthUser = User | null;
