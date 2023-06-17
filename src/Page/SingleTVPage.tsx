import { Box, Text, Icon, VStack, HStack, Image, Heading, Button, useToast } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Season, Series, TVCast, TVShow } from '../Interface';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CardList from '../Component/CardList';
import axios from 'axios';
import { compareFireStoreData } from '../Const';
import { useAppSelector } from '../App/store';
import { addToLikeSeries, removeFromLikeSeries } from '../Feature/Firestore';
import { errorToast, successToast } from '../Component/CusomComponents';

interface Props {

}

let SingleTVPage: FC<Props> = ({ }) => {


    const { likeSeries, watchLaterSeries } = useAppSelector((state) => state.firestoreMovie);
    const { auth } = useAppSelector((state) => state.auth);

    const toast = useToast();
    const navigate = useNavigate();
    const { id } = useParams();
    const [seiresData, setSeriesData] = useState<TVShow>();
    const [seriesCast, setSeriesCast] = useState<TVCast>();
    const [page, setPage] = useState<number>(1);
    const [similarSeries, setSimilarSeries] = useState<Array<Series>>([]);

    const [isSavedLike, setSavedLike] = useState(false);
    const [isSavedWatchLater, setSavedWatchLater] = useState(false);

    useEffect(() => {
        if (seiresData && likeSeries && watchLaterSeries) {
            console.log(seiresData.id);
            setSavedLike(compareFireStoreData(likeSeries, seiresData));
            setSavedWatchLater(compareFireStoreData(watchLaterSeries, seiresData));
        }
        console.log(seiresData);
    }, [seiresData, likeSeries, watchLaterSeries]);

    useEffect(() => {
        const getSeriesDetails = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setSeriesData(data);
            } catch (e) {

            }
        }
        const getSeriesCast = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setSeriesCast(data);
            } catch (e) {
                console.log(e);
            }
        }
        getSeriesDetails();
        getSeriesCast();

    }, [id]);

    useEffect(() => {
        const getSimilarSeries = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/tv?with_genres=${seiresData?.genres[0]?.id + "," + seiresData?.genres[1]?.id}&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${page}`);
                const data = response.data.results
                setSimilarSeries(data);
            } catch (e) {
                console.log(e);
            }
        }
        if (seiresData) {
            getSimilarSeries();
        }
    }, [seiresData]);

    const likeSeriesHanlder = (toRemove: boolean) => {
        if (auth) {
            if (!toRemove) {
                addToLikeSeries(
                    auth.uid, seiresData,
                    () => {
                        successToast(toast, "Series Liked", "Series like successfully");
                    }, (e) => {
                        errorToast(toast, "Fail to like series", e.message);
                    });
            } else {
                removeFromLikeSeries(auth?.uid, likeSeries, seiresData, () => {
                    errorToast(toast, "Series Unliked", "Series unlike successfully");
                }, (e) => {
                    errorToast(toast, "Fail to unlike series", `${e}`);
                });
            }
        } else {
            navigate("/log-in");
        }

    }


    return (
        <VStack alignItems={"flex-start"} m={"0px 5vw"}>
            <Text fontFamily={"Nunito"} color={"brand.500"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>Watch Now : Series : {seiresData?.name}</Text>
            <Box w={"90vw"} h={"550px"} bg={`linear-gradient(rgb(31, 29, 31,0.6),rgb(31, 29, 31,0.6)),url(${"https://image.tmdb.org/t/p/original" + seiresData?.backdrop_path})`} style={{ backgroundSize: "cover", backgroundPosition: "center", alignItems: "center", justifyContent: "center" }} display={"flex"} >
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
                        !isSavedWatchLater ? <Button fontFamily={"Nunito"} height={'45px'} borderRadius={"10px"} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={WatchLaterOutlinedIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }}>
                            Watch Later
                        </Button> : <Button fontFamily={"Nunito"} height={'45px'} borderRadius={"10px"} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={WatchLaterOutlinedIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} >
                            Remove from Watch Later
                        </Button>
                    }
                    {
                        isSavedLike ?
                            <Button fontFamily={"Nunito"} borderRadius={"10px"} height={'45px'} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={FavoriteBorderIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => { likeSeriesHanlder(isSavedLike) }}>
                                Remove from like
                            </Button> :
                            <Button fontFamily={"Nunito"} borderRadius={"10px"} height={'45px'} color={"text.500"} fontWeight={"medium"} fontSize={"xs"} leftIcon={<Icon as={FavoriteBorderIcon} color={'brand.400'} />} bgColor={'dark.700'} _hover={{ bgColor: "dark.800" }} onClick={() => { likeSeriesHanlder(isSavedLike) }}>
                                Like
                            </Button>
                    }
                </HStack>
            </HStack>
            <HStack gap={"40px"} pb={"40px"} alignItems={"flex-start"}>
                <Image src={"https://image.tmdb.org/t/p/original" + seiresData?.poster_path} w={"25%"} height={"400px"} borderRadius={"5px"} objectFit={'cover'} />
                <VStack w={"75%"} alignItems={"flex-start"}>
                    <Heading fontFamily={"Nunito"} color={"text.200"} m={"10px 0px"} fontWeight={"semibold"} fontSize={"md"}>{seiresData?.name}</Heading>
                    <Text fontFamily={"Nunito"} color={"text.100"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xxs"}>{seiresData?.overview}</Text>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "180px" }}>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Type :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>Series</Text>
                                </td>
                            </tr>
                            <tr>
                                <td><Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Country :</Text></td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>{seiresData?.production_countries.map((curr, indx) => {
                                        if (indx != seiresData?.production_countries.length - 1) {
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
                                        seiresData?.genres?.map((curr, indx) => {
                                            if (indx != seiresData?.genres.length - 1) {
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
                                        {seiresData?.first_air_date}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Production Company:</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {seiresData?.production_companies.map((curr, indx) => {
                                            if (indx != seiresData?.production_companies.length - 1) {
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
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Season :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {
                                            seiresData?.seasons.map((curr: Season, indx: number) => {
                                                if (indx != seiresData?.seasons.length - 1) {
                                                    return (seiresData.name + " " + curr?.name + ",");
                                                } else {
                                                    return (seiresData.name + " " + curr?.name);
                                                }
                                            })
                                        }
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Cast :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {seriesCast?.cast?.slice(0, 6).map((curr, indx: number) => {
                                            if (indx != 5) {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name + ", "}</Link>)
                                            } else {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name}</Link>)
                                            }
                                        })}
                                    </Text>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </VStack>
            </HStack>
            <CardList icon={LiveTvIcon} title='Similar Series' seiresData={similarSeries} page={page} appendData={(page) => setPage(page + 1)} />
        </VStack>
    )
}
export default SingleTVPage