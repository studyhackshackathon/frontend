import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'STUDYHACKS',
  description: 'Making complex topics easier to master.',
  icons: {
    icon: '/assets/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}