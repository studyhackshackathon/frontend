'use client'
import { useRouter } from "next/navigation";
import React from "react";
const { Box, Text, Image, Avatar, HStack } = require("@chakra-ui/react");

export default function Profile_Card(props){
    // utilities
    const router = useRouter();
    // data
    const {email,institution,mobile,name,password,profile_complete,profile_picture,role,_id} = {...props.user_data};
    return(
        <Box
            px={{
                base: "0",
                md: "3",
            }}
            mt={{
                base: "4",
                md: "0",
            }}
            w='full'
            pb={'2'}
        >
            <Image
                width='48'
                height='20'
                style={{marginTop:'-20'}}
                src='/assets/logo.png'
                alt='logo'
                objectFit="cover"
                margin={'auto'}
                display={{
                    base: "none",
                    md: "inline-flex",
                }}
                onClick={()=>{router.push(`/dashboard/home`)}}
                cursor={'pointer'}
            />
            <HStack>
                <Avatar
                    name={name}
                    borderRadius={'5'}
                    size='md'
                    src=''
                />
                <Box align=''>
                    <Text fontWeight={'bold'}>{name}</Text> 
                    <Text fontSize={'xx-small'} color='gray'>{email}</Text>
                    <Text fontSize={'xx-small'} color='gray'>{institution?.slice(0, 10)}...</Text>
                </Box>
            </HStack>
        </Box>
    )
}