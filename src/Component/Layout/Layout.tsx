import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import BgImg from '../../Assets/Image/BackgroundImage.png';
import NavBar from '../NavBar';
import Footer from '../Footer';

interface Props {

}


let LayOut: FC<Props> = ({ }) => {
    return (
        <Box bg={`linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`}>
            <NavBar />
            <Outlet />
            <Footer />
        </Box>
    )
}
export default LayOut