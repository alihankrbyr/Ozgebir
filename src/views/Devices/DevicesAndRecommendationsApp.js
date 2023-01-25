import React from "react";
import Devices from "./DevicesAndRecommendations";
import EditDevices from "./DevicesAndRecommendationsEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddDevices from "./DevicesAndRecommendationsAdd";

const DeviceAndRecommendationApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/admin/cihazlar_ve_oneriler"
          component={Devices}
        ></Route>
        <Route
          path="/admin/DeviceRecommendationEdit"
          component={EditDevices}
        ></Route>
        <Route
          path="/admin/DeviceRecommendationAdd"
          component={AddDevices}
        ></Route>
      </Switch>
    </Router>
  );
};

export default DeviceAndRecommendationApp;
