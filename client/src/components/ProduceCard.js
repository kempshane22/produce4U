import React from 'react'

const divStyle = {
  margin: "auto",
  width: "300px",
  height: "460px",
  margin: "50px",
  color:"#78B244",
  padding:"20px"
}

const image = {
  borderRadius: "60%",
  height: "auto",
  width: "auto",
  maxWidth: "150px",
  maxHeight: "150px"
}
function ProduceCard(props){
  return (
    <div className="produce4U-tile" style={divStyle}>
    <br />
    <a href="/product"><img src={props.product.picture} className="produce4U-roundImage"/></a>
    <p className="product-title">{props.product.name}</p>
    <div className="quantity-form-item">
      <p>${props.product.price.toFixed(2)}{" Per "}{props.product.pricing_type} </p>
      <p>{props.product.distance} miles away</p>
    </div>
    <p>Stars: {props.product.rating}</p>
    <p className="produce4U-producer product-producer">{props.product.owner_username}</p>
    </div>
  )
}

export default ProduceCard
