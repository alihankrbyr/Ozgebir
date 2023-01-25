import React, { useState, useEffect } from "react";

import AdminLayout from "layouts/Admin.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signin from "components/Signin";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect to="/signin" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
