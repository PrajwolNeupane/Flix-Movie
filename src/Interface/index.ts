
export interface LoginInputProps {
    type:string,
    name:string,
    label:string,
    placeholder:string,
    register:Function
}
export interface AuthErrorCodeInterface {
  codes:Array<{code:string,message:string}>
}
export interface GenreIDInterface {
  genres:Array<{id:number,name:string}>
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
