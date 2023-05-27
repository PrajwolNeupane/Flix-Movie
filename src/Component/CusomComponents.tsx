import { Input, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { LoginInputProps } from '../Interface';

export const errorToast = (toast:any,title:string,error:string) => {
  toast({
    title: title,
    description: error,
    duration: 5000,
    isClosable: true,
    status: 'error',
    position: 'bottom-right',
    
  });
}

export const successToast = (toast:any,title:string,message:string) => {
  toast({
    title: title,
    description: message,
    duration: 3000,
    isClosable: false,
    status: 'success',
    position: 'bottom-right',    
  });
}

export const LoginInput: FC<LoginInputProps> = ({ type, name, label, placeholder, register }) => {
  return (
    <>
      <Text fontFamily={"Nunito"} fontSize={"xxs"} color={"text.500"}>{label}</Text>
      <Input{...register(name, { required: true })} fontFamily={"Nunito"} fontWeight={"regular"} type={type} _placeholder={{ color: "text.500" }} placeholder={placeholder} bgColor={"dark.700"} border={"none"} outline={"none"} _focusVisible={{ outlineColor: "white", outlineWidth: "1px" }} fontSize={"xs"} color={"text.500"} />
    </>
  )
}