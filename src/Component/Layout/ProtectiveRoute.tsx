import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Firebase/firebaseAuth";
import { setAuth } from "../../App/authSlice";
import { useAppDispatch } from "../../App/store";
import { db } from "../../Firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { setLikeMovie, setWatchLaterMovie,setLikeSeries,setWatchLaterSeries } from '../../App/firestoreMovieSlice.js';


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
            onSnapshot(Collection, (data) => {
                var tempData = data.docs.map((doc) => ({
                    documentId: doc.id,
                    ...doc.data(),

                }))
                dispatch(setLikeMovie(tempData));
            })

        }
        const getWatchLaterMovie = async () => {
            const Collection = collection(db, `${currentUser?.uid}/watchlater/movie`);
            onSnapshot(Collection, (data) => {
                var tempData = data.docs.map((doc) => ({
                    documentId: doc.id,
                    ...doc.data(),
                }))
                dispatch(setWatchLaterMovie(tempData));
            })
        }
        const getLikeSeries = async () => {
            const Collection = collection(db, `${currentUser?.uid}/like/series`);
            onSnapshot(Collection, (data) => {
                var tempData = data.docs.map((doc) => ({
                    documentId: doc.id,
                    ...doc.data(),

                }))
                dispatch(setLikeSeries(tempData));
            })

        }
        const getWatchLaterSeries = async () => {
            const Collection = collection(db, `${currentUser?.uid}/watchlater/series`);
            onSnapshot(Collection, (data) => {
                var tempData = data.docs.map((doc) => ({
                    documentId: doc.id,
                    ...doc.data(),

                }))
                dispatch(setWatchLaterSeries(tempData));
            })

        }
        if (currentUser) {
            getLikeMovie();
            getWatchLaterMovie();
            getLikeSeries();
            getWatchLaterSeries();
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