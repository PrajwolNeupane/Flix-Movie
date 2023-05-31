import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {User} from 'firebase/auth'

type InitialState = {
    auth?:User
}

const initialState:InitialState = {
    auth:undefined
}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setAuth:(state,action: PayloadAction<User | undefined >) => {
            state.auth = action.payload;
        }
    }, 
});

export default AuthSlice.reducer;
export const {setAuth} = AuthSlice.actions; 