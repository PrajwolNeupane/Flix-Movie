import { FC,useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Firebase/firebaseAuth";


interface Props{

}

let ProtectiveRoute:FC<Props> = ({}) => {

    const currentUser = useAuth();

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    return (
        <>
            <Outlet />
        </>
    )
}
export default ProtectiveRoute;