import { FC } from 'react';
import NavBar from '../Component/NavBar';
import { Box } from '@chakra-ui/react';
import BgImg from '../Assets/Image/BackgroundImage.png';

interface Prop {

}

let HomePage: FC<Prop> = ({ }) => {
    return (
        <>
            <Box  bg={`linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`}>
                <NavBar />
            </Box>
        </>
    )
}
export default HomePage;