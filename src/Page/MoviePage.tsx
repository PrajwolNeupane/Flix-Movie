import { FC } from 'react';
import Header from '../Component/Header';
import { Box} from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';

interface Props {

}

let MoviePage: FC<Props> = ({ }) => {
    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
                <CardList icon={LocalFireDepartmentIcon} title='Now Trending'/>
                <CardList icon={CallMadeIcon} title='Up Coming'/>
                <CardList icon={MovieFilterIcon} title='Popular'/>
                <CardList icon={StarRateIcon} title='Top Rated'/>
            </Box>
        </>
    )
}
export default MoviePage;