import { FC} from 'react';
import { Box, HStack, Heading, Icon } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Card } from '../Component/CusomComponents';

interface Props {
    icon?: typeof LocalFireDepartmentIcon,
    title: string
}


let CardList: FC<Props> = ({ icon, title }) => {

    return (
        <Box w={'100%'} p={"25px 0%"}>
            <HStack>
                <Icon as={icon} color={"brand.500"} fontSize={"xxl"} />
                <Heading color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                    {title}
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
    )
}
export default CardList;