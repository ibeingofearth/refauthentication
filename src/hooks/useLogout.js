import { signOut } from "firebase/auth";
import { auth } from "../config";

export const useLogout = () => {

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("user logged out")
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};