// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import ProductCard from './ProductCard';
// import style from "./Productpage.module.css"
// import ButtonPagination from './ButtonPagination';

// function Productpage() {
//     const [arr, setArr] = useState([])
//     const [page, setPage] = useState(1);
//     const [totalPage, setTotalPage] = useState([])
//     const [sortby, setSortby] = useState('')
//     const[all,setAll]=useState("")
//     const [search,setSearch]=useState('')


//     let limit = 6;
//     let Length = totalPage.length;
//     console.log(Length)


//     // <------------------- Search functionality ------------------>

//     const SearchValue=Debouncing(search,1000)

//   function Debouncing(search, delay) {

//     const [debouncedValue, setDebouncedValue] = useState(search);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setDebouncedValue(search);
//       }, delay);

//       return () => {
//         clearTimeout(timer);
//       };
//     }, [search, delay]);
//     return debouncedValue;
//   }

// console.log(SearchValue);
// const FetchData_Search=async(SearchValue)=>{
//   try {
//     let Resp=await fetch(`https://alcazar-project-beckened-server.onrender.com/FrontPage?q=${SearchValue}`)
//     let Data=await Resp.json();
//     setArr(Data);
//     console.log(Data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// // <-------------- End Search Functionality ---------------->

// // <=================== Display Data -------------------->
//     function getUrl(url,sortby) {
//         if (sortby) {
//             return `${url}&_sort=cost&_order=${sortby}`
//         }
//         else if(all==""){
//             return url
//         }
//     }

//     async function TotalPage() {
//         try {
//             let Resp = await axios.get(`https://alcazar-project-beckened-server.onrender.com/FrontPage`);
//             console.log(Resp.data)
//             setTotalPage(Resp.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const FetchData = async () => {
//         let Apiurl = getUrl(
//             `https://alcazar-project-beckened-server.onrender.com/FrontPage?_page=${page}&_limit=${limit}`,
//             sortby
//         );
//         try {
//             let Resp = await axios.get(Apiurl);
//             console.log(Resp.data)
//             setArr(Resp.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     useEffect(() => {
//        if(SearchValue!==""){
//         FetchData_Search(SearchValue)
//        }
//        else{
//         FetchData()
//         TotalPage()
//        }
        
//     }, [page,sortby,
//         SearchValue
//     ])

//     return (
//         <div>
//           <input data-testid="search_key" type="search" placeholder="Search Movies" value={search} onInput={(e)=>setSearch(e.target.value)}></input>

//             <div className={style.filterbtn}>
//                 <button onClick={()=>setAll("")}>All</button>
//                 <button>Trending</button>
//                 <button>Popular</button>
//                 <button onClick={() => setSortby('asc')}>Price Low To High</button>
//                 <button onClick={() => setSortby('desc')}>Price Hight To Low</button>
//             </div>

//             <div className={style.Container} >
//                 {
//                     arr?.map((elem, i) => {
//                         return <ProductCard key={i} elem={elem}  />
//                     })
//                 }
//             </div>
//             <ButtonPagination setPage={setPage} page={page} Length={Length} />
//         </div>

//     )
// }

// export default Productpage