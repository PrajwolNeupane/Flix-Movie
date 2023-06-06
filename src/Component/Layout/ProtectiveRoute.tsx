import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Firebase/firebaseAuth";
import { setAuth } from "../../App/authSlice";
import { useAppDispatch} from "../../App/store";


interface Props {

}

let ProtectiveRoute: FC<Props> = ({ }) => {

    const currentUser = useAuth();
    const localSaveAuth = localStorage.getItem('saveAuth');
    const sessionSaveAuth = sessionStorage.getItem('saveAuth');
    const dispatch = useAppDispatch();
    const [loading,setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(true);
        if (localSaveAuth == 'true') {
            dispatch(setAuth(currentUser || null));
        } else {
            if (sessionSaveAuth == 'true') {
                dispatch(setAuth(currentUser || null));
            }
            else {
                dispatch(setAuth(null));
            }
        }
        setTimeout(()=>{
            setLoading(false);
        },1000)
    }, [currentUser, localSaveAuth, sessionSaveAuth]);

    return (
        <>
           {
            loading? <><h1>Loading</h1></> :  <Outlet />
           }
        </>
    )
}
export default ProtectiveRoute;