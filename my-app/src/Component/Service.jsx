import React from 'react'
import Boy from "../Image/Boy.PNG"
import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import Service from "../Image/Service.PNG"
  import ServiceBG from "../Image/ServiceBG.PNG"
  
  export default function Services() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgImage={ServiceBG}>
         <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={Service}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading mt={'-50px'} fontWeight={1000} fontSize={[  '2xl', '3xl', '5xl' ]} >
              <Text color={'black'} as={'span'} ml={[0,0,'-55px']}>
                OUR
              </Text>{' '}
               <Text color={'orange.400'} as={'span'}>
                STORIES  
              </Text>{' '}
              <Text color={'black'} as={'span'}>
                WITH
              </Text>{' '}
              <Text textAlign={'start'} color={'black'} as={'span'} ml={[0,0,'-200px']} >
              ADVENTURES
              </Text>{' '}
            </Heading>
            <Text fontWeight={500} textAlign={'start'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              We are experienced in bringing adventures to <br/> start their journey,all outdoor destinations in <br/> the world are our specialities.
            </Text>
            <Text fontWeight={500} textAlign={'start'}  fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              So don't hesitate to start your adventure right <br/> now,nature has already called you!!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={0} display={'flex'} justifyContent={'space-evenly'} ml={[0,0,-20]}>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'orange.400'} fontSize={[  '2xl', '3xl', '4xl' ]} >
                  12K+
                </Text>
                <Text fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                  Success <br/> Journey
                </Text>
              </Box>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'orange.400'} fontSize={[  '2xl', '3xl', '4xl' ]}  >
                  16+
                </Text>
                <Text fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                  Awards<br/> Winning
                </Text>
              </Box>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'orange.400'} fontSize={[  '2xl', '3xl', '4xl' ]}>
                  20+
                </Text >
                <Text fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                  Years of <br/> Experience
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    )
  }
