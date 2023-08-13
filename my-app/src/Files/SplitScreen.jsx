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
  import Discover from "../Image/NavBG1.PNG"
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading textAlign={'start'} mt={'-50px'} fontSize={[  '3xl', '4xl', '7xl' ]} ml={[0,0,'70px']} >
              <Text  fontWeight={750} color={'white'} as={'span'}>
                LIVE YOUR 
              </Text>{' '}
               <Text fontWeight={750} color={'orange.400'} as={'span'} >
                ADVENTURE 
              </Text>{' '}
            </Heading>
            <Text textAlign={'start'} fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} ml={[0,0,'70px']}>
              Don't wait until tomorrow,discover your <br/> adventure now and feel the sensation <br/>of closeness to nature around you!!!!!!!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={0}>
              <Input ml={[0,65,65]} w={['100%','100%','100%']}
              placeholder='Location'
              size={'lg'}
                bgImage={Discover}
                color={'white'}
                />
            <Input ml={[0,65,0]} w={['100%','100%','100%']}
            placeholder="Select Date and Time"
              size={'lg'}
                bgImage={Discover}
                color={'white'}
                // w={'100%'}
                type="date"
                // ml={65}
                // _hover={{
                //   bg: 'orange.400',
                // }}
                />
                <Button color={'white'} 
                bgColor={'orange.400'} pt={5} pb={5} pl={10} pr={10} 
                mt={1}
                _hover={{
                  color: 'orange.400',
                  bgColor: 'white'
                }}>Search</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              Boy}
          />
        </Flex>
      </Stack>
    )
  }