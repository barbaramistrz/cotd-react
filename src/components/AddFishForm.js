import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {

nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

static propTypes = {
    addFish: PropTypes.func
}

createFish = (e) =>{
e.preventDefault();
const fish = {
    name: this.nameRef.current.value,
    price: parseFloat(this.priceRef.current.value), //in cents
    status: this.statusRef.current.value,
    desc: this.descRef.current.value,
    image: this.imageRef.current.value
}
this.props.addFish(fish);
e.currentTarget.reset();
}

  render() {

    return (
     <form className="fish-edit" onSubmit={this.createFish}>
<input name="name" type="text" ref={this.nameRef} placeholder="Name"/>
<input name="price" type="text" ref={this.priceRef} placeholder="Price"/>
<select name="status" ref={this.statusRef}>
 <option value="available">Fresh!</option>
 <option value="unavailable">Sold Out!</option>
</select>
<textarea name="desc" placeholder="Desc" ref={this.descRef}/>
<input name="image" type="text" placeholder="Image" ref={this.imageRef}/>
   <button type="submit">Add Fish</button>
   
     </form>

    );
  }
}

export default AddFishForm;
