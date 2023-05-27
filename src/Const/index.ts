import {AuthErrorCodeInterface} from '../Interface/index.ts';

export const AuthErrorCode:AuthErrorCodeInterface = {
    codes:[
        {
            code:"auth/wrong-password",
            message:"Wrong Password"
        },
        {
            code:"auth/email-already-exists",
            message:"User already exists"
        },{
            code:"auth/internal-error",
            message:"Internal Server Error"
        },{
            code:"auth/user-not-found",
            message:"Wrong Password or Email"
        },{
            code:"auth/email-already-in-use",
            message:"User already exists"
        }
    ]
}