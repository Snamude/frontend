import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'

const Popular = () => {
  return (

    <div className='popular'>
       
      
        <h1>POPULAR IN WOMEN</h1>
        <div className="popular-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8 max-w-7xl mx-auto"> 

            {data_product.map((item, i)=>{

                return <Item key={i} 
                id={item.id} name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}/>         
            })}
        </div>
    </div>
   
  )
}

export default Popular
