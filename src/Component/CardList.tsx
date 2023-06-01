import { FC, useState } from 'react';
import { Box, HStack, Heading, Icon, Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Card } from '../Component/CusomComponents';
import { Movie, Series } from '../Interface/index.ts';


interface Props {
    icon?: typeof LocalFireDepartmentIcon,
    title: string,
    movieData?: Array<Movie>,
    seiresData?: Array<Series>,
    page: number,
    appendData: (page: number) => void
}


let CardList: FC<Props> = ({ icon, title, movieData, page, appendData,seiresData }) => {

    const [limit, setLimit] = useState<number>(7);


    if (movieData != undefined) {
        return (
            <Box w={'100%'} p={"25px 0%"}>
                <HStack>
                    <Icon as={icon} color={"brand.500"} fontSize={"xxl"} />
                    <Heading color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                        {title}
                    </Heading>
                </HStack>
                <HStack p={"30px 0px"} gap={"15px"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"start"}>
                    {
                        movieData?.slice(0, limit).map((curr: Movie, index: number) => {
                            return (
                                <Card title={curr.title} key={index} image={curr.poster_path} date={curr.release_date} genre={([curr?.genre_ids["0"],curr?.genre_ids["1"]])} id={curr?.id} />
                            )
                        })
                    }
                </HStack>
                <Text
                    onClick={() => {
                        setLimit(limit + 7);
                        if (limit > movieData?.length) {
                            appendData(page);
                        }
                    }}
                    position={"absolute"} cursor={"pointer"} fontSize={"xs"} right={"7%"} color={"brand.400"} fontFamily={"Nunito"}>See More</Text>
            </Box>
        )
    }else if(seiresData != undefined){
        return (
            <Box w={'100%'} p={"25px 0%"}>
                <HStack>
                    <Icon as={icon} color={"brand.500"} fontSize={"xxl"} />
                    <Heading color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                        {title}
                    </Heading>
                </HStack>
                <HStack p={"30px 0px"} gap={"15px"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"start"}>
                    {
                        seiresData?.slice(0, limit).map((curr: Series, index: number) => {
                            return (
                                <Card title={curr.name} key={index} image={curr.poster_path} date={curr.first_air_date} genre={([curr?.genre_ids["0"],curr?.genre_ids["1"]])}/>
                            )
                        })
                    }
                </HStack>
                <Text
                    onClick={() => {
                        setLimit(limit + 7);
                        if (limit > seiresData?.length) {
                            appendData(page);
                        }
                    }}
                    position={"absolute"} cursor={"pointer"} fontSize={"xs"} right={"7%"} color={"brand.400"} fontFamily={"Nunito"}>See More</Text>
            </Box>
        )
    }
    else{
        return <></>
    }
}
export default CardList;