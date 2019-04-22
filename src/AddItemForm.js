<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types"
=======
import React, { Component } from "react";
// import PropTypes from "prop-types"

// const AddItemForm = ({ addItem }) => {
 
//  let itemInput = React.createRef();
//  let handleSubmit = (e) => {
//     e.preventDefault();
//     addItem(itemInput.current.value);
//     e.currentTarget.reset();
//   }
 
//   console.log(itemInput.current.value)
//   return (
  
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref= { itemInput } 
//         placeholder="Enter an item"
//       />

//         <input
          
//           type="submit"
//           value = "Add Item"
//         />
//     </form>

//   );
// }
// AddItemForm.propTypes = {
//   addItem: PropTypes.func,
// }
// export default AddItemForm;
>>>>>>> parent of e4710af...  cleaned up additemform

const AddItemForm = ({ addItem }) => {
 
 let itemInput = React.createRef();
 let handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemInput.current.value);
    e.currentTarget.reset();
  }
  const hasInput = addItem.name.length > 0;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref= { itemInput } 
        placeholder="Enter an item"
      />

        <input
          disabled = {!hasInput}
          type="submit"
          value = "Add Item"
        />
    </form>

  );
}
AddItemForm.propTypes = {
  addItem: PropTypes.func,
}
export default AddItemForm;