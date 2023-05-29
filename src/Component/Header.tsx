import { Box, HStack, Heading, VStack, Text,Button,Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {

}

let genre = [
    "Animation",
    "Comdedy",
    "Adventure"
]

let Header: FC<Props> = ({ }) => {
    return (
        <Box w={"100%"} p={"3vh 5%"} bg={"linear-gradient(rgb(31, 29, 31,0.5),rgb(31, 29, 31,0.9)),linear-gradient(to right,rgb(31, 29, 31,0.5),rgb(31, 29, 31,0.5),rgb(31, 29, 31,0.9)),url(https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg)"} bgPosition={"center"} bgSize={"cover"} >
            <HStack h={"400px"} gap={"20%"}>
                <VStack  w={"50%"} alignItems={"flex-start"}>
                    <Heading fontFamily={"Nunito"} fontWeight={"semibold"} color={"text.200"} fontSize={"lg"}>John Wick: Chapter 4</Heading>
                    <Text fontFamily={"Nunito"} fontWeight={"medium"} color={"brand.400"} fontSize={"xs"} >2023-03-22</Text>
                    <HStack>
                        {
                            genre.map((curr, indx) => {
                                if (indx == genre.length - 1) {
                                    return (
                                        <Text fontFamily={"Nunito"} fontWeight={"medium"} color={"brand.400"} fontSize={"xs"} >{curr}</Text>
                                    )
                                } else {
                                    return (
                                        <>
                                            <Text fontFamily={"Nunito"} fontWeight={"bold"} color={"brand.400"} fontSize={"xs"} >{curr}</Text>
                                            <Text fontFamily={"Nunito"} fontWeight={"bold"} color={"brand.400"} fontSize={"md"} >·</Text>
                                        </>
                                    )
                                }
                            })
                        }

                    </HStack>
                    <Text fontFamily={"Nunito"} fontWeight={"regular"} color={"text.100"} fontSize={"xs"}>
                    With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.
                    </Text>
                    <Button w={"150px"} type='submit' bgColor={"brand.400"} color={"dark.700"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>Watch Now</Button>
                </VStack>
                <Image src='https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' width={"20%"} borderRadius={"5px"}/>
            </HStack >
        </Box >
    )
}
export default Header;