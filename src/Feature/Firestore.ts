import { db } from "../Firebase/config"
import { addDoc,collection} from "firebase/firestore";
import { MovieDetail } from "../Interface";

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
export default addToLikeMovies;

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