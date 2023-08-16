import React from 'react'
import style from "./Paginationbutton.module.css"
import { Button, Stack, Text } from '@chakra-ui/react'
import ServiceBG from "../Image/ServiceBG.PNG"

function ButtonPagination({setPage,page,Length}) {
  return (
    // <div className={style.btn}>
    //   <button onClick={()=>setPage(page-1)} disabled={page==1}>Previous</button>
    //   <h4>{page}</h4>
    //   <button onClick={()=>setPage(page+1)} disabled={page==Math.ceil(Length/9)}>Next</button>
    // </div>
   <Stack direction='row' spacing={4}  align={'center'} justify={'center'} bgImage={ServiceBG}> 
    <Button colorScheme='orange.400' variant='outline' onClick={()=>setPage(page-1)} isDisabled={page===1} 
    _hover={{
      bg: 'orange.400',
      color:'white'
    }}
    >
     Previous
    </Button>
    <Text>{page}</Text>
    <Button colorScheme='orange.400' variant='outline' onClick={()=>setPage(page+1)} isDisabled={page===Math.ceil(Length/3)}
    _hover={{
      bg: 'orange.400',
      color:'white'
    }}
    >
    Next
    </Button>
    </Stack>
  )
}

export default ButtonPagination