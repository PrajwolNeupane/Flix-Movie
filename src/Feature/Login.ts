import {auth} from '../Firebase/firebaseAuth.ts';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {AuthErrorCode} from '../Const/index.ts';

const login = (email:string,password:string,isSave:boolean,success: () => void,error:(message:string)=>void ) => {
   signInWithEmailAndPassword(auth,email,password).then(()=>{
    localStorage.setItem("saveAuth",`${isSave}`);
    success();
   }).catch((e) => {
    var curr = AuthErrorCode.codes.filter((curr) => {
        if(curr.code == e.code){
            return curr.message
        }
    })
   if(curr.length != 0) {
    error(curr[0].message);
   }else{
    error(e);
   }

   })
}
export default login;