import { FC } from 'react';
import { HStack, Button, Text, VStack, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';


interface Prop {

}

let HomePage: FC<Prop> = ({ }) => {

    const { register, handleSubmit } = useForm<{search:string}>();

    const onSubmit = handleSubmit(data => {
        console.log({ ...data })
        
      });

    return (
        <VStack w={"100%"} h={"90vh"} justify={"center"}>
            <HStack w={"50%"} as={'form'} gap="0px" bgColor={"text.200"} borderRadius={"5px"} onSubmit={onSubmit}>
                <Input {...register('search')} placeholder='Search Movie/TV Series'  fontFamily={"Nunito"} fontWeight={"semibold"} type={"text"} _placeholder={{ color: "dark.800" }} borderRadius={"5px"} bgColor={"transparent"} border={"none"} outline={"none"} _focusVisible={{ outlineColor: "none", outlineWidth: "0px" }} fontSize={"xxs"} color={"dark.500"}/>
                <Button type='submit' bg="transparent" _hover={{bg:"tranparent"}} borderRadius={"0px"} borderRightRadius={"5px"}><SearchIcon color={"dark.900"} fontSize={"sm"}/></Button>
            </HStack>
            <Text fontFamily={"Nunito"} color={"brand.400"} fontSize={"xs"}>Watch Movies/TV Servies online in HD for free</Text>
            <Button fontFamily={"Nunito"} fontWeight={"bold"} fontSize={"sm"} p="5px 30px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} _hover={{ bgColor: "brand.500" }}>Watch Now</Button>
        </VStack>
    )
}
export default HomePage;