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

class AddItemForm extends Component {

  state = {
    value: ""
  };
  handleValueChange = (e) => {
    this.setState({value : e.target.value }); 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({value: ""});
  }

  render(){
    console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type= "text"
          value= {this.state.value}
          onChange={this.handleValueChange}
          placeholder= "Enter an item"
        />
        <input
          type="submit"
          value = "Add Item"
          disabled = {!this.state.value}
        />
      </form>
    )
  }
}
export default AddItemForm;