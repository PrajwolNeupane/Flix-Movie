import { Text, VStack } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setGenre } from '../Const';
import { Movie, Series } from '../Interface';
import axios from 'axios';
import CardList from '../Component/CardList';
import LiveTvIcon from '@mui/icons-material/LiveTv';

interface Props {

}

let GenrePage: FC<Props> = ({ }) => {

    const { id } = useParams();
    const [similarMovies, setSimilarMovies] = useState<Array<Movie>>([]);
    const [similarSeries, setSimilarSeries] = useState<Array<Series>>([]);
    const [moviePage, setMoviePage] = useState<number>(1);
    const [seriesPage,setSeriesPage] = useState<number>(1);


    useEffect(() => {
        setMoviePage(1);
        setSeriesPage(1);
    }, [id]);

    //For Movie Data
    useEffect(() => {
        const getSimilarMovie = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${moviePage}`);
                const data = response.data.results
                if (moviePage == 1) {
                    setSimilarMovies(data);
                } else {
                    setSimilarMovies(similarMovies.concat(data));
                }

            } catch (e) {
                console.log(e);
            }
        }
        if (id != '') {
            getSimilarMovie();
        }
    }, [id, moviePage]);

    //For Series Data
    useEffect(() => {
        const getSimilarSeries = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${moviePage}`);
                const data = response.data.results
                if (seriesPage == 1) {
                    setSimilarSeries(data);
                } else {
                    setSimilarSeries(similarSeries.concat(data));
                }

            } catch (e) {
                console.log(e);
            }
        }
        if (id != '') {
            getSimilarSeries();
        }
    }, [id, seriesPage]);


    return (
        <>
            <VStack p={"0px 5%"} alignItems={'flex-start'}>
                <Text fontFamily={"Nunito"} color={"brand.500"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>{
                    'Genre : ' +
                    setGenre([parseInt(id || '')]).map((curr) => {
                        return (curr?.name)
                    })
                }</Text>
                <CardList icon={LiveTvIcon} title={setGenre([parseInt(id || '')]).map((curr) => {
                    return (curr?.name)
                }) + " Movies"} movieData={similarMovies} page={moviePage} appendData={(page) => setMoviePage(page + 1)} defaultLimit={14} />
                {
                    similarSeries.length != 0 ? <CardList icon={LiveTvIcon} title={setGenre([parseInt(id || '')]).map((curr) => {
                        return (curr?.name)
                    }) + " Series"} seiresData={similarSeries} page={seriesPage} appendData={(page) => setSeriesPage(page + 1)} defaultLimit={14} /> : <></>
                }
            </VStack>
        </>
    )
}
export default GenrePage;