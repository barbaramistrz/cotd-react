import React from "react";
import PropTypes from "prop-types"
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state={
    fishes: {},
    order:{}
  };

  static propTypes = {
    match: PropTypes.object
  }

componentDidMount() {
  const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
  if(localStorageRef){
    this.setState({order: JSON.parse(localStorageRef)})
  }
  this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
    context: this,
    state: "fishes"
  })
}
componentDidUpdate(){
  localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
}


componentWillUnmount(){
base.removeBinding(this.ref)
}


  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`]=fish;
    this.setState({
      fishes
    })
  };

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({fishes})
  }

  deleteFish = (key) => {
    const fishes = {...this.state.fishes};
    fishes[key] =null;
    this.setState({fishes})
  }

  removeFishFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order})
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] +1 || 1;
    this.setState({ order})
  }
  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish index={key} key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
          </ul>
        </div>
        <Order removeFishFromOrder={this.removeFishFromOrder} fishes={this.state.fishes} order={this.state.order}/>
        <Inventory storeId={this.props.match.params.storeId} deleteFish={this.deleteFish} updateFish={this.updateFish} fishes={this.state.fishes} addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
