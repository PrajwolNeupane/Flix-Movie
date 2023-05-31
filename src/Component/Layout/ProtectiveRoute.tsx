import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Firebase/firebaseAuth";
import { setAuth } from "../../App/authSlice";
import { useAppDispatch } from "../../App/store";


interface Props {

}

let ProtectiveRoute: FC<Props> = ({ }) => {

    const currentUser = useAuth();
    const localSaveAuth = localStorage.getItem('saveAuth');
    const sessionSaveAuth = sessionStorage.getItem('saveAuth');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localSaveAuth == 'true') {
            dispatch(setAuth(currentUser));
        } else {
            if (sessionSaveAuth == 'true') {
                dispatch(setAuth(currentUser));
            }
            else {
                dispatch(setAuth(undefined));
            }
        }
        // dispatch(setAuth(currentUser));
        console.log(currentUser);
    }, [currentUser, localSaveAuth, sessionSaveAuth]);

    return (
        <>
            <Outlet />
        </>
    )
}
export default ProtectiveRoute;