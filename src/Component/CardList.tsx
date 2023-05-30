import { FC,useState } from 'react';
import { Box, HStack, Heading, Icon,Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Card } from '../Component/CusomComponents';
import { Movie } from '../Interface/index.ts';
import {useAppDispatch } from '../App/store';
import { setPopularPage } from '../App/movieListSlice.ts';

interface Props {
    icon?: typeof LocalFireDepartmentIcon,
    title: string,
    data: Array<Movie>,
    page:number
}


let CardList: FC<Props> = ({ icon, title, data,page }) => {

    const [limit,setLimit] = useState<number>(7);
    const dispatch = useAppDispatch();


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
                    data.slice(0,limit).map((curr: Movie, index: number) => {
                        return (
                            <Card title={curr.title} key={index} image={curr.poster_path}/>
                        )
                    })
                }
            </HStack>
            <Text  
            onClick={()=>{
                setLimit(limit+7);
                if(limit > data.length){
                    dispatch(setPopularPage(page + 1));
                }
            }}
            position={"absolute"} cursor={"pointer"} fontSize={"xs"} right={"7%"} color={"brand.400"} fontFamily={"Nunito"}>See More</Text>
        </Box> 
    )
}
export default CardList;