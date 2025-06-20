import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (

    <div className='item'>
        <img src={props.image} alt="" />
       <p>{props.name}</p>
        <div className="item-prices">
        <b><div className="item-price-new">
            ${props.new_price}
        </div></b>
        <div className="item-price-old">
            ${props.old_price}
        </div>
        </div>
    </div>

  )
}

export default Item