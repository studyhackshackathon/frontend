'use client'
import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {BiSearch} from 'react-icons/bi'

export default function Search_Input(props){
    const {set_search_query} = {...props};
    return(
        <InputGroup my='4'>
            <InputLeftElement pointerEvents='none'>
            <BiSearch color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder={props?.description} fontWeight={'semibold'} fontSize={'sm'} bg='#F6F6F6' variant={'filled'} focusBorderColor='#8B3C7F' onChange={((e)=>{set_search_query(e.target.value)})}/>
        </InputGroup>
    )
}