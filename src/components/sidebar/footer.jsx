'use client'
import React from "react";
// utils
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
// components
// apis
import SignOut from "../../api/auth/signout.jsx";
// icons
import {BiLogOut} from 'react-icons/bi';

export default function Footer(props){
    const {access_token} = {...props}
    // utils
    const toast = useToast();
    const router = useRouter();
    // functions
    const handleSignOut=async()=>{
        await SignOut(access_token).then((response)=>{
            console.log(response)
            if(response.status == 200){
                toast({
                    title: "Successfully signed out",
                    description: '',
                    status: 'success',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                router.push('/');
                return ;
            }else if(response.status == 401){
                toast({
                    title: "Failed signing out",
                    description: '',
                    status: 'warning',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
            }
        }).catch((error)=>{
            console.log(error)
            if (error?.code === 'ERR_NETWORK'){
                toast({
                    title: "Error while signing out",
                    description: error?.message,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }else if(error?.code === 'ERR_BAD_REQUEST'){
                toast({
                    title: "Error while signing out",
                    description: error?.response?.data?.msg,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }else{
                toast({
                    title: "Error while signing out",
                    description: '',
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }
        })
    }
    return(
        <Box
            w='full'
        >
            <Button leftIcon={<BiLogOut />} bgColor={'#192A51'} variant='solid' color='#fff' w='100%' onClick={handleSignOut}>
                Logout
            </Button>
        </Box>
    )
}