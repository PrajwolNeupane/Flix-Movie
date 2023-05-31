import { FC } from 'react';
import Header from '../Component/Header';
import { Box } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import { useAppSelector,useAppDispatch } from '../App/store';
import { setPopularPage,setTopRatedPage,setTrendingPage,setUpComingPage } from '../App/movieListSlice';

interface Props {

}

let MoviePage: FC<Props> = ({ }) => {


    const dispatch = useAppDispatch();

    const { trendingMovie } = useAppSelector((state) => state.movieList);
    const { popularMovie } = useAppSelector((state) => state.movieList);
    const { upComingMovie } = useAppSelector((state) => state.movieList);
    const { topRatedMovie } = useAppSelector((state) => state.movieList);

    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
                <CardList icon={LocalFireDepartmentIcon} title='Now Trending' movieData={trendingMovie?.trendingMovieList} page={trendingMovie?.page} appendData={(page) => dispatch(setTrendingPage(page + 1))}/>
                <CardList icon={CallMadeIcon} title='Up Coming' movieData={ upComingMovie?.upComingMovieList} page={upComingMovie?.page} appendData={(page) => dispatch(setUpComingPage(page + 1))}/>
                <CardList icon={MovieFilterIcon} title='Popular' movieData={popularMovie?.popularMoiveList} page={popularMovie?.page} appendData={(page) => dispatch(setPopularPage(page + 1))}/>
                <CardList icon={StarRateIcon} title='Top Rated' movieData={topRatedMovie?.topRatedMovieList} page={topRatedMovie?.page} appendData={(page) => dispatch(setTopRatedPage(page + 1))}/>
            </Box>
        </>
    )
}
export default MoviePage;