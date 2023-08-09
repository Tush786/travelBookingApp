// // import { Link } from "react-router-dom";

// // import React from 'react'

// // const links = [
// //     {path:'/',title:"Home"},
// //     {path:'/discover',title:"Discover"},
// //     {path:'/Services',title:"Services"},
// //     {path:'/community',title:"Community"},
// //     {path:'/aboutus',title:"AboutUs"},
// //     {path:'/login',title:"Login"},
// //     {path:'/register',title:"Register"},
// // ]
// // const Navbar = () => {
// //   return (
// //     <div>
// //       {
// //         links.map((elem,i)=>{
// //             return <Link key={elem.path} to={elem.path}>{elem.title}</Link>
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default Navbar

// import { Avatar, Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Spacer, Text, useDisclosure } from '@chakra-ui/react'
// import React, { useContext, useState } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi';
// // import { ColorModeSwitcher } from '../ColorModeSwitcher';
// import { Link, useNavigate } from 'react-router-dom';
// // import { AppContext } from '../ContextApp/AppContextProvider';

// const Navbar = () => {
//     const links = [
//     {path:'/',title:"Home"},
//     {path:'/discover',title:"Discover"},
//     {path:'/Services',title:"Services"},
//     {path:'/community',title:"Community"},
//     {path:'/about-us',title:"AboutUs"},
//     {path:'/login',title:"Login"},
//     {path:'/register',title:"Register"},
// ]
//     // =================== hamberger =====================
//     const [hamber, setHamber] = useState(true);
//     const handleHamber = () => {
//         if (hamber == true) {
//             setHamber(false);
//         }
//         else {
//             setHamber(false);
//         }
//     }

//     const navigate = useNavigate();
//     // const handleAdmin = () => {
//     //     navigate('/admin');
//     // }

//     const handleRefresh = () => {
//         navigate('/');
//     }


//     const { isOpen, onOpen, onClose } = useDisclosure()


//     return (
//         <Box >
//             <Flex
//                 position={'fixed'} top={0}
//                 w={'100%'} p={3} bg={'black'} color={'white'} justifyContent={'space-around'}>
//                 <Flex cursor={'pointer'} fontSize={'20px'} fontWeight={800} >
//                     {/* <Avatar onClick={handleAdmin} mr={5} src='https://yt3.googleusercontent.com/ytc/AOPolaTeV1m4luShjHRCrzmEgy-6guc_rK1sUPn4TU5SHg=s176-c-k-c0x00ffffff-no-rj-mo' /> */}
//                     <Text m='auto' onClick={handleRefresh}>Global Creations</Text>
//                 </Flex>
//                 <Spacer />
//                 <Flex fontSize={'20px'} cursor={'pointer'} display={['none', 'none', 'flex']}>
//                     {
//                         links.map((e, i) => {
//                             return (
//                                 <Box m={'auto'} justifyContent={'center'} key={i}>
//                                     <Text m={2} mx={5}><Link key={e.path} to={e.path}  >{e.title}</Link></Text>
//                                 </Box>
//                             )
//                         })
//                     }
//                     {/* <Box my={'auto'}><ColorModeSwitcher /></Box> */}
//                 </Flex>
//                 <Box m={'auto'} display={['flex', 'flex', 'none']} color={'white'} fontSize={40} onClick={handleHamber}>
//                     <Box onClick={onOpen}><GiHamburgerMenu /></Box>
//                 </Box>
//             </Flex>

//             {hamber ? (""): (
//                 <Flex color={'white'} fontWeight={700} position={'fixed'} bg={'black'} top={'7.5vh'} w={'100%'} textAlign={'center'} fontSize={'20px'} cursor={'pointer'} display={['block', 'block', 'none']}>
//                     <>
//                         <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
//                             <DrawerOverlay />
//                             <DrawerContent>
//                                 <DrawerHeader fontSize={30} borderBottomWidth='1px' textAlign={'center'} fontWeight={700}>Global Creations</DrawerHeader>
//                                 <DrawerBody textAlign={'center'}fontWeight={600}fontSize={20} >
//                                     {
//                                         links.map((e, i) => {
//                                             return (
//                                                 <Box m={'auto'} justifyContent={'center'} key={i}>
//                                                     <Text m={2} mx={5}><Link key={e.path} to={e.path} >{e.title}</Link></Text>
//                                                 </Box>
//                                             )
//                                         })
//                                     }
//                                     {/* <Box my={'auto'} onClick={onOpen}><ColorModeSwitcher /></Box> */}
//                                 </DrawerBody>
//                             </DrawerContent>
//                         </Drawer>
//                     </>
//                 </Flex>
//             )}

//         </Box>
//     )
// }

// export default Navbar

// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Spacer,
//   IconButton,
//   Collapse,
//   Text,
//   Button,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [isMobile, setIsMobile] = useState(false);
  
//     const links = [
//     {path:'/',title:"Home"},
//     {path:'/discover',title:"Discover"},
//     {path:'/Services',title:"Services"},
//     {path:'/community',title:"Community"},
//     {path:'/about-us',title:"AboutUs"},
//     {path:'/login',title:"Login"},
//     {path:'/register',title:"Register"},
// ]
//   // You can use this function to check if the window width is less than 768px
//   const checkMobile = () => {
//     setIsMobile(window.innerWidth < 768);
//   };

//   // Listen for window resize events
//   window.addEventListener('resize', checkMobile);

//   // Initial check
//   checkMobile();
 
//   return (
//     <Box bg="gray.800" py={4}>
//       <Flex px={4} align="center" justify="space-between">
//         <Text fontSize="xl" fontWeight="bold" color="white">
//           My Website
//         </Text>
//         {isMobile ? (
//           <IconButton
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             onClick={onToggle}
//             aria-label="Toggle Navigation"
//             colorScheme="white"
//           />
//         ) : (
//           <Flex as="nav" align="center">
//             {
//               links.map((e, i) => {
//                return (
//                 <Box m={'auto'} justifyContent={'center'} key={i}>
//                     <Text m={2} mx={5}><Link key={e.path} to={e.path} >{e.title}</Link></Text>
//                      </Box>
//                  )
//             })  
//                 }
//           </Flex>
//         )}
//       </Flex>
//       {isMobile && (
//         <Collapse in={isOpen}>
//           <Box mt={4}>
//             <Flex direction="column">
//             {
//               links.map((e, i) => {
//                return (
//                 <Box m={'auto'} justifyContent={'center'} key={i}>
//                     <Text m={2} mx={5}>
//                         <Link key={e.path} to={e.path} >{e.title}</Link></Text>
//                      </Box>
//                  )
//             })  
//                 }
//             </Flex>
//           </Box>
//         </Collapse>
//       )}
//     </Box>
//   );
// };

// export default Navbar


import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
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
// import { Link } from 'react-router-dom'
import DesktopNav from './NavbarLink'
import Logo from "../Image/LOGO.PNG"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          {/* <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          /> */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image src={Logo}/>
          <Flex display={{ base: 'none', md: 'flex' }} ml={300}>
            <DesktopNav/>
          </Flex>
        </Flex>

        <Stack
          direction={'row'} 
          height={70}  
          justifyContent={'right'}  
          display="flex" 
          alignItems="center"
          textDecoration= {'none'}
          ml={100}
          spacing={50}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} cursor={'pointer'} textDecoration={'none'}>
            <Link
            href={"/login"}
              textDecoration= {'none'}
              fontWeight={700}
              color={'grey'}
              >
              Login</Link>
          </Button>
          <Button
            as={'a'}
            display={{base:'none',md:'inline-flex'}}
            padding={7}
            paddingLeft={20}
            paddingRight={20}
            borderRadius={5}
            fontWeight={700}
            color={'white'}
            bgColor={'orange'}
            _hover={{
              bg: 'pink.300',
            }}>
            <Link 
            p={2}
            href={"/register"}
            textDecoration= {'none'}
            fontSize={15}
            fontWeight={700}
            color={'white'}
            _hover={{
              textDecoration: 'none',
              color: "black",
            }}>Register</Link>
          </Button>
        </Stack>
      </Flex>

       {/* <Collapse in={isOpen} animateOpacity>
         <MobileNav /> 
      </Collapse> 
       */}
    </Box>
  )
}

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200')
//   const linkHoverColor = useColorModeValue('gray.800', 'white')
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
//   const links = [
//     {path:'/',title:"Home"},
//     {path:'/discover',title:"Discover"},
//     {path:'/Services',title:"Services"},
//     {path:'/community',title:"Community"},
//     {path:'/aboutus',title:"AboutUs"},
//     {path:'/login',title:"Login"},
//     {path:'/register',title:"Register"},
// ]

//   return (
//     <Stack direction={'row'} spacing={4}>
//       {links.map((elem,i) => (
//         <Box key={elem.path}>
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Box
//                 as="a"
//                 p={2}
//                 fontSize={'sm'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}><Link key={elem.path} to={elem.path}>{elem.title}</Link>
//               </Box>
//             </PopoverTrigger>
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   )
// }


// const MobileNav = () => {
//   return (
//     <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   )
// }

// const MobileNavItem = ({ label, children, href }: NavItem) => {
//   const { isOpen, onToggle } = useDisclosure()

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Box
//         py={2}
//         as="a"
//         href={href ?? '#'}
//         justifyContent="space-between"
//         alignItems="center"
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Box>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Box as="a" key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Box>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   )
// }

// interface NavItem {
//   label: string
//   subLabel?: string
//   children?: Array<NavItem>
//   href?: string
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: 'Inspiration',
//     children: [
//       {
//         label: 'Explore Design Work',
//         subLabel: 'Trending Design to inspire you',
//         href: '#',
//       },
//       {
//         label: 'New & Noteworthy',
//         subLabel: 'Up-and-coming Designers',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Find Work',
//     children: [
//       {
//         label: 'Job Board',
//         subLabel: 'Find your dream design job',
//         href: '#',
//       },
//       {
//         label: 'Freelance Projects',
//         subLabel: 'An exclusive list for contract work',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Learn Design',
//     href: '#',
//   },
//   {
//     label: 'Hire Designers',
//     href: '#',
//   },
// ]