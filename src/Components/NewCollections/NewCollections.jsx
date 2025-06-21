import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections.js'
import Item from '../Item/Item.jsx'

 const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i)=>{
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

export default NewCollections