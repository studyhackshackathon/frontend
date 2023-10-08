"use client"
import React, { useState } from 'react'
// utils
import { 
    AbsoluteCenter, 
    Box, 
    Divider, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Heading, 
    Input, 
    Text,
    useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
// components
import Login_btn from '../../../components/lib/auth/sign_up_btn';
import SignIn from '@/src/api/auth/signin';

export default function Form() {
    // utils
    const router = useRouter();
    const toast = useToast();
    // data handlers
    const [email,set_email]=useState('');
    const [password,set_password]=useState('');
    const [input_error,set_input_error]=useState(false);

    const payload={
        email,
        password
    }

    const handleSubmit=async()=>{
        try{
            if(password && email ){
                await SignIn(payload).then((res)=>{
                    if(res.status == 200){
                        toast({
                            title: "Successfully signed in.",
                            description: '',
                            status: 'success',
                            isClosable: true,
                            position: 'top-left',
                            variant:'left-accent'
                        })
                        router.push('/dashboard/home');
                        return ;
                    }else if(res.status == 401 && res.body.msg == 'Invalid credentials'){
                        toast({
                            title: "Failed signing in",
                            description: res.body.msg,
                            status: 'warning',
                            isClosable: true,
                            position: 'top-left',
                            variant:'left-accent'
                        })
                    }
                }).finally(()=>{
                    set_input_error(false);
                })
            }
            if(!password || !email ){
                set_input_error(true);
                return toast({
                    title: "Failed signing in",
                    description: 'all the inputs are required',
                    status: 'warning',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                })
            }
        }catch(error){
            console.log(error)
            if (error?.code === 'ERR_NETWORK'){
                toast({
                    title: "Error while signing in",
                    description: error?.message,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }else if(error?.code === 'ERR_BAD_REQUEST'){
                toast({
                    title: "Error while signing in",
                    description: error?.response?.data?.msg,
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }else{
                toast({
                    title: "Error while signing in",
                    description: '',
                    status: 'error',
                    isClosable: true,
                    position: 'top-left',
                    variant:'left-accent'
                });
                return ;
            }
        }
    }
    return (
        <Box 
            w={{base:'85%',md:'50%'}}
            m='auto' 
            mt={{base:'35%',md:'25%'}}
        >
            <Heading my='3' fontSize={'2xl'} textAlign={'center'}>Sign in to StudyHacks</Heading>
            <FormControl fontSize={'sm'} mt='2' isRequired isInvalid={input_error && email == '' ? true : false}>
                <FormLabel fontSize={'sm'}>Email</FormLabel>
                <Input value={email} placeholder='email' type='email' onChange={((e)=>{set_email(e.target.value)})}/>
                {input_error && email == '' ? 
                    <FormErrorMessage>Email is required</FormErrorMessage>
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
            <Text color='red.400' fontWeight={'semibold'} fontSize={'sm'} textAlign={'end'} my='2'>forgot password ?</Text>
            <Login_btn handleSubmit={handleSubmit}>
                Sign In
            </Login_btn>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    or
                </AbsoluteCenter>
            </Box>
            <Text textAlign={'center'} fontSize={'sm'} fontWeight={'semibold'}>Need to create an account? <span style={{color:'#8B3C7F',cursor:'pointer',fontWeight:'bold'}} onClick={(()=>router.push('/auth/signup'))}>Sign Up</span></Text>
        </Box>
    )
}