"use client"
import Option_Card from "@/src/components/home/option_card"
import { Box, Divider, Flex, Text } from "@chakra-ui/react"

export default function page() {
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='2' boxShadow={'sm'}>
      <Flex gap='2' direction={{base:'column',md:'row'}}>
        <Option_Card
          bodyBg={'#192A51'}
          title={'Chat with PDFs'}
          description={'Ask and let AI help you understand concepts from documents.'}
          buttonbg={'#8B3C7F'}
          buttondesc={'Upload File'}
          tagradius={'10'}
          tagColor={'#273E73'}
          tagSize={'100'}
          tag2radius={'5'}
          tag2Color={'#5578C8'}
          tag2Size={'50'}
        />
        <Option_Card
          bodyBg={'#967AA1'}
          title={'Summarize Text'}
          description={'Paste and get appropriate summaries of concepts and text.'}
          buttonbg={'#192A51'}
          buttondesc={'Paste Text'}
          tagradius={'100'}
          tagColor={'#8B3C7F'}
          tagSize={'100'}
          tag2radius={'50'}
          tag2Color={'#B051A2'}
          tag2Size={'50'}
        />
      </Flex>
      <Box>
        <Text fontWeight={'bold'} py='2'>Recent activity</Text>
        <Divider/>
      </Box>
    </Box>
  )
}