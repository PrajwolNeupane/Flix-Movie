import {AuthErrorCodeInterface,GenreIDInterface} from '../Interface/index.ts';

export const AuthErrorCode:AuthErrorCodeInterface = {
    codes:[
        {
            code:"auth/wrong-password",
            message:"Wrong Password"
        },
        {
            code:"auth/email-already-exists",
            message:"User already exists"
        },{
            code:"auth/internal-error",
            message:"Internal Server Error"
        },{
            code:"auth/user-not-found",
            message:"Wrong Password or Email"
        },{
            code:"auth/email-already-in-use",
            message:"User already exists"
        }
    ]
}
export const GenreID:GenreIDInterface = {
    genres: [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ]
}

export const setGenre = (array:Array<number>) => {
    const filteredGenres = GenreID.genres.filter((genre) => array.includes(genre.id));
    return filteredGenres;

}
export const compareFireStoreData = (array:Array<any>,data:any) => {
    var save = false;
    array.filter((curr) => {
        if(curr?.id === data?.id){
            save = true;
        }
    })
    return save;
}

export const getFireStoreIndex = (array:Array<any>,data:any) => {
    var index = null;
    array.filter((curr,indx) => {
        if(curr?.id === data?.id){
            index = indx;
        }
    })
    return index;
    

}