"use client"
//utilities
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Form from "./form";

export default function Page() {
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='2' boxShadow={'sm'}>
      <Form/>
    </Box>
  )
}