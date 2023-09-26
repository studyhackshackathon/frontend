'use client'
import React from "react";
import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import {BiSearch} from 'react-icons/bi'

export default function Search_Input(props){
    return(
        <InputGroup my='4'>
            <InputLeftElement pointerEvents='none'>
            <BiSearch color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder={props?.description} fontWeight={'semibold'} fontSize={'sm'} bg='#F6F6F6' variant={'filled'} focusBorderColor='#8B3C7F'/>
        </InputGroup>
    )
}