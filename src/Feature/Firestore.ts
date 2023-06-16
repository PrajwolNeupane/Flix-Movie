import { db } from "../Firebase/config"
import { addDoc,collection,deleteDoc,doc} from "firebase/firestore";
import { MovieDetail } from "../Interface";
import { getFireStoreIndex } from "../Const";

const addToLikeMovies = (uid:string,movie:MovieDetail | undefined,success:()=>void,error:(e:Error)=>void) => {

    const likeCollection = collection(db,`${uid}/like/movie`);
        addDoc(likeCollection,{
        ...movie,
      }).then(()=>{
        success();
       
      }).catch((e:Error) => {
        error(e);
      })

}
export const removeFromLikeMovies = (uid:string,allLikeMovie: any[],movieData: any,success:(ind:number | null) => void,error:(e:Error) => void) => {
  const likeCollection = collection(db,`${uid}/like/movie`);
  deleteDoc(doc(likeCollection,'3FaitYgY6wHbIBFFDzpa'))
  .then(() => {
    // var index = getFireStoreIndex(allLikeMovie,movieData);
    // if(index){
    //   success(index);
    // }
    alert("Removed in");
  })
  .catch((e:Error) => {
    error(e);
  });

  
}
export default addToLikeMovies;

// const removeLikeMovies = 

export  const addToWatchLaterMovies = (uid:string,movie:MovieDetail | undefined,success:()=>void,error:(e:Error)=>void) => {
    
  const likeCollection = collection(db,`${uid}/watchlater/movie`);
      addDoc(likeCollection,{
      movie:movie,
    }).then(()=>{
      success();
    }).catch((e:Error) => {
      error(e);
    })

}