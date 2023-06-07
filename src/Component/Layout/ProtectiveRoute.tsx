import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Firebase/firebaseAuth";
import { setAuth } from "../../App/authSlice";
import { useAppDispatch } from "../../App/store";
import { db } from "../../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { setLikeMovie, setWatchLaterMovie } from '../../App/firestoreMovieSlice.js';


interface Props {

}

let ProtectiveRoute: FC<Props> = ({ }) => {

    const currentUser = useAuth();
    const localSaveAuth = localStorage.getItem('saveAuth');
    const sessionSaveAuth = sessionStorage.getItem('saveAuth');
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getLikeMovie = async () => {
            const Collection = collection(db, `${currentUser?.uid}/like/movie`);
            const data = await getDocs(Collection);
            var tempData = data.docs.map((doc) => ({
                ...doc.data().movie
            }))
            dispatch(setLikeMovie(tempData));

        }
        const getWacthLaterMovie = async () => {
            const Collection = collection(db, `${currentUser?.uid}/watchlater/movie`);
            const data = await getDocs(Collection);
            var tempData = data.docs.map((doc) => ({
                ...doc.data().movie
            }))
            dispatch(setWatchLaterMovie(tempData))

        }
        if (currentUser) {
            getLikeMovie();
            getWacthLaterMovie();

        }
    }, [currentUser]);

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
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [currentUser, localSaveAuth, sessionSaveAuth]);

    return (
        <>
            {
                loading ? <><h1>Loading</h1></> : <Outlet />
            }
        </>
    )
}
export default ProtectiveRoute;