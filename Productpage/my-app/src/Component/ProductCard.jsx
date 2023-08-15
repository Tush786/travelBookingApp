import React from 'react'
import style from "./ProductCard.module.css"
import {Link} from "react-router-dom"

function ProductCard({name,url,description,cost}) {
  return (
    <div id={style.CardMain} >
    <div >
    <div className={style.Card} >
    <img src={url} alt='name'/>
      <div>
      <h4>{name}</h4>
      <h4>₹ {cost}</h4>
      </div>
     
      <p>{description}</p>
    </div>
    </div>
   
     
    </div>
  )
}

export default ProductCard
