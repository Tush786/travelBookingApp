'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
  Flex,
  Input,
  Button
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import ServiceBG from "../Image/ServiceBG.PNG"
import Location from "../Image/Location.PNG"
import Discover from "../Image/NavBG1.PNG"
import Boy from "../Image/Boy.PNG"
import Girl from "../Image/Girl.PNG"
import Blog from "../Image/Blog.PNG"

export default function About() {
  return (
    <Box p={4} bgImage={ServiceBG}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} >
      <Heading fontWeight={1000} fontSize={[  '2xl', '3xl', '5xl' ]} >
              <Text color={'black'} as={'span'} ml={[0,0,'-55px']}>
                START YOUR NEW 
              </Text>{' '}
               <Text color={'orange.400'} as={'span'}>
                ADVENTURE 
              </Text>{' '}
              <Text color={'black'} as={'span'}>
                AROUND THE WORLD
              </Text>{' '}
            </Heading>
        <Text fontWeight={500}fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          There are still many amazing destinations  <br/> 
          scattered around the world,you should try <br/> 
          to visit all of them.
        </Text>
      </Stack>
      <Box bgImage={Location}>
      <Image objectFit={'cover'} src={Location} m={'auto'}/>
      </Box>
      <Box>
              <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontWeight={1000} textAlign={'start'} mt={['20px','20px','-50px']} fontSize={[  '2xl', '3xl', '5xl' ]} ml={[0,0,'70px']} >
              <Text  color={'black.400'} as={'span'}>
                WHAT ADVENTURES
              </Text>{' '}
               <Text color={'black.400'} as={'span'} >
                SAY
              </Text>{' '}
              <Text color={'orange.400'} as={'span'} >
                ABOUT US
              </Text>{' '}
            </Heading>
            <Text textAlign={'start'} fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} ml={[0,0,'70px']}>
              See and discover what adveture tell us <br/> about their journey with us,we always listen <br/>to whatever exerience they have to say.
            </Text>
            <Image ml={[0,0,50]} src={Blog}/>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={Girl}
            m={'auto'}
          />
        </Flex>
         </Stack>
        </Box>
    </Box>
  )
}
