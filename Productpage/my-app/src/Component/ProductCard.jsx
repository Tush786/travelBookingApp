import React from 'react'
import style from "./ProductCard.module.css"

function ProductCard({name,url,description,cost}) {
  return (
    <div className={style.Card}>
      <img src={url} alt='name'/>
      <div>
      <h4>{name}</h4>
      <h4>{cost}</h4>
      </div>
     
      <p>{description}</p>
    </div>
  )
}

export default ProductCard
