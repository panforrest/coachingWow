import React, { Component } from 'react'

export default (props) => {

  const item = props.item

  return (
    <div className="row">
      <div id="reservations">
        <div class="reservation">

            <h2>{item.label}</h2> 
            <img style={localStyle.icon} src={item.seller.image} />
            <span class="reservation-date">${item.price} </span>
            
        </div>    
      </div>
    </div>
  )
}

const localStyle = {
    icon: {width:28, borderRadius:14, float:'right'}
}