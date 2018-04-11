import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import Testerr from "../components/home/Video.jsx";


class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div>
            <div>
              <center><Testerr /></center>
            </div>
          </div>
    );
  }
};

export default Home;
