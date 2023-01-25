import React from "react";
import Users from "./Users";
import EditUser from "./EditUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./AddUser";

const UsersApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/kullanicilar" component={Users}></Route>
        <Route path="/admin/kullanicilar-duzenle" component={EditUser}></Route>
        <Route path="/admin/kullanicilar-ekle" component={AddUser}></Route>
      </Switch>
    </Router>
  );
};

export default UsersApp;
