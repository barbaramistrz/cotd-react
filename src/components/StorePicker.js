import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

static propTypes = {
    history: PropTypes.object
}    
myInput = React.createRef();

goToStore = (e) => {
    console.log(this.myInput)
    e.preventDefault();
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`)
}

    render(){
        return (
            <React.Fragment>
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                 <h2>Please enter a store</h2>
                 <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput}/>
                 <button type="submit">Visit store ➼</button>
                </form>
            </React.Fragment>
        )
    }
};


export default StorePicker;