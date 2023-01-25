import React from "react";
import FAQ from "./FAQ";
import EditFAQ from "./EditFAQ";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddFAQ from "./AddFAQ";

const FAQApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/sss" component={FAQ}></Route>
        <Route path="/admin/sss-duzenle" component={EditFAQ}></Route>
        <Route path="/admin/sss-ekle" component={AddFAQ}></Route>
      </Switch>
    </Router>
  );
};

export default FAQApp;
