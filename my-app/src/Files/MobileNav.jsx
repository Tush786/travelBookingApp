import { Stack } from "@chakra-ui/react"
import MobileNavItem from "./MobileNavItem"

const links = [
    {path:'discover',title:"Discover"},
    {path:'service',title:"Services"},
    {path:'community',title:"Community"},
    {path:'aboutus',title:"AboutUs"}
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