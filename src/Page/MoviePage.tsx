import { FC } from 'react';
import Header from '../Component/Header';
import { Box, HStack, Heading, Icon, Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Card } from '../Component/CusomComponents';

interface Props {

}

let MoviePage: FC<Props> = ({ }) => {
    return (
        <>
            <Header />
            <Box w={'100%'} p={"50px 5%"}>
                <HStack>
                    <Icon as={LocalFireDepartmentIcon} color={"brand.500"} fontSize={"xxl"}/>
                    <Heading  color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                        Now Trending
                    </Heading>
                </HStack>
                <HStack p={"30px 0px"} gap={"15px"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"start"}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </HStack>
            </Box>
        </>
    )
}
export default MoviePage;