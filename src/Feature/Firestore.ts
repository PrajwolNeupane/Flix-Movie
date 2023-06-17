import { db } from "../Firebase/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { MovieDetail, TVShow } from "../Interface";
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
      })
      .catch((e: Error) => {
        error(e.message);
      });
  } else {
    const likeCollection = collection(db, `${uid}/like/movie`);
    deleteDoc(doc(likeCollection, allLikeMovie[0].documentId))
      .then(() => {
        success(index);
      })
      .catch((e: Error) => {
        error(e.message);
      });
  }
};
export default addToLikeMovies;

export const addToWatchLaterMovies = (
  uid: string,
  movie: MovieDetail | undefined,
  success: () => void,
  error: (e: Error) => void
) => {
  const likeCollection = collection(db, `${uid}/watchlater/movie`);
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

export const removeFromWatchLaterMovies = (
  uid: string,
  allWacthLaterMovie: any[],
  movieData: any,
  success: (ind: number | null) => void,
  error: (e: string) => void
) => {
  var index = getFireStoreIndex(allWacthLaterMovie, movieData);
  if (index) {
    const likeCollection = collection(db, `${uid}/watchlater/movie`);
    deleteDoc(doc(likeCollection, allWacthLaterMovie[index].documentId))
      .then(() => {
        success(index);
      })
      .catch((e: Error) => {
        error(e.message);
      });
  } else {
    const likeCollection = collection(db, `${uid}/watchlater/movie`);
    deleteDoc(doc(likeCollection, allWacthLaterMovie[0].documentId))
      .then(() => {
        success(index);
      })
      .catch((e: Error) => {
        error(e.message);
      });
  }
};

export const addToLikeSeries = (
  uid: string,
  series: TVShow | undefined,
  success: () => void,
  error: (e: Error) => void
) => {
  const likeCollection = collection(db, `${uid}/like/series`);
  addDoc(likeCollection, {
    ...series,
  })
    .then(() => {
      success();
    })
    .catch((e: Error) => {
      error(e);
    });
};

export const removeFromLikeSeries = (
  uid: string,
  allLikeSeries: any[],
  series: any,
  success: (ind: number | null) => void,
  error: (e: string) => void
) => {
  var index = getFireStoreIndex(allLikeSeries, series);
  if (index) {
    const likeCollection = collection(db, `${uid}/like/series`);
    deleteDoc(doc(likeCollection, allLikeSeries[index].documentId))
      .then(() => {
        success(index);
      })
      .catch((e: Error) => {
        error(e.message);
      });
  } else {
    const likeCollection = collection(db, `${uid}/like/movie`);
    deleteDoc(doc(likeCollection, allLikeSeries[0].documentId))
      .then(() => {
        success(index);
      })
      .catch((e: Error) => {
        error(e.message);
      });
  }
};
