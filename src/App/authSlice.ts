import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {User} from 'firebase/auth'

type InitialState = {
    auth:User |null
}

const initialState:InitialState = {
    auth:null
}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setAuth:(state,action: PayloadAction<User | null >) => {
            state.auth = action.payload;
        }
    }, 
});

export default AuthSlice.reducer;
export const {setAuth} = AuthSlice.actions; 