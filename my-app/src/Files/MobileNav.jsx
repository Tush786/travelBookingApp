import { Stack } from "@chakra-ui/react"
import MobileNavItem from "./MobileNavItem"

const links = [
    {path:'/',title:"Home"},
    {path:'/discover',title:"Discover"},
    {path:'/Services',title:"Services"},
    {path:'/community',title:"Community"},
    {path:'/aboutus',title:"AboutUs"}
]


const MobileNav = () => {
    return (
      <Stack  p={4} display={{ md: 'none' }}>
        {links.map((navItem) => (
          <MobileNavItem key={navItem.path} {...navItem} />
        ))}
      </Stack>
    )
  }

  export default MobileNav