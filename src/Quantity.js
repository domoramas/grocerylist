import React from "react";
import PropTypes from "prop-types"

const Quantity = ({index, quantity, changeQuantity}) => {
  const isEnabled = quantity >0;
    return (
      <div className="counter">
        <button className="counter-action decrement" disabled={!isEnabled} onClick={()=>changeQuantity(index, -1)} > - </button>
        <span className="counter-quantity">{ quantity }</span>
        <button className="counter-action increment" onClick={()=>changeQuantity(index, +1)}> + </button>
      </div>
    );

}
Quantity.propTypes = {
  index: PropTypes.number,
  quantity: PropTypes.number,
  changeQuantity: PropTypes.func,
}
  
export default Quantity;