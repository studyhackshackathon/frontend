'use client'
import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Option_Card(props){
    const router = useRouter();
    return(
        <Box
            w='full'
            borderRadius={'10'}
            color={'#FFFFFF'}
            p='4'
            align='left'
            position={'relative'}
            bgColor={props.option.bodyBg}
            cursor={'pointer'}
            _hover={{
                boxShadow:'md',
            }}
            transition=".3s ease"
        >
            <Heading as='h2' fontSize={'2xl'} py='2'>{props.option.title}</Heading>
            <Text py='2' w={{base:'60%',md:'40%'}}>{props.option.description}</Text>
            <Button
                bgColor={props.option.buttonbg}
                borderRadius={'10'}
                fontWeight={'bold'}
                color='#fff'
                onClick={(()=>{router.push(`${props?.option?.path}`)})}
            >
                {props.option.buttondesc}
            </Button>
            <Box 
                borderRadius={props.option.tagradius} 
                position={'absolute'} 
                top='10' 
                right='10' 
                boxSize={props.option.tagSize} 
                bgColor={props.option.tagColor} 
                transform={'rotate(-30deg)'}
            />
            <Box 
                borderRadius={props.option.tag2radius} 
                position={'absolute'} 
                top='50%' 
                right='5' 
                boxSize={props.option.tag2Size} 
                bgColor={props.option.tag2Color}
                transform={'rotate(30deg)'}
            />
        </Box>
    )
}