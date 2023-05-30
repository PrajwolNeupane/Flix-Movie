import { FC } from 'react';
import Header from '../Component/Header';
import { Box } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import { useAppDispatch, useAppSelector } from '../App/store';

interface Props {

}

let MoviePage: FC<Props> = ({ }) => {

    const { trendingMovie } = useAppSelector((state) => state.movieList);
    const { popularMovie } = useAppSelector((state) => state.movieList);
    const { upComingMovie } = useAppSelector((state) => state.movieList);
    const { topRatedMovie } = useAppSelector((state) => state.movieList);

    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
                <CardList icon={LocalFireDepartmentIcon} title='Now Trending' data={trendingMovie?.trendingMovieList} page={trendingMovie?.page}/>
                <CardList icon={CallMadeIcon} title='Up Coming' data={ upComingMovie?.upComingMovieList} page={upComingMovie?.page}/>
                <CardList icon={MovieFilterIcon} title='Popular' data={popularMovie?.popularMoiveList} page={popularMovie?.page} />
                <CardList icon={StarRateIcon} title='Top Rated' data={topRatedMovie?.topRatedMovieList} page={topRatedMovie?.page}/>
            </Box>
        </>
    )
}
export default MoviePage;