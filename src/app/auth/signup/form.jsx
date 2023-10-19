"use client"
import { AbsoluteCenter, Box, Button, Divider, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
// components
import SignUp_btn from '../../../components/lib/auth/sign_up_btn';
import Mobile_Input from '../../../components/lib/auth/Mobile_Input.jsx';
import { useRouter } from 'next/navigation';
import SignUp from '@/src/api/auth/signup';


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

    const [is_submitting,set_is_submitting]=useState(false);
     
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

    const handleSubmit=async()=>{
        set_is_submitting(true)
        try{
            if(password && email && username && institution && mobile ){
                await SignUp(payload).then((res)=>{
                    if(res.status == 201){
                        toast({
                            title: "Successfully created an account.",
                            description: 'redirecting you to the login page',
                            status: 'success',
                            isClosable: true,
                            position: 'top-left',
                            variant:'left-accent'
                        })
                        router.push('/auth/signin');
                        return ;
                    }else if(res.status == 400 && res.body.msg == 'User already exists'){
                        toast({
                            title: "Failed creating an account",
                            description: res.body.msg,
                            status: 'warning',
                            isClosable: true,
                            position: 'top-left',
                            variant:'left-accent'
                        })
                    }
                }).finally(()=>{
                    set_input_error(false);
                    set_is_submitting(false);
                })
            }
            if(!password || !email || !username || !institution || !mobile){
                set_input_error(true);
                set_is_submitting(false);
                return toast({
                    title: "Failed creating an account",
                    description: 'all the inputs are required',
                    status: 'warning',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                })
            }
        }catch(error){
            //console.log(error?.response?.data?.msg)
            if (error?.code === 'ERR_NETWORK'){
                toast({
                    title: "Error while creating an account",
                    description: error?.message,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                set_is_submitting(false);
                return ;
            }else if(error?.code === 'ERR_BAD_REQUEST'){
                toast({
                    title: "Error while creating an account",
                    description: error?.response?.data?.msg,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                set_is_submitting(false);
                return ;
            }else{
                toast({
                    title: "Error while creating an account",
                    description: '',
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                set_is_submitting(false);
                return ;
            }

        }
    }


    return (
        <Box 
            w={{base:'85%',md:'50%'}}
            m='auto' 
            mt={{base:'20%',md:'20%'}}
        >
            <Heading my='3' fontSize={'2xl'} textAlign={'center'}>Sign up for StudyHacks</Heading>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && username == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Username</FormLabel>
                <Input value={username} placeholder='username' type='text' onChange={((e)=>{set_username(e.target.value)})}/>
                {input_error && username == '' ? 
                    <FormErrorMessage>Username is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && email == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Email</FormLabel>
                <Input value={email} placeholder='email' type='email' onChange={((e)=>{set_email(e.target.value)})}/>
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
                <Input value={institution} placeholder='institution ' type='text' onChange={((e)=>{set_institution(e.target.value)})}/>
                {input_error && institution == '' ? 
                    <FormErrorMessage>Institution is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <FormControl mt='2' isRequired isInvalid={input_error && password == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Password</FormLabel>
                <Input value={password} placeholder='password' type='password' onChange={((e)=>{set_password(e.target.value)})}/>
                {input_error && password == '' ? 
                    <FormErrorMessage>Password is required</FormErrorMessage>
                    : (
                    null
                )}
            </FormControl>
            <SignUp_btn handleSubmit={handleSubmit} is_submitting={is_submitting} title={'creating your account...'}> Sign Up </SignUp_btn>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    or
                </AbsoluteCenter>
            </Box>
            <Text textAlign={'center'} fontSize={'sm'} fontWeight={'semibold'}>Already have an account? <span style={{color:'#8B3C7F',cursor:'pointer',fontWeight:'bold'}} onClick={(()=>router.push('/auth/signin'))}>Sign In</span></Text>
        </Box>
    )
}
