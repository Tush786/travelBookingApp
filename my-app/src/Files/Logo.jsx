import { ReactNode } from 'react'
import FooterLogo from "../Image/Footer.PNG"
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

 const Logo = () => {
  return(
    <Image src={FooterLogo}/>
  )
}

export default Logo;
