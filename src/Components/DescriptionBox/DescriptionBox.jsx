import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews (90)</div>
        </div>
        <div className="descriptionbox-description">
        Long sleeve green Puma Jacket with a round neck and a zipper.
        </div>
    </div>
  )
}

export default DescriptionBox