
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
