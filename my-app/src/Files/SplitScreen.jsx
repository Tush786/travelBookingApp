import React, { useEffect, useState } from 'react'
import Boy from "../Image/Boy.PNG"
import style from "../Component/Productpage.module.css"
import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import Discover from "../Image/NavBG1.PNG"
  import ServiceBG from "../Image/ServiceBG.PNG"
import Productpage from '../Component/ProductPage'
import axios from 'axios'
import ProductCard from '../Component/ProductCard'
import ButtonPagination from '../Component/ButtonPagination'
  
  export default function SplitScreen() {

    const [arr, setArr] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState([])
    const [sortby, setSortby] = useState('')
    const[all,setAll]=useState("")
    const [search,setSearch]=useState('')


    let limit = 3;
    let Length = totalPage.length;
    console.log(Length)


    // <------------------- Search functionality ------------------>

    const SearchValue=Debouncing(search,1000)

  function Debouncing(search, delay) {

    const [debouncedValue, setDebouncedValue] = useState(search);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(search);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [search, delay]);
    return debouncedValue;
  }

console.log(SearchValue);
const FetchData_Search=async(SearchValue)=>{
  try {
    let Resp=await fetch(`https://voyawander-server.onrender.com/hotels?q=${SearchValue}&_limit=3`)
    let Data=await Resp.json();
    setArr(Data);
    console.log(Data)
  } catch (error) {
    console.log(error)
  }
}
// <-------------- End Search Functionality ---------------->

// <=================== Display Data -------------------->
    function getUrl(url,sortby) {
        if (sortby) {
            return `${url}&_sort=cost&_order=${sortby}`
        }
        else if(all==""){
            return url
        }
    }

    async function TotalPage() {
        try {
            let Resp = await axios.get(`https://voyawander-server.onrender.com/hotels`);
            console.log(Resp.data)
            setTotalPage(Resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const FetchData = async () => {
        let Apiurl = getUrl(
            `https://voyawander-server.onrender.com/hotels?_page=${page}&_limit=${limit}`,
            sortby
        );
        try {
            let Resp = await axios.get(Apiurl);
            console.log(Resp.data)
            setArr(Resp.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
       if(SearchValue!==""){
        FetchData_Search(SearchValue)
       }
       else{
        FetchData()
        TotalPage()
       }
        
    }, [page,sortby,
        SearchValue
    ])

    return (
      <Box>
      <Stack minH={['100vh','100vh','100vh']} direction={{ base: 'column', md:'row'}} bgImage={Discover}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontWeight={750} textAlign={'start'} mt={['20px','20px','-50px']} fontSize={[  '3xl', '4xl', '7xl' ]} ml={[0,0,'70px']} >
              <Text  color={'white'} as={'span'}>
                LIVE YOUR 
              </Text>{' '}
               <Text  color={'orange.400'} as={'span'} >
                ADVENTURE 
              </Text>{' '}
            </Heading>
            <Text textAlign={'start'} fontWeight={500} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} ml={[0,0,'70px']}>
              Don't wait until tomorrow,discover your <br/> adventure now and feel the sensation <br/>of closeness to nature around you!!!!!!!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={0}>
              <Input ml={[0,0,65]} w={['100%','100%','100%']} 
              placeholder='Location'
              type="search" value={search} onInput={(e)=>setSearch(e.target.value)}
              size={'lg'}
                bgImage={Discover}
                color={'white'}
                />
            <Input ml={[0,0,0]} w={['100%','100%','100%']}
            placeholder="Select Date and Time"
              size={'lg'}
                bgImage={Discover}
                color={'white'}
                // w={'100%'}
                type="date"
                // ml={65}
                // _hover={{
                //   bg: 'orange.400',
                // }}
                />
                <Button color={'white'} 
                bgColor={'orange.400'} pt={5} pb={5} pl={10} pr={10} 
                mt={1} 
                _hover={{
                  color: 'orange.400',
                  bgColor: 'white'
                }}>Search</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image 
            objectFit={'cover'}
            src={Boy}
            m={'auto'}
          />
        </Flex>
      </Stack>
      <div>
          {/* <input data-testid="search_key" type="search" placeholder="Search Movies" value={search} onInput={(e)=>setSearch(e.target.value)}></input> */}

            {/* <div className={style.filterbtn}>
                <button onClick={()=>setAll("")}>All</button>
                <button>Trending</button>
                <button>Popular</button>
                <button onClick={() => setSortby('asc')}>Price Low To High</button>
                <button onClick={() => setSortby('desc')}>Price Hight To Low</button>
            </div> */}
        <Stack  direction={{ base: 'column', md:'column'}} bgImage={ServiceBG}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontWeight={1000} textAlign={'start'} mt={['20px','20px','20px']} fontSize={[  '2xl', '3xl', '5xl' ]} ml={[0,0,'-250px']} >
              <Text  color={'black'} as={'span'}>
                FIND 
              </Text>{' '}
               <Text  color={'orange.400'} as={'span'} >
                POPULAR 
              </Text>{' '}<br/>
              <Text  color={'black'} as={'span'}>
                DESTINANTIONS
              </Text>
            </Heading>
            </Stack></Flex>
            </Stack>


            <div className={style.Container} >
                {
                    arr?.map((elem, i) => {
                        return <ProductCard key={i} elem={elem}  />
                    })
                }
            </div>
            <ButtonPagination setPage={setPage} page={page} Length={Length} />
        </div>
      </Box>
    )
              }