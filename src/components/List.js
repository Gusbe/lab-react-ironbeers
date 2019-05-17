import React, { Component } from 'react'
//import ItemList from 'ItemList';
import axios from 'axios';

class List extends Component {

  constructor () {
    super();

    this.state = {
      beers: null
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        console.log(response.data[0]);
        //this.setState({ beers: response.data })
      })
  }

  render() {
    console.log(this.state.beers);
    return (
      <div>
        {
          {/* this.state.beers.map( (beer) => {
            return (
              <ItemList beer={beer}/>
            );
          }) */}
        }
      </div>
    )
  }
}

export default List;
