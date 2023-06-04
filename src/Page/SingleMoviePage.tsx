import { Box, Text, Icon, VStack, HStack, Image, Heading } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie, MovieCast, MovieDetail } from '../Interface';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import axios from 'axios';

interface Props {

}

let SingleMoviePage: FC<Props> = ({ }) => {

    const { id } = useParams();
    const [movieData, setMovieData] = useState<MovieDetail>();
    const [movieCast, setMovieCast] = useState<MovieCast>();
    const [page, setPage] = useState<number>(1);
    const [similarMovies,setSimilarMovies] = useState<Array<Movie>>([]);

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
        const getSimilarMovie = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/movie?with_genres=28,16&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${page}`);
                const data = response.data.results
                setSimilarMovies(data);
            } catch (e) {
                console.log(e);
            }
        }
        getMovieDetails();
        getMovieCast();
        getSimilarMovie();
    }, [id]);


    return (
        <VStack alignItems={"flex-start"} m={"0px 5vw"}>
            <Text fontFamily={"Nunito"} color={"brand.500"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>Watch Now : Movie {movieData?.original_title}</Text>
            <Box w={"90vw"} h={"550px"} bg={`linear-gradient(rgb(31, 29, 31,0.6),rgb(31, 29, 31,0.6)),url(${"https://image.tmdb.org/t/p/original" + movieData?.backdrop_path})`} style={{ backgroundSize: "cover", backgroundPosition: "center", alignItems: "center", justifyContent: "center" }} display={"flex"} >
                <Icon as={PlayCircleFilledWhiteIcon} color={'brand.400'} fontSize={"100px"} />
            </Box>
            <Box style={{ margin: "20px auto" }}>
                <Text fontFamily={"Nunito"} color={"text.500"} textAlign={"center"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>If the current server doesn’t work please try other server below</Text>
                <HStack w={"40vw"} bgColor={"dark.800"} justifyContent={"space-between"} p={"0px 20px"} borderRadius={"10px"}>
                    <Text color={"brand.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>Vidstream</Text>
                    <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>My Cloud</Text>
                    <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>Up Cloud</Text>
                    <Text cursor={"pointer"} _hover={{ color: "brand.500" }} color={"text.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"xs"}>DoodStream</Text>
                </HStack>
            </Box>
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
            <CardList icon={CallMadeIcon} title='Up Coming' movieData={similarMovies} page={page} appendData={(page) => setPage(page + 1)} />
        </VStack>
    )
}
export default SingleMoviePage