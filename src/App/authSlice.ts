import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    auth:Object
}

const initialState:InitialState = {
    auth:{}
}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setAuth:(state,action: PayloadAction<Object>) => {
            state.auth = action.payload;
        }
    },
});

export default AuthSlice.reducer;
export const {setAuth} = AuthSlice.actions; 