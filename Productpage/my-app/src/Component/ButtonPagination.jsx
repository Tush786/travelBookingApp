import React from 'react'
import style from "./Paginationbutton.module.css"

function ButtonPagination({setPage,page,Length}) {
  return (
    <div className={style.btn}>
      <button onClick={()=>setPage(page-1)} disabled={page==1}>Previous</button>
      <h4>{page}</h4>
      <button onClick={()=>setPage(page+1)} disabled={page==Math.ceil(Length/9)}>Next</button>
    </div>
  )
}

export default ButtonPagination
