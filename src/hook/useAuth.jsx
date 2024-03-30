import { useContext } from "react";
import { AuthContaxt } from "../contexts/AuthProvider";

const useAuth = () => {
    return useContext(AuthContaxt)
};

export default useAuth;