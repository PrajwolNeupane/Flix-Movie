import { Box, HStack, Heading, Text, Icon, Image } from '@chakra-ui/react';
import { FC } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Movie from '../Assets/Image/MovieCam.png';
import { Link } from 'react-router-dom';

interface Props {

}


let Footer: FC<Props> = ({ }) => {
    return (
        <HStack w={"100%"} h="300px" bgColor={"rgb(54, 52, 53,0.4)"} p="0px 5%" justifyContent={"space-between"}>
            <HStack>
                <Link to="/"><Image src={Movie} /></Link>
                <Box>
                    <Link to="/"><Heading fontSize={"xxl"} fontFamily={"Playfair"} color={"brand.400"}>FlixHive</Heading></Link>
                    <Text fontSize={"xs"} fontWeight={"regular"} fontFamily={"Nunito"} color={"brand.400"}>Share our site with your friends and help us grow</Text>
                </Box>
            </HStack>
            <Box>
                <Text fontSize={"sm"} fontWeight={"regular"} fontFamily={"Nunito"} color={"text.200"}>
                    Connect with us
                </Text>
                <Link to="https://www.facebook.com/prajwolxhettry/" target='blank'> <Icon as={FacebookIcon} fontSize={"md"} color={"text.400"} /></Link>
                <Link to="https://www.instagram.com/iamprajwolneupane/?hl=en" target='blank'> <Icon as={InstagramIcon} fontSize={"md"} m="0px 16px" color={"text.400"} /></Link>
                <Link to="https://www.linkedin.com/in/prajwol-neupane-b64418208/" target='blank'> <Icon as={LinkedInIcon} fontSize={"md"} color={"text.400"} /></Link>
            </Box>
        </HStack>
    )
}
export default Footer;