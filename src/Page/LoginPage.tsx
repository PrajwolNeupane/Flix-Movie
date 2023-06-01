import { VStack, Heading, Button, Text, HStack, Checkbox, useToast } from '@chakra-ui/react';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { LoginInput, successToast, errorToast } from '../Component/CusomComponents';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginDataInterface, loginSchema } from '../Interface/formSchema.ts';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import login from '../Feature/Login.ts';
import BgImg from '../Assets/Image/BackgroundImage.png';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../App/store.ts';

export default function LoginPage() {

  const toast = useToast();
  const { auth } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();


  const { register, formState: { errors }, handleSubmit } = useForm<loginDataInterface>({
    resolver: yupResolver(loginSchema)
  });
  const [captchaValue, setCaptchaValue] = useState<string>();

  function onChange(value: any) {
    setCaptchaValue(value);
  }

  const onSubmit = handleSubmit(data => {
    console.log({ ...data, captchaValue: captchaValue })
    login(data.email, data.password, data.saveAuth, () => {
      successToast(toast, "Login", "Successfully");
      navigation("/");
    }, (message) => {
      errorToast(toast, message, "");
      console.log(message);
    })
  });




  return (
    <>{
      auth == undefined ? <VStack bg={`linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`} w={"100%"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <VStack bgColor={"dark.800"} borderRadius={"10px"} w={"35%"} p={"40px 30px"} alignItems={"flex-start"} as={"form"} onSubmit={onSubmit}
        >
          <Heading fontFamily={"Nunito"} fontSize={"lg"} fontWeight={"medium"} color={"text.300"}>Welcome back!</Heading>
          <LoginInput register={register} type='text' name='email' label='Account' placeholder='User email' />
          <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.email == null ? "" : errors.email.message}</Text>
          <LoginInput register={register} type='password' name='password' label='Password' placeholder='User Password' />
          <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.password == null ? "" : errors.password.message}</Text>
          <HStack>
            <Checkbox {...register("saveAuth")} outline={"none"} colorScheme={"whiteAlpha"} />
            <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>Remember me</Text>
          </HStack>
          <ReCAPTCHA style={{ margin: "10px 0px" }} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
          <Button w={"100%"} type='submit' bgColor={"brand.400"} color={"dark.700"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>Sign In</Button>
          <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>Forget your Password?</Text>
          <Link to={"/sign-up"}>
            <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>Sign up for a new account</Text>
          </Link>
        </VStack>
        <Link to={"/"}>
          <HStack >
            <ArrowBackIcon color={"brand.400"} fontSize={"xs"} />
            <Text color={"brand.400"} fontSize={"xs"}>Back to Home</Text>
          </HStack>
        </Link>
      </VStack> : <Navigate to={"/"} />
    }
    </>
  )
}
