import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    people: [],
    first_name: "",
    last_name: "",
    birth_date: ""
  };

}

  componentDidMount() {
    axios.get(`http://174.138.36.217/people/`)
    .then(res => {
      const people = res.data;
      console.log("People Data is here");
      this.setState({ people });
      console.log("People Data is here2.0!!!");
    })
};

// var dob = JSON.stringify(this.people.birth_date);
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(5, 2)) - 1;
// var day = Number(dob.substr(8, 2));
// var today = new Date();
// var age = today.getFullYear() - year;
// if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//   age--;
// }
  render() {

    return (
      <div>
        <ul>
          { this.state.people.map(person =>
            <li>
              { person.first_name + " " +
              person.last_name + " " +
              person.birth_date + " " + " Years Old"}
            </li>)}
        </ul>
      </div>
    )
  }
};
