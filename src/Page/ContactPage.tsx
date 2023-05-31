import { Heading, VStack ,Text, Textarea,Button,Image} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { LoginInput } from '../Component/CusomComponents';
import Groot from '../Assets/Image/Groot.png';
import {FC} from 'react';

interface Props{

}

let ContactPage:FC<Props> = ({}) => {

    const { register, handleSubmit } = useForm<any>();

    const onSubmit = handleSubmit(data => {
        console.log({ ...data})
      });
    

    return (
        <VStack w={"100%"} h={"90vh"} alignItems={'center'} justifyContent={"center"}>
            <VStack bgColor={"dark.800"} borderRadius={"10px"} w={"35%"} p={"40px 30px"} alignItems={"flex-start"} as={"form"} onSubmit={onSubmit}>
                <Heading fontFamily={"Nunito"} fontSize={"md"} fontWeight={"semibold"} color={"text.300"}>Lets get connected !</Heading>
                <LoginInput register={register} type='text' name='name' label='Name' placeholder='Full Name' />
                <LoginInput register={register} type='text' name='email' label='Email' placeholder='Email Address' />
                <Text fontFamily={"Nunito"} fontSize={"xxs"} color={"text.500"}>Message</Text>
                <Textarea fontFamily={"Nunito"} fontWeight={"regular"}  _placeholder={{ color: "text.500" }} placeholder={"Hello I am under the water"} bgColor={"dark.700"} border={"none"} outline={"none"} _focusVisible={{ outlineColor: "white", outlineWidth: "1px" }} fontSize={"xs"} color={"text.500"} height={"150px"} resize={"none"}/>
                <Button w={"100%"}  type='submit' bgColor={"brand.400"} color={"dark.800"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>Send</Button>
            </VStack>
            <Image src={Groot} position={"absolute"} left={"0px"} top={"31.5%"} width={"300px"}/>
        </VStack>
    )
}
export default ContactPage;