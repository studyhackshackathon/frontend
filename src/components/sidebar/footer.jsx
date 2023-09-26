'use client'
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import {BiLogOut} from 'react-icons/bi';
import { useRouter } from "next/navigation";

export default function Footer(){
    const router = useRouter();
    return(
        <Box
            w='full'
        >
            <Button leftIcon={<BiLogOut />} bgColor={'#192A51'} variant='solid' color='#fff' w='100%' onClick={()=>{router.push('/')}}>
                Logout
            </Button>
        </Box>
    )
}