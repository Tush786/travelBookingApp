
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
import { Link } from 'react-router-dom'

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
  const links = [
    {path:'/',title:"Home"},
    {path:'/discover',title:"Discover"},
    {path:'/Services',title:"Services"},
    {path:'/community',title:"Community"},
    {path:'/aboutus',title:"AboutUs"},
//     {path:'/login',title:"Login"},
//     {path:'/register',title:"Register"},
]

  return (
    <Stack direction={'row'} spacing={40} height={70}  display="flex" 
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
                color={linkColor}
                m={'auto'} justifyContent={'center'}
                _hover={{
                  textDecoration: 'none',
                  color: 'grey',
                }}>
                  {/* <Link 
                p={2}
                href={elem.path}
                fontSize={15}
                fontWeight={600}
                color={'grey'}
                _hover={{
                  textDecoration: 'none',
                  color: "black",
                }}>
                {elem.title}
              </Link> */}
              <Link key={elem.path} to={elem.path} style={{textDecoration:'none'}} >{elem.title}</Link>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav