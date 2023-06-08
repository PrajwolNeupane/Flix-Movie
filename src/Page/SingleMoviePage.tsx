import { Box, Text, Icon, VStack, HStack, Image, Heading, Button } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Movie, MovieCast, MovieDetail } from '../Interface';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CardList from '../Component/CardList';
import axios from 'axios';
import addToLikeMovies, { addToWatchLaterMovies, removeFromLikeMovies } from '../Feature/Firestore';
import { appendLikeMovie, appendWatchLaterMovie, removeLikeMovie, removeWatchLaterMovie } from "../App/firestoreMovieSlice";
import { useAppSelector, useAppDispatch } from '../App/store';
import { compareFireStoreData } from '../Const';

interface Props {

}

let SingleMoviePage: FC<Props> = ({ }) => {

    const { id } = useParams();
    const disptach = useAppDispatch();
    const { auth } = useAppSelector((state) => state.auth);
    const { likeMovie, watchLaterMovie } = useAppSelector((state) => state.firestoreMovie);
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState<MovieDetail>();
    const [movieCast, setMovieCast] = useState<MovieCast>();
    const [page, setPage] = useState<number>(1);
    const [similarMovies, setSimilarMovies] = useState<Array<Movie>>([]);
    const [isSavedLike, setSavedLike] = useState(false);
    const [isSavedWatchLater, setSavedWatchLater] = useState(false);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setMovieData(data);
            } catch (e) {

            }
        }
        const getMovieCast = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setMovieCast(data);
            } catch (e) {
                console.log(e);
            }
        }
        getMovieDetails();
        getMovieCast();

    }, [id]);

    useEffect(() => {
        const getSimilarMovie = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/movie?with_genres=${movieData?.genres[0].id + "," + movieData?.genres[1].id}&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${page}`);
                const data = response.data.results
                setSimilarMovies(data);
            } catch (e) {
                console.log(e);
            }
        }
        if (movieData) {
            getSimilarMovie();
        }
    }, [movieData]);

    useEffect(() => {
        if (movieData && likeMovie && watchLaterMovie) {
            setSavedLike(compareFireStoreData(likeMovie, movieData));
            setSavedWatchLater(compareFireStoreData(watchLaterMovie, movieData));
        }
    }, [movieData, likeMovie, watchLaterMovie]);

    const likeMovieHanlder = (toRemove: boolean) => {
        if (auth) {
            if (!toRemove) {
                addToLikeMovies(
                    auth.uid, movieData,
                    () => {
                        alert("Added")
                        disptach(appendLikeMovie(movieData));
                    }, (e) => {
                        alert(e.message)
                    }); 
            } else {
                removeFromLikeMovies(likeMovie,movieData,(index) => {
                    disptach(removeLikeMovie(index));
                });
                alert("Removed")
            }
        } else {
            navigate("/log-in");
        }

    }
    const watchlaterMovieHanlder = (toRemove: boolean) => {
        if (auth) {
            if (!toRemove) {
                addToWatchLaterMovies(auth.uid, movieData, () => {
                    alert("Movie Added")
                    disptach(appendWatchLaterMovie(movieData));
                }, (e) => {
                    console.log(e);
                });
            } else {
                removeFromLikeMovies(watchLaterMovie,movieData,(index) => {
                    disptach(removeWatchLaterMovie(index));
                });
                alert("Removed")
            }
        } else {
            navigate("/log-in");
        }
    }


    return (
        <VStack alignItems={"flex-start"} m={"0px 5vw"}>
            <Text fontFamily={"Nunito"} color={"brand.500"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>Watch Now : Movie {movieData?.original_title}</Text>
            <Box w={"90vw"} h={"550px"} bg={`linear-gradient(rgb(31, 29, 31,0.6),rgb(31, 29, 31,0.6)),url(${"https://image.tmdb.org/t/p/original" + movieData?.backdrop_path})`} style={{ backgroundSize: "cover", backgroundPosition: "center", alignItems: "center", justifyContent: "center" }} display={"flex"} >
                <Icon as={PlayCircleFilledWhiteIcon} color={'brand.400'} fontSize={"100px"} />
            </Box>
            <HStack width={'100%'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                <Box sx={{ marginRight: "5vw" }}>
                    <Text fontFamily={"Nunito"} color={"text.500"} textAlign={"center"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>If the current server doesn’t work please try other server below</Text>
                    <HStack w={"40vw"} bgColor={"dark.800"} justifyContent={"space-between"} p={"0px 20px"} borderRadius={"10px"}>
                        <Text color={"brand.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>Vidstream</Text>
                        <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>My Cloud</Text>
                        <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>Up Cloud</Text>
                        <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>DoodStream</Text>
                    </HStack>
                </Box>
                <HStack gap={"10px"} alignItems={'center'}>
                    {
                        isSavedWatchLater ? <Button fontFamily={"Nunito"} height={'45px'} borderRadius={"10px"} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={WatchLaterOutlinedIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => {
                            watchlaterMovieHanlder(isSavedWatchLater);
                        }}>
                            Remove from Watch Later
                        </Button> :
                            <Button fontFamily={"Nunito"} height={'45px'} borderRadius={"10px"} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={WatchLaterOutlinedIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => {
                                watchlaterMovieHanlder(isSavedWatchLater);
                            }}>
                                Watch Later
                            </Button>
                    }

                    {
                        isSavedLike ? <Button fontFamily={"Nunito"} borderRadius={"10px"} height={'45px'} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={FavoriteIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => {
                            likeMovieHanlder(isSavedLike);
                        }}>
                            Remove from like
                        </Button> : <Button fontFamily={"Nunito"} borderRadius={"10px"} height={'45px'} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={FavoriteBorderIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => {
                            likeMovieHanlder(isSavedLike);
                        }}>
                            Like
                        </Button>
                    }
                </HStack>
            </HStack>
            <HStack gap={"40px"} pb={"40px"} alignItems={"flex-start"}>
                <Image src={"https://image.tmdb.org/t/p/original" + movieData?.poster_path} w={"25%"} height={"400px"} borderRadius={"5px"} objectFit={'cover'} />
                <VStack w={"75%"} alignItems={"flex-start"}>
                    <Heading fontFamily={"Nunito"} color={"text.200"} m={"10px 0px"} fontWeight={"semibold"} fontSize={"md"}>{movieData?.original_title}</Heading>
                    <Text fontFamily={"Nunito"} color={"text.100"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xxs"}>{movieData?.overview}</Text>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "180px" }}>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Type :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>Movie</Text>
                                </td>
                            </tr>
                            <tr>
                                <td><Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Country :</Text></td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>{movieData?.production_countries.map((curr, indx) => {
                                        if (indx != movieData?.production_countries.length - 1) {
                                            return (curr?.name + ", ")
                                        } else {
                                            return (curr?.name)
                                        }
                                    })}</Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Genre :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>{
                                        movieData?.genres?.map((curr, indx) => {
                                            if (indx != movieData?.genres.length - 1) {
                                                return (curr?.name + ", ")
                                            } else {
                                                return (curr?.name)
                                            }
                                        })
                                    }</Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Release :</Text></td>
                                <td>

                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {movieData?.release_date}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Production Company:</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {movieData?.production_companies.map((curr, indx) => {
                                            if (indx != movieData?.production_companies.length - 1) {
                                                return (curr?.name + ", ");
                                            } else {
                                                return (curr?.name);
                                            }
                                        })}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Tag :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {movieData?.tagline}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Cast :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {movieCast?.cast?.slice(0, 6).map((curr, indx: number) => {
                                            if (indx != 5) {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name + " - " + curr?.character + ", "}</Link>)
                                            } else {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name + " - " + curr?.character}</Link>)
                                            }
                                        })}
                                    </Text>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </VStack>
            </HStack>
            <CardList icon={LiveTvIcon} title='Similar Movies' movieData={similarMovies} page={page} appendData={(page) => setPage(page + 1)} />
        </VStack>
    )
}
export default SingleMoviePage