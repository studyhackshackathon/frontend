'use client'
import React from "react";
const { Box, Text, Image, Avatar, HStack } = require("@chakra-ui/react");

export default function Profile_Card(){
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
            />
            <HStack>
                <Avatar
                    name='john doe'
                    borderRadius={'5'}
                    size='md'
                />
                <Box align='center'>
                    <Text fontWeight={'bold'}>Dennis Sammy</Text>
                    <Text fontSize={'xx-small'} color='gray'>dennissammy@gmail.com</Text>
                </Box>
            </HStack>
        </Box>
    )
}