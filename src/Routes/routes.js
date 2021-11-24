import React from "react";
import { Switch, Route } from "react-router-dom";
import { Editor, Landing } from "Components";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </>
  );
};

export default Routes;
