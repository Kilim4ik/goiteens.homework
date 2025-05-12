import { Component } from "react";

class ContactListItem extends Component{
    render(){
        const {name , number , handleDelete} = this.props
        return(
            <li >
            <p>{name}: </p> <p>{number}</p>
            <button onClick={handleDelete}>x</button>
          </li> 
        )
    }
}
export default ContactListItem