

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Logo from '../Files/Logo'
import ListHeader from '../Files/ListHeader'


export default function Community() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm:'1fr 1fr', md:'2fr 1fr 1fr 1fr 1fr' }}
          // templateColumns='repeat(5, 1fr)'
          spacing={8}>
          <Stack spacing={6} mt={'16px'}>
            <Box>
              <Logo  color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text textAlign={'start'} fontSize={'18px'} color={'grey'} fontWeight={500} >Our mission is to make everyone
             able <br/> to feel the attachment back to nature <br/>providing an unfogettable experience</Text>
          </Stack>
          <Stack align={'flex-start'} display={'flex'} >
            <ListHeader>About Us</ListHeader>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              About us
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Features
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              News & Blogs
            </Box>
            {/* <Box as="a" href={'#'}>
              Pricing
            </Box>
            <Box as="a" href={'#'}>
              Releases
            </Box> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Movement</ListHeader>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              What Travelious
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Support Us
            </Box>
            {/* <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact
            </Box>
            <Box as="a" href={'#'}>
              Partners
            </Box> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Why Travelious
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Capital
            </Box>
            <Box as="a" fontSize={'18px'} color={'grey'} fontWeight={500}>
              Services
            </Box>
            {/* <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box> */}
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
            {/* <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box> */}
          </Stack>
          
        </SimpleGrid>

        <Text mt={'15px'} fontSize={'15px'} color={'grey'} fontWeight={500} >@2021 Travelious.All rights reserved</Text>
      </Container>
    </Box>
  )
}