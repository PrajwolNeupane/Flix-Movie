import {auth} from '../Firebase/firebaseAuth.ts';
import {createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {AuthErrorCode} from '../Const/index.ts';

const Signup = (name:string,email:string,password:string,isSave:boolean,success: () => void,error:(message:string)=>void ) => {
    createUserWithEmailAndPassword(auth,email,password).then(async()=>{
        if(auth.currentUser){
            await updateProfile(auth.currentUser,{displayName:name});
            if(isSave){
                localStorage.setItem("saveAuth",`${isSave}`);
                sessionStorage.removeItem("saveAuth");
            }else{
                sessionStorage.setItem("saveAuth",`${true}`)
                localStorage.removeItem("saveAuth");
            }
            success();
        }
        else{
            error("Auth User not found");
        }
   }).catch((e) => {
    var curr = AuthErrorCode.codes.filter((curr) => {
        if(curr.code == e.code){
            return curr.message
        }
    })
   if(curr.length != 0) {
    error(curr[0].message);
   }else{
    error(e.code);
   }
   })
}
export default Signup;