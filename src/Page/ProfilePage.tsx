import {FC} from 'react';
import { useAppSelector } from '../App/store.ts';
import { Navigate } from 'react-router-dom';
import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';


interface Props{

}

let ProfilePage:FC<Props> = ({}) => {

    const { auth } = useAppSelector((state) => state.auth);

    return (
        <>
        {
            auth != null ? <>
          <HStack padding={'50px 5%'}>
            <VStack>
                <Avatar src={auth.photoURL || ''} width={'200px'} height={'200px'} bgColor={'text.500'}/>
            </VStack>
          </HStack>
            </> : <Navigate to={'/log-in'}/>
        }
        </>
    )
}
export default ProfilePage