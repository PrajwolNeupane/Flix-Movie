import { db } from "../Firebase/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { MovieDetail } from "../Interface";
import { getFireStoreIndex } from "../Const";

const addToLikeMovies = (
  uid: string,
  movie: MovieDetail | undefined,
  success: () => void,
  error: (e: Error) => void
) => {
  const likeCollection = collection(db, `${uid}/like/movie`);
  addDoc(likeCollection, {
    ...movie,
  })
    .then(() => {
      success();
    })
    .catch((e: Error) => {
      error(e);
    });
};
export const removeFromLikeMovies = (
  uid: string,
  allLikeMovie: any[],
  movieData: any,
  success: (ind: number | null) => void,
  error: (e: string) => void
) => {
  var index = getFireStoreIndex(allLikeMovie, movieData);
  if (index) {
    const likeCollection = collection(db, `${uid}/like/movie`);
    deleteDoc(doc(likeCollection, allLikeMovie[index].documentId))
      .then(() => {
        success(index);
        alert("Removed in");
      })
      .catch((e: Error) => {
        error(e.message);
      });
  } else {
    const likeCollection = collection(db, `${uid}/like/movie`);
    deleteDoc(doc(likeCollection, allLikeMovie[0].documentId))
      .then(() => {
        success(index);
        alert("Removed in");
      })
      .catch((e: Error) => {
        error(e.message);
      });
  }
};
export default addToLikeMovies;

// const removeLikeMovies =

export const addToWatchLaterMovies = (
  uid: string,
  movie: MovieDetail | undefined,
  success: () => void,
  error: (e: Error) => void
) => {
  const likeCollection = collection(db, `${uid}/watchlater/movie`);
  addDoc(likeCollection, {
    movie: movie,
  })
    .then(() => {
      success();
    })
    .catch((e: Error) => {
      error(e);
    });
};
