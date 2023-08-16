// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Link,
//   Collapse,
//   Icon,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
//   Image,
// } from '@chakra-ui/react'
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'
// // import { Link } from 'react-router-dom'
// import DesktopNav from './NavbarLink'
// import Logo from "../Image/LOGO.PNG"
// import Discover from "../Image/NavBG1.PNG"

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure()
  
//   return (
//     <>
//     <Box >
//       <Flex
//       bgImage={Discover}
//       // bgColor={'darkgreen'}
//       // bg={useColorModeValue('white', 'gray.800')}
//       // color={useColorModeValue('gray.600', 'white')}        
//         minH={'60px'}
//         py={2}
//         px={4}
//         borderBottom={1}
//         // borderStyle={'solid'}
//         // borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={['flex','flex', 'none' ]}>
//           {/* <IconButton
//             onClick={onToggle}
//             icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           /> */}
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//           <Flex display={'flex'} justifyContent={'center'} m={"auto"} ml={80} >
//           <Image src={Logo} w={150} h={45}/>
          
//           </Flex>
//           <Flex display={{ base: 'none', md: 'flex' }} ml={300}>
//             <DesktopNav/>
//           </Flex>
//         </Flex>

//         <Stack
//           direction={'row'} 
//           height={70}  
//           justifyContent={'right'}  
//           display="flex" 
//           alignItems="center"
//           textDecoration= {'none'}
//           ml={100}
//           spacing={50}>
//           <Button as={'a'} fontSize={'sm'} fontWeight={400} cursor={'pointer'} textDecoration={'none'}>
//             <Link
//             href={"/login"}
//               textDecoration= {'none'}
//               fontWeight={700}
//               color={'white'}
//               >
//               Login</Link>
//           </Button>
//           <Button
//             as={'a'}
//             display={{base:'none',md:'inline-flex'}}
//             padding={7}
//             paddingLeft={20}
//             paddingRight={20}
//             borderRadius={5}
//             fontWeight={700}
//             color={'white'}
//             bgColor={'orange'}
//             _hover={{
//               bg: 'pink.300',
//             }}>
//             <Link 
//             p={2}
//             href={"/register"}
//             textDecoration= {'none'}
//             fontSize={15}
//             fontWeight={700}
//             color={'white'}
//             _hover={{
//               textDecoration: 'none',
//               color: "black",
//             }}>Register</Link>
//           </Button>
//         </Stack>
//       </Flex>

//        {/* <Collapse in={isOpen} animateOpacity>
//          <MobileNav /> 
//       </Collapse> 
//        */}
//     </Box>
//     </>
//   )
  
// }

// // const DesktopNav = () => {
// //   const linkColor = useColorModeValue('gray.600', 'gray.200')
// //   const linkHoverColor = useColorModeValue('gray.800', 'white')
// //   const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
// //   const links = [
// //     {path:'/',title:"Home"},
// //     {path:'/discover',title:"Discover"},
// //     {path:'/Services',title:"Services"},
// //     {path:'/community',title:"Community"},
// //     {path:'/aboutus',title:"AboutUs"},
// //     {path:'/login',title:"Login"},
// //     {path:'/register',title:"Register"},
// // ]

// //   return (
// //     <Stack direction={'row'} spacing={4}>
// //       {links.map((elem,i) => (
// //         <Box key={elem.path}>
// //           <Popover trigger={'hover'} placement={'bottom-start'}>
// //             <PopoverTrigger>
// //               <Box
// //                 as="a"
// //                 p={2}
// //                 fontSize={'sm'}
// //                 fontWeight={500}
// //                 color={linkColor}
// //                 _hover={{
// //                   textDecoration: 'none',
// //                   color: linkHoverColor,
// //                 }}><Link key={elem.path} to={elem.path}>{elem.title}</Link>
// //               </Box>
// //             </PopoverTrigger>
// //           </Popover>
// //         </Box>
// //       ))}
// //     </Stack>
// //   )
// // }


// // const MobileNav = () => {
// //   return (
// //     <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
// //       {NAV_ITEMS.map((navItem) => (
// //         <MobileNavItem key={navItem.label} {...navItem} />
// //       ))}
// //     </Stack>
// //   )
// // }

// // const MobileNavItem = ({ label, children, href }: NavItem) => {
// //   const { isOpen, onToggle } = useDisclosure()

// //   return (
// //     <Stack spacing={4} onClick={children && onToggle}>
// //       <Box
// //         py={2}
// //         as="a"
// //         href={href ?? '#'}
// //         justifyContent="space-between"
// //         alignItems="center"
// //         _hover={{
// //           textDecoration: 'none',
// //         }}>
// //         <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
// //           {label}
// //         </Text>
// //         {children && (
// //           <Icon
// //             as={ChevronDownIcon}
// //             transition={'all .25s ease-in-out'}
// //             transform={isOpen ? 'rotate(180deg)' : ''}
// //             w={6}
// //             h={6}
// //           />
// //         )}
// //       </Box>

// //       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
// //         <Stack
// //           mt={2}
// //           pl={4}
// //           borderLeft={1}
// //           borderStyle={'solid'}
// //           borderColor={useColorModeValue('gray.200', 'gray.700')}
// //           align={'start'}>
// //           {children &&
// //             children.map((child) => (
// //               <Box as="a" key={child.label} py={2} href={child.href}>
// //                 {child.label}
// //               </Box>
// //             ))}
// //         </Stack>
// //       </Collapse>
// //     </Stack>
// //   )
// // }

// // interface NavItem {
// //   label: string
// //   subLabel?: string
// //   children?: Array<NavItem>
// //   href?: string
// // }

// // const NAV_ITEMS: Array<NavItem> = [
// //   {
// //     label: 'Inspiration',
// //     children: [
// //       {
// //         label: 'Explore Design Work',
// //         subLabel: 'Trending Design to inspire you',
// //         href: '#',
// //       },
// //       {
// //         label: 'New & Noteworthy',
// //         subLabel: 'Up-and-coming Designers',
// //         href: '#',
// //       },
// //     ],
// //   },
// //   {
// //     label: 'Find Work',
// //     children: [
// //       {
// //         label: 'Job Board',
// //         subLabel: 'Find your dream design job',
// //         href: '#',
// //       },
// //       {
// //         label: 'Freelance Projects',
// //         subLabel: 'An exclusive list for contract work',
// //         href: '#',
// //       },
// //     ],
// //   },
// //   {
// //     label: 'Learn Design',
// //     href: '#',
// //   },
// //   {
// //     label: 'Hire Designers',
// //     href: '#',
// //   },
// // ]

//New Navbar

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
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import Logo from "../Image/LOGO.PNG"
import Discover from "../Image/NavBG1.PNG"
import DesktopNav from './NavbarLink'
import MobileNav from '../Files/MobileNav'
import Nav from "../Image/NavBG12.PNG"
import { Link } from 'react-router-dom'
import Homepage from '../Component/Homepage'
import {Routes,Route} from "react-router-dom"

const Navbar=()=>{
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Box>
      <Flex
       bgImage={Discover}
        // bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton color={'white'}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    <Link to='/'>  <Image src={Logo} cursor={'pointer'} w={150} h={45} mt={3} ml={[0,0,20]}/> </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Button
             as={'a'}
             href='/login'
             textDecoration='none' 
             color='grey' 
             fontSize='15px'bgImg={Discover} 
             _hover={{
              bgImg:{Discover},
            }}
            >
            Login
          </Button>
          <Button
            as={'a'}
            href='/register'
            display={{base:'none',md:'inline-flex'}}
            // padding={2}
            pl={5}
            pr={5}
            borderRadius={10}
            fontWeight={700}
            color={'white'}
            bgColor={'orange'}
            mr={20}
            _hover={{
              bg: 'green',
              color:'orange'
            }}>
            Register
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}


export default Navbar;


