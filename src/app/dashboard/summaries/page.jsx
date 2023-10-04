"use client"
import Action_Button from "@/src/components/lib/new_upload_button";
import Search_Input from "@/src/components/lib/search_input"
import { Box, Divider, HStack, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import {MdAdd} from 'react-icons/md';
import { BsTextLeft } from "react-icons/bs";
import Summary_card from "@/src/components/lib/summary_card";

export default function Page() {
  let arr = [1,2,3,4,5,6,7,8];
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'sm'}>
      <HStack align='center' p='2'>
        <Icon
            mr="2"
            boxSize="5"
            _groupHover={{
                color: "#fff",
            }}
            as={BsTextLeft}
        />
        <Heading fontSize={'xl'}>Summaries</Heading>
      </HStack>
      {/**The search section goes here */}
      <HStack>
        <Search_Input description='search summaries'/>
        <Action_Button
            bgColor='#8B3C7F'
            borderRadius='5'
            color='#fff'
            icon={MdAdd}
            path={'/dashboard/summaries/summary/new'}
        >
            New
        </Action_Button>
      </HStack>
      {/**The search section ends here */}
      <Divider/>
      {/**The chats section starts here */}
      <SimpleGrid minChildWidth='250px' spacing='20px' mt='2'>
        {arr?.map((index,item)=>{
          return(
            <Summary_card key={index}/>
          )
        })}
      </SimpleGrid>
      {/**The chats card goes here */}
    </Box>
  )
}
