

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Button
} from '@chakra-ui/react'
import Logo from '../Files/Logo'
import Pink from "../Image/Pink.PNG"
import ListHeader from '../Files/ListHeader'
import ServiceBG from "../Image/ServiceBG.PNG"

export default function Community() {
  return (
    <Box bgImage={ServiceBG} >
      <Box bgImage={Pink} borderRadius={'20px'} pt={'60px'} pb={'60px'}maxW={'6xl'} m={'auto'} >
       <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} alignItems={'center'}  >
      <Heading fontWeight={1000} fontSize={[  '2xl', '3xl', '5xl' ]} textAlign={'center'}>
              <Text color={'black'} as={'span'}  >
                GET STARTED WITH
              </Text><br/>{' '}
               <Text color={'orange.400'} as={'span'}  >
                TRAVELIOUS
              </Text>{' '}
            </Heading>
        <Text fontWeight={500}fontSize={{ base: 'md', lg: 'lg' }} color={'orange.400'}>
          Subscribe and find super attractive price quotes <br/> 
          from us,we wait for you at the best destinations <br/> 
        </Text>
        <Button
        w={['50%','50%','17%']}
       borderRadius={10}
       color={'white'}
       bgColor={'orange'}
       pl={'30px'}
       pr={'30px'}
        >Get Started</Button>
      </Stack>
      </Box>

      <Container as={Stack} maxW={'6xl'} py={10} >
        <SimpleGrid
          templateColumns={{ sm:'1fr 1fr', md:'2fr 1fr 1fr 1fr 1fr' }}
          // templateColumns='repeat(5, 1fr)'
          spacing={8}>
          <Stack spacing={6} mt={'16px'}>
            <Box>
              <Logo  color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text textAlign={'start'} fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500} >Our mission is to make everyone
             able <br/> to feel the attachment back to nature <br/>providing an unfogettable experience</Text>
          </Stack>
          <Stack align={'flex-start'} display={'flex'}  mt={['-20px',0,0]} >
            <ListHeader>About Us</ListHeader>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              About us
            </Box>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              Features
            </Box>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              News & Blogs
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Movement</ListHeader>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              What Travelious
            </Box>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              Support Us
            </Box>
 
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }}color={'grey'} fontWeight={500}>
              Why Travelious
            </Box>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }}color={'grey'} fontWeight={500}>
              Capital
            </Box>
            <Box as="a" fontSize={{ base: 'md', lg: 'lg' }} color={'grey'} fontWeight={500}>
              Services
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              FAQ's
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Support Center
            </Box>
            <Box as="a" fontSize={'18px'}color={'grey'} fontWeight={500}>
              Contact Us
            </Box>
          </Stack>
          
        </SimpleGrid>

        <Text mt={'15px'} fontSize={'15px'} color={'grey'} fontWeight={500} >@2021 Travelious.All rights reserved</Text>
      </Container>
    </Box>
  )
}