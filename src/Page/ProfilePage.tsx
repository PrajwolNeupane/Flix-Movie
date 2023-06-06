import { FC } from 'react';
import { useAppSelector } from '../App/store.ts';
import { Navigate, useNavigate } from 'react-router-dom';
import { Avatar, Button, HStack, Text, VStack, useToast, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import Logout from '../Feature/Logout.ts';
import { errorToast, successToast } from '../Component/CusomComponents.tsx';


interface Props {

}

let ProfilePage: FC<Props> = ({ }) => {

    const { auth } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const toast = useToast();

    const signOut = () => {
        Logout(() => {
            navigate("/");
            successToast(toast, "Log Out", "Successfully");
        }, (e) => {
            errorToast(toast, "Log Out Fail", e);
        });
    }


    return (
        <>
            {
                auth != null ? <>
                    <HStack padding={'50px 5%'} gap={'50px'} alignItems={'flex-start'}>
                        <VStack gap={'0px'}>
                            <Avatar src={auth.photoURL || ''} width={'200px'} height={'200px'} bgColor={'text.500'} />
                            <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"brand.500"} m={"10px 0px"} fontWeight={"medium"} fontSize={"rg"}>{auth.displayName}</Text>
                            <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"text.300"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xs"}>{auth.email}</Text>
                            <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} borderRadius={'7px'} _hover={{ bgColor: "brand.500" }} onClick={() => {
                                alert('pl')
                            }}>
                                Change Avatar
                            </Button>
                            <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} borderRadius={'7px'} _hover={{ bgColor: "brand.500" }} onClick={() => {
                                alert('pl')
                            }}>
                                Change Password
                            </Button>
                            <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} borderRadius={'7px'} _hover={{ bgColor: "brand.500" }} onClick={() => {
                                signOut();
                            }}>
                                Log Out
                            </Button>

                        </VStack>
                        <Tabs position="relative"  variant="unstyled" isFitted align='center' w={'100%'}>
                            <TabList>
                                <Tab>
                                    <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"brand.500"} fontWeight={"medium"} fontSize={"xs"}>Movies liked<Text as={'span'} lineHeight={'90%'} fontFamily={"Nunito"} color={"text.300"} fontWeight={"regular"} fontSize={"xxs"} ml={'5px'}>20</Text></Text>
                                </Tab>
                                <Tab>
                                    <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"brand.500"} fontWeight={"medium"} fontSize={"xs"}>Watch later Movies<Text as={'span'} lineHeight={'90%'} fontFamily={"Nunito"} color={"text.300"} fontWeight={"regular"} fontSize={"xxs"} ml={'5px'}>20</Text></Text>
                                </Tab>
                                <Tab>
                                    <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"brand.500"} fontWeight={"medium"} fontSize={"xs"}>Series liked<Text as={'span'} lineHeight={'90%'} fontFamily={"Nunito"} color={"text.300"} fontWeight={"regular"} fontSize={"xxs"} ml={'5px'}>20</Text></Text>
                                </Tab>
                                <Tab>
                                    <Text lineHeight={'90%'} fontFamily={"Nunito"} color={"brand.500"} fontWeight={"medium"} fontSize={"xs"}>Watch later Series<Text as={'span'} lineHeight={'90%'} fontFamily={"Nunito"} color={"text.300"} fontWeight={"regular"} fontSize={"xxs"} ml={'5px'}>20</Text></Text>
                                </Tab>
                            </TabList>
                            <TabIndicator
                                mt="5px"
                                height="2px"
                                bg="brand.600"
                                borderRadius="7px"
                            />
                            <TabPanels>
                                <TabPanel>
                                   
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>four!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </HStack>
                </> : <Navigate to={'/log-in'} />
            }
        </>
    )
}
export default ProfilePage