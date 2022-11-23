import { Text, Center, Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ColorModeSwitcher } from '../theme/coloSwitchBtn'

export default function Home() {
  return (
    <>
      <Center h={'100vh'} flexDir={'column'}>
        <Heading
          bgGradient='linear(to-l, #28cabc, #0044ff)'
          bgClip='text'
          fontSize='12vw'
          fontWeight='extrabold'
          mb={5}
          textAlign='center'
        >
          Quick Web App
        </Heading>
        <Text fontWeight={'900'} mb={3}>
          - Next.js version 13 (old folder structure)
        </Text>
        <Text fontWeight={'900'} mb={3}>
          - Typescript
        </Text>
        <Text fontWeight={'900'} mb={3}>
          - Chakra-UI
        </Text>
        <Text fontWeight={'900'} mb={3}>
          - DarkMode toggle button Setup
        </Text>
        <ColorModeSwitcher />
      </Center>
    </>
  )
}
