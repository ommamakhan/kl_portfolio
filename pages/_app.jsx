import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../config/theme'
import FavIconProvider from '../components/Misc/FavIconProvider'
import React from 'react'

function KLSite({ Component, pageProps }) {
  return (
    <AnimatePresence wait>
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  )
}
export default KLSite
