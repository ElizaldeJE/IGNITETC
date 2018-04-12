import React from 'react';
import axios from 'axios';

import IsPrime from "./PrimeOrNot.jsx";

class OddOrEven extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    numbers: [],
    number: Number
    }
  };

  componentDidMount() {
    axios.get(`http://174.138.36.217/numbers/`).then((response) => {
      const numbers = response.data;
      console.log("This sorta works");
      console.log(numbers);
      this.setState({ numbers });
      console.log("This sorta worksssss");
    })
};


  render() {
    return (
      <div>
          { this.state.numbers.map(numbers =>
            <li>
              {numbers.number + " is " + IsPrime }
            </li>)}
      </div>
    )
  }
};

export default OddOrEven;
