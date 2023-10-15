"use client"
import { AbsoluteCenter, Box, Button, Divider, FormControl, FormErrorMessage, FormLabel, HStack, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
// components
import SignUp_btn from '../../../components/lib/auth/sign_up_btn';
import Mobile_Input from '../../../components/lib/auth/Mobile_Input.jsx';
import SignUp from '@/src/api/auth/signup';
import Cookies from 'universal-cookie'; 
import Fetch_User from '@/src/api/auth/fetch_user';


export default function Form() {
    // utils
    const router = useRouter();
    const toast = useToast();
    // data handlers
    const [email,set_email]=useState('');
    const [username,set_username]=useState('');
    const [password,set_password]=useState('');
    const [mobile,set_mobile]=useState('');
    const [country,set_country]=useState('');
    const [institution,set_institution]=useState('');

    const [input_error,set_input_error]=useState(false);
     
    const payload={
        email,
        name: username,
        role: 'user',
        profile_complete: false,
        profile_picture:'',
        password,
        country,
        gender:'',
        institution,
        mobile
    }

    const [user_data,set_user_data]=useState({});

    const cookies = new Cookies();
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');

    useEffect(()=>{
        try{
            if(!access_user_token){
                toast({
                    title: "Your token is missing",
                    description: '',
                    status: 'info',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }
            Fetch_User(user_id,access_user_token).then((response)=>{
                //console.log(response)
                set_user_data(response?.data)
            }).catch((err)=>{
                console.log(err)
            })
        }catch(error){
            console.error(error)
        }
    },[access_user_token,user_id])

    return (
        <Box
        p='2'
        >
            <Text fontSize={'4xl'} my='4'>Profile </Text>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && username == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Username</FormLabel>
                <Input value={user_data?.name} placeholder='username' type='text' onChange={((e)=>{set_username(e.target.value)})}/>
                {input_error && username == '' ? 
                    <FormErrorMessage>Username is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && email == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Email</FormLabel>
                <Input value={user_data?.email} placeholder='email' type='email' onChange={((e)=>{set_email(e.target.value)})}/>
                {input_error && email == '' ? 
                    <FormErrorMessage>Email is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && mobile == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Mobile</FormLabel>
                <Mobile_Input
                    mobile={mobile}
                    set_mobile={set_mobile}
                    country={country}
                    set_country={set_country}
                />
                {input_error && email == '' ? 
                    <FormErrorMessage>Mobile and the country is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && institution == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Institution</FormLabel>
                <Input value={user_data?.institution} placeholder='institution ' type='text' onChange={((e)=>{set_institution(e.target.value)})}/>
                {input_error && institution == '' ? 
                    <FormErrorMessage>Iinstitution is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl mt='2' isRequired isInvalid={input_error && password == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Password</FormLabel>
                <Input value={user_data?.password} placeholder='password' type='password' onChange={((e)=>{set_password(e.target.value)})}/>
                {input_error && password == '' ? 
                    <FormErrorMessage>Password is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <Text my='4' fontSize={'lg'} color='gray.400' fontWeight={'bold'}>Settings</Text>
            <Divider/>
            <HStack my='2'>
                <Button
                    bgColor={'gray.100'}
                >
                    Change Password
                </Button>
                <Button
                    variant={'outline'}
                    color={'red'}
                    borderColor={'red'}
                >
                    Delete
                </Button>
            </HStack>
        </Box>
    )
}