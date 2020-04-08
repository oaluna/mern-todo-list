import React from "react";
import { store } from "../store/index";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from './TaskDetail';

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
        <Route exact path="/task/:id" render={({match})=> (<ConnectTaskDetail match={match} />)} />
      </div>
    </Provider>
  </Router>
);
