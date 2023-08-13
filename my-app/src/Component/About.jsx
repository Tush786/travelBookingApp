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
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import ServiceBG from "../Image/ServiceBG.PNG"
import Location from "../Image/Location.PNG"


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
      <Image src={Location}/>
      </Box>
    </Box>
  )
}
