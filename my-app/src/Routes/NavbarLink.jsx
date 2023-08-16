
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useState } from 'react'

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const[toggle,setToggle]=useState(true)
  const links = [
    {path:'discover',title:"Discover"},
    {path:'service',title:"Services"},
    {path:'community',title:"Community"},
    {path:'aboutus',title:"AboutUs"}
]

  return (
    <Stack direction={'row'} ml={150} spacing={10} height={70}  display="flex" 
    alignItems="center">
      {links.map((elem,i) => (
        <Box key={elem.path}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={'white'}
                 justifyContent={'center'}
               >
              <Link key={elem.path} activeClass="active" smooth spy to={elem.path}  style={{textDecoration:'none' ,color:'grey' ,fontSize:'15px',cursor:'pointer'}} >{elem.title}</Link>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav

