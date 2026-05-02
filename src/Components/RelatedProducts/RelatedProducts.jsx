import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'

 const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                    return <center><Item key={i} 
                     id={item.id} name={item.name} 
                     image={item.image} 
                     new_price={item.new_price} 
                     old_price={item.old_price}/></center> 
         
                 })}
        </div>
    </div>
  )
}

export default RelatedProducts