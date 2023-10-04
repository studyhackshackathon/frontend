"use client"
//utilities
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react"
// components
import Option_Card from "@/src/components/home/option_card";
import Chat_card from "@/src/components/lib/chat_card";

export default function page() {
  let chats_arr = [1,2,3,4,5,6,7,8];
  let summaries_arr = [1,2,3,4,5,6,7,8];
  let arr = [...chats_arr,...summaries_arr]
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='2' boxShadow={'sm'}>
      <Flex gap='2' direction={{base:'column',md:'row'}}>
        {optionsArray?.map((option)=>{
          return(
            <Option_Card key={option?.id} option={option}/>
          )
        })}
      </Flex>
      <Box>
        <Text fontWeight={'bold'} py='2'>Recent activity</Text>
        <Divider/>
        <SimpleGrid minChildWidth='250px' spacing='20px' mt='2'>
          {arr?.slice(0,8).map((index,item)=>{
            return(
              <Chat_card key={index}/>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const optionsArray = [
  {
    id: 1,
    bodyBg:'#192A51',
    title:'Chat with PDFs',
    description:'Ask and let AI help you understand concepts from documents.',
    buttonbg:'#8B3C7F',
    buttondesc:'Upload File',
    tagradius:'10',
    tagColor:'#273E73',
    tagSize:'100',
    tag2radius:'5',
    tag2Color:'#5578C8',
    tag2Size:'50',
    path:'/dashboard/chats/chat/new'
  },
  {
    id: 2,
    bodyBg:'#967AA1',
    title:'Summarize Text',
    description:'Paste and get appropriate summaries of concepts and text.',
    buttonbg:'#192A51',
    buttondesc:'Paste Text',
    tagradius:'100',
    tagColor:'#8B3C7F',
    tagSize:'100',
    tag2radius:'50',
    tag2Color:'#B051A2',
    tag2Size:'50',
    path:'/dashboard/summaries/summary/new'
  },
]