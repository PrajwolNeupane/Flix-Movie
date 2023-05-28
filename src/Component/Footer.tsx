import { Box, HStack ,Heading,Text} from '@chakra-ui/react';
import { FaceBookIcon } from './CusomComponents';
import {FC} from 'react';

interface Props{

}


let Footer:FC<Props> = ({}) => {
    return (
        <HStack w={"100%"} h="300px" bgColor={"rgb(54, 52, 53,0.4)"} p="0px 5%" justifyContent={"space-between"}>
            <Box>
                <Heading fontSize={"xxl"} fontFamily={"Playfair"} color={"brand.400"}>FlixHive</Heading>
                <Text fontSize={"xs"} fontWeight={"regular"} fontFamily={"Nunito"} color={"brand.400"}>Share our site with your friends and help us grow</Text>
            </Box>
            <Box>
                <Text fontSize={"sm"} fontWeight={"regular"} fontFamily={"Nunito"} color={"text.200"}>
                    Connect with us
                </Text>
                <FaceBookIcon />
            </Box>
        </HStack>
    )
}
export default Footer;