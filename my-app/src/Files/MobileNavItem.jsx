import { Box, Collapse, Icon, Stack, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const MobileNavItem = ({path,title}) => {
    const { isOpen, onToggle } = useDisclosure()
    

    const links = [
        {path:'/',title:"Home"},
        {path:'/discover',title:"Discover"},
        {path:'/Services',title:"Services"},
        {path:'/community',title:"Community"},
        {path:'/aboutus',title:"AboutUs"}
    ]

    return (
      <Stack spacing={4} onClick={onToggle}>
         <Box
          py={2}
          as="a"
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
          <Link key={path} to={path} style={{textDecoration:'none' ,color:'black'}} >{title}</Link>
         {/* {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}  */}
     </Box>
  
        {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            align={'start'}>
            {links.map((elem,i) => (
                <Link key={elem.path} to={elem.path} style={{textDecoration:'none' ,color:'black'}} >{elem.title}</Link>
    ))}
          </Stack>
        </Collapse> */}
      </Stack>
    )
  }

  export default MobileNavItem