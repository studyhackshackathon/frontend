import { Box, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {BsFiletypePdf} from 'react-icons/bs';
import {GoLinkExternal} from 'react-icons/go';

export default function Summary_card(props) {
  const {_id,pdf_id,type_,title}={...props?.item};
  //console.log(props?.item)
  const router = useRouter();
  return (
    <Box 
      borderRadius={'10'} 
      bgColor='#D5C6E0' 
      w='full' 
      p='2' 
      position={'relative'}
      cursor={'pointer'}
      _hover={{
        boxShadow:'lg',
        m:'0.4'
      }}
      transition=".2s ease"
      onClick={(()=>{router.push(`/dashboard/summaries/summary/${_id}`)})}
    >
      <Image
        src='/assets/chat_image.jpg'
        alt='summary_image'
        w='full'
        h='200'
        objectFit={'cover'}
        borderRadius={'5'}
        
      />
      <Box mt='2'>
        <Text fontSize={'sm'} fontWeight={'bold'}>{title? title : _id}</Text>
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
          aria-label='View summary' 
          icon={<GoLinkExternal />} 
          position={'absolute'} 
          top='3' 
          right='3'
        />
      </Box>
    </Box>
  )
}