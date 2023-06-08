import { db } from "../Firebase/config"
import { addDoc,collection} from "firebase/firestore";
import { MovieDetail } from "../Interface";
import { getFireStoreIndex } from "../Const";

const addToLikeMovies = (uid:string,movie:MovieDetail | undefined,success:()=>void,error:(e:Error)=>void) => {

    const likeCollection = collection(db,`${uid}/like/movie`);
        addDoc(likeCollection,{
        movie:movie,
      }).then(()=>{
        success();
       
      }).catch((e:Error) => {
        error(e);
      })

}
export const removeFromLikeMovies = (allLikeMovie: any[],movieData: any,success:(ind:number | null) => void) => {

  var index = getFireStoreIndex(allLikeMovie,movieData);
  if(index){
    success(index);
  }

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