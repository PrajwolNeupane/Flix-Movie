import { signOut } from "firebase/auth";
import {auth} from '../Firebase/firebaseAuth';

const Logout = async(success: () => void,error:(message:string)=>void) => {
    try{
        await signOut(auth);
        localStorage.removeItem("saveAuth");
        sessionStorage.removeItem("saveAuth");
        success();
    }catch(e){
        error("Error");
    }
}
export default Logout;