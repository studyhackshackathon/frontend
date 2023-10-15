import { Box, Center, Flex, Icon, Input, Text, VStack } from '@chakra-ui/react'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {AiOutlineCloudUpload} from 'react-icons/ai'

export default function Drop_Zone(props) {
  const {set_file} = {...props}
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        set_file(file)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Box 
      {...getRootProps()} 
      w='full' 
      bgColor={'#fff'} 
      borderRadius={'md'} 
      border='2px dashed' 
      borderColor={'#D9D9D9'}
      h={{
        base:'200px',
        md:'300px'
      }}
      cursor={'pointer'}
    >
      <Center margin={'auto'} h='full' textAlign={'center'} >
        <Input {...getInputProps()} />
        <Box>
          <Icon
            mr="2"
            boxSize="10"
            _groupHover={{
                color: "#fff",
            }}
            as={AiOutlineCloudUpload}
          />
          <VStack>
            <Text fontWeight={'semibold'}>
              Drag & Drop
            </Text>
            <Text fontSize={'sm'} fontWeight={'regular'} color='#D9D9D9'>
              your files here, or <span style={{textDecoration:'underline'}}>browse</span>
            </Text>
          </VStack>
        </Box>
      </Center>
    </Box>
  )
}