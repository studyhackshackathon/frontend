import {Flex} from '@chakra-ui/react';
import Script from 'next/script';

export default function Loading({width,height,color}){
    return(
        <Flex w='full' h='100vh' bg='#fff' borderRadius={5} boxShadow={'sm'} justify={'center'} align={'center'}>
            <Script  src="https://cdn.lordicon.com/bhenfmcm.js"></Script>
            <lord-icon 
                src="https://cdn.lordicon.com/ymrqtsej.json" 
                trigger="loop" 
                colors={`primary:#8B3C7F,secondary:#ffffff`} 
                stroke="40" 
                style={{width:150,height:150,}} 
            >
            </lord-icon>
        </Flex>
    )
}