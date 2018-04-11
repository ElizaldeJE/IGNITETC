import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";


const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
