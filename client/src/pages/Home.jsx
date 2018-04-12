import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import PersonList from "../components/home/PersonList.jsx";
import OddOrEven from "../components/numbers/Numbers.jsx";
import CapitalLetterss from "../components/capitalLetters/MakeAllCapitals.jsx";


class People extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div>
            <div>
              <center><PersonList /></center>
              <center><OddOrEven /></center>
              <center><CapitalLetterss /></center>
            </div>
          </div>
    );
  }
};

export default People;
