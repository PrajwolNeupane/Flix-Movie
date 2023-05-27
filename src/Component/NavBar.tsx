import { Button, HStack, Heading, Text, VStack, Collapse } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { GenreID } from '../Const/index.ts';

interface Props {

}

let NavBar: FC<Props> = ({ }) => {

    const [menu, setMenu] = useState<boolean>(false);

    return (
        <VStack p={"20px 5%"} alignItems={"flex-end"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
                <Heading fontFamily={"Playfair"} color={"brand.500"} fontSize={"xl"} fontWeight={"bold"}>FlixHive</Heading>
                <HStack gap={"30px"}>
                    <Link to="/"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"text.100"}>Home</Text></Link>
                    <Link to="/"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"text.100"}>Trending</Text></Link>
                    <HStack as={"button"} onClick={() => {
                        setMenu(!menu);
                    }}>
                        <Text fontFamily={"Nunito"} fontSize={"xs"} color={"text.100"}>Genre</Text>
                        <ChevronDownIcon color={"text.100"} transitionDuration="300ms" fontSize={"rg"} transform={!menu ? "rotate(0deg)" : "rotate(180deg)"} />
                    </HStack>
                    <Link to="/"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"text.100"}>Contact Us</Text></Link>
                    <Link to={"/log-in"}>
                        <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} border={"1px"} color={"text.100"} bgColor={"transparent"} _hover={{ bgColor: "dark.900" }}>
                            Sign In
                        </Button>
                    </Link>
                    <Link to={"/sign-up"}>
                        <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} _hover={{ bgColor: "brand.500" }}>
                            Sign Up
                        </Button>
                    </Link>
                </HStack>
            </HStack>
            <Collapse in={menu} animateOpacity>
                <HStack ml={"45%"} w="55%" flexWrap={"wrap"} gap={"1px"} justify={"end"}>
                    {
                        GenreID.genres?.map((curr: { id: number, name: string }, indx: number) => {
                            return (
                                <Link to={"/"} key={indx}>
                                    <Text fontFamily={"Nunito"} fontWeight={"medium"} fontSize={"xxs"} color={"text.200"}>{curr.name}</Text>
                                </Link>
                            )
                        })
                    }
                </HStack>
            </Collapse>
        </VStack>
    )
}
export default NavBar;