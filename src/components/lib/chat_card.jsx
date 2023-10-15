import { Box, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {BsFiletypePdf} from 'react-icons/bs';
import {GoLinkExternal} from 'react-icons/go';

export default function Chat_card(props) {
  const {original_name,type_,_id} = {...props.chat};
  const router = useRouter();
  return (
    <Box 
      borderRadius={'10'} 
      bgColor='#ABBEEA' 
      w='full' 
      p='2' 
      position={'relative'}
      cursor={'pointer'}
      _hover={{
        boxShadow:'lg',
        m:'0.4'
      }}
      transition=".2s ease"
      onClick={(()=>{router.push(`/dashboard/chats/chat/${_id}`)})}
    >
      <Image
        src='/assets/chat_image.jpg'
        alt='chat_image'
        w='full'
        h='200'
        objectFit={'cover'}
        borderRadius={'5'}
        
      />
      <Box mt='2'>
        <Text fontSize={'sm'} fontWeight={'bold'}>{original_name}</Text>
        <HStack py='1'>
          <Icon
              boxSize="4"
              _groupHover={{
                  color: "#fff",
              }}
              as={BsFiletypePdf}
          />
          <Text fontSize={'xs'} fontWeight={'bold'}>{type_}</Text>
        </HStack>
        <IconButton 
          aria-label='View document' 
          icon={<GoLinkExternal />} 
          position={'absolute'} 
          top='3' 
          right='3'
        />
      </Box>
    </Box>
  )
}