'use client'
import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Option_Card(props){
    return(
        <Box
            w='full'
            borderRadius={'5'}
            color={'#FFFFFF'}
            p='4'
            align='left'
            position={'relative'}
            bgColor={props.bodyBg}
            cursor={'pointer'}
            _hover={{
                boxShadow:'md',
            }}
            transition=".3s ease"
        >
            <Heading as='h2' fontSize={'2xl'} py='2'>{props.title}</Heading>
            <Text py='2' w={{base:'60%',md:'40%'}}>{props.description}</Text>
            <Button
                bgColor={props.buttonbg}
                borderRadius={'10'}
                fontWeight={'bold'}
                color='#fff'
            >
                {props.buttondesc}
            </Button>
            <Box 
                borderRadius={props.tagradius} 
                position={'absolute'} 
                top='10' 
                right='10' 
                boxSize={props.tagSize} 
                bgColor={props.tagColor} 
                transform={'rotate(-30deg)'}
            />
            <Box 
                borderRadius={props.tag2radius} 
                position={'absolute'} 
                top='50%' 
                right='5' 
                boxSize={props.tag2Size} 
                bgColor={props.tag2Color}
                transform={'rotate(30deg)'}
            />
        </Box>
    )
}