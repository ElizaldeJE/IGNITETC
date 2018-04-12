



import React from 'react';
import axios from 'axios';


class CapitalLetterss extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    texts: [],
    text: "",
    title: ""
  };

}

  componentDidMount() {
    axios.get(`http://174.138.36.217/texts/`)
    .then(res => {
      const texts = res.data;
      console.log("This sorta works");
      console.log(texts);
      this.setState({ texts });
      console.log("This sorta worksssss");
    })
    
};


  render()  {
    return (
      <div>

        <ul>
        { this.state.texts.map(function(text) {
          return  <li>text</li>; }) }
        </ul>

      </div>
    )
  }
};

export default CapitalLetterss;
