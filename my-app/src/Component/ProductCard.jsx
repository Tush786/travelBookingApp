import React from 'react'
import style from "./ProductCard.module.css"
import {Link} from "react-router-dom"
import ProductDetail from './ProductDetail'
import ServiceBG from "../Image/ServiceBG.PNG"
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'

function ProductCard({elem}) {
  const IMAGE =
  'https://img.freepik.com/premium-photo/orange-paper-texture-background-clean-square-wallpaper_118047-8064.jpg'
  return (
    // <div id={style.CardMain} >
    // <Link to={`/${elem.id}`}>
    // <div className={style.Card} >
    // <img  src={elem.url} alt='name'/>
    //   <div>
    //   <h4>{elem.name}</h4>
    //   <h4>₹ {elem.cost}</h4>
    //   </div>
    //   <p>{elem.description}</p>
    // </div>
    // </Link>
   <Box>
    <Center py={12} >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage:`url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
        <Link to={`/${elem.id}`}> <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={elem.url}
          /></Link> 
        </Box>
        <Stack pt={10} align={'center'}>
          <Text as={'b'} color={'gray.500'} fontSize={{ base: 'md', lg: 'lg' }} textTransform={'uppercase'}>
            {elem.name}
          </Text>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {elem.description}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ₹ {elem.cost}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </Box>
  )
}
 

export default ProductCard