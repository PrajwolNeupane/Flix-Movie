import { FC, useState } from 'react';
import { VStack, Heading, Button, Text, HStack, Checkbox, useToast } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { LoginInput, successToast, errorToast } from '../Component/CusomComponents';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from '@hookform/resolvers/yup';
import { signupDataInterface, signupSchema } from '../Interface/formSchema.ts';
import Signup from '../Feature/Signup.ts';
import BgImg from '../Assets/Image/BackgroundImage.png';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../App/store.ts';

const SignupPage: FC<any> = ({ }) => {

    const toast = useToast();
    const navigate = useNavigate();
    const { auth } = useAppSelector((state) => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm<signupDataInterface>({
        resolver: yupResolver(signupSchema)
    });
    const [captchaValue, setCaptchaValue] = useState<string>();

    function onChange(value: any) {
        setCaptchaValue(value);
    }

    const onSubmit = handleSubmit(data => {
        console.log({ ...data, captchaValue: captchaValue })
        Signup(data.name, data.email, data.password ? data.password : "", data.saveAuth, () => {
            successToast(toast, "User Created", "Successfully");
            navigate("/");
        }, (e) => {
            errorToast(toast, e, "");
        });

    });



    return (
        <>
            {
                auth == undefined ?
                    <VStack padding={"10px 0px"} bg={`linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`} w={"100%"} minHeight={"100vh"} h={"100%"} alignItems={"center"} justifyContent={"center"}>
                        <VStack bgColor={"dark.800"} borderRadius={"10px"} w={"35%"} p={"40px 30px"} alignItems={"flex-start"} as={"form"} onSubmit={onSubmit}
                        >
                            <Heading fontFamily={"Nunito"} fontSize={"lg"} fontWeight={"medium"} color={"text.300"}>Sign up !</Heading>
                            <LoginInput register={register} type='text' name='name' label='Name' placeholder='User name' />
                            <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.name == null ? "" : errors.name.message}</Text>
                            <LoginInput register={register} type='text' name='email' label='Account' placeholder='User email' />
                            <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.email == null ? "" : errors.email.message}</Text>
                            <LoginInput register={register} type='password' name='password' label='Password' placeholder='User Password' />
                            <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.password == null ? "" : errors.password.message}</Text>
                            <LoginInput register={register} type='password' name='repeatPassword' label='Reapeat Password' placeholder='Confirm Password' />
                            <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>{errors.repeatPassword == null ? "" : errors.repeatPassword.message}</Text>
                            <HStack>
                                <Checkbox {...register("saveAuth")} outline={"none"} colorScheme={"whiteAlpha"} />
                                <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>Remember me</Text>
                            </HStack>
                            <ReCAPTCHA style={{ margin: "10px 0px" }} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
                            <Button w={"100%"} type='submit' bgColor={"brand.400"} color={"dark.800"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>Sign In</Button>
                            <Link to={"/log-in"}>
                                <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>Have an existing account?  Sign in </Text>
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
export default SignupPage;