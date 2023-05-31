import { FC } from 'react';
import Header from '../Component/Header';
import { Box } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import { useAppDispatch, useAppSelector } from '../App/store';
import { setPopularPage,setTopRatedPage, setTrendingPage, setUpComingPage } from '../App/seriesListSlice';


interface Props {

}

let TVSeriesPage: FC<Props> = ({ }) => {
   
    const dispatch = useAppDispatch();

    const {popularSeries,topRatedSeries,trendingSeries,upComingSeries} = useAppSelector((state) => state.seriesList);

    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
                <CardList icon={LocalFireDepartmentIcon} title='Now Trending' seiresData={trendingSeries?.trendingSeriesList} page={trendingSeries?.page} appendData={(page) => dispatch(setTrendingPage(page + 1))}/>
                <CardList icon={CallMadeIcon} title='Up Coming' seiresData={upComingSeries?.upComingSeriesList} page={upComingSeries?.page} appendData={(page)=>dispatch(setUpComingPage(page + 1))}/>
                <CardList icon={MovieFilterIcon} title='Popular'  seiresData={popularSeries?.popularSeriesList} page={popularSeries?.page}  appendData={(page) => dispatch(setPopularPage(page + 1))}/>
                <CardList icon={StarRateIcon} title='Top Rated' seiresData={topRatedSeries?.topRatedSeriesList} page={topRatedSeries?.page}  appendData={(page) => dispatch(setTopRatedPage(page + 1))}/>
            </Box>
        </>
    )
}
export default TVSeriesPage;