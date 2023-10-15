import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Studyhacks',
  description: 'Unlocking Your Learning Potential With AI',
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