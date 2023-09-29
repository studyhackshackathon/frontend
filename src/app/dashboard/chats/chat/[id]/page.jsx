'use client'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon, Text } from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md';

export default function Page() {
    const router = useRouter();
    const pathname = usePathname().split('/');
    console.log(pathname)
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'lg'}>
        <Breadcrumb fontSize={'xs'}>
            <BreadcrumbItem>
                <Icon
                    mr="1"
                    boxSize="4"
                    _groupHover={{
                        color: "#fff",
                    }}
                    as={MdSpaceDashboard}
                />
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>chats</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{pathname[4]}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
  )
}
