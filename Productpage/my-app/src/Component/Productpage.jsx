import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import style from "./Productpage.module.css"
import ButtonPagination from './ButtonPagination';

function Productpage() {
    const [arr, setArr] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState([])
    const [sortby, setSortby] = useState('')
    const[all,setAll]=useState("")
    let limit = 9;
    let Length = totalPage.length;
    console.log(Length)

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
            let Resp = await axios.get(`http://localhost:8080/Product`);
            console.log(Resp.data)
            setTotalPage(Resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const FetchData = async () => {
        let Apiurl = getUrl(
            `http://localhost:8080/Product?_page=${page}&_limit=${limit}`,
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
        FetchData()
        TotalPage()
    }, [page,sortby])

    return (
        <div>
            <div className={style.filterbtn}>
                <button onClick={()=>setAll("")}>All</button>
                <button>Trending</button>
                <button>Popular</button>
                <button onClick={() => setSortby('asc')}>Price Low To High</button>
                <button onClick={() => setSortby('desc')}>Price Hight To Low</button>
            </div>

            <div className={style.Container} >
                {
                    arr?.map((el, i) => {
                        return <ProductCard key={i} {...el} />
                    })
                }
            </div>
            <ButtonPagination setPage={setPage} page={page} Length={Length} />
        </div>

    )
}

export default Productpage
