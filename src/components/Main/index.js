import React from "react"
import { Route, Switch } from "react-router-dom"
import Search from "../../containers/Search"
import SearchDetail from "../../containers/SearchDetail"
import "./style.css"

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/detail/:id" component={SearchDetail} />
    </Switch>
  )
}

export default Main
