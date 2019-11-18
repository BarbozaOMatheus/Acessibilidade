import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import Routes from "./routes";

const AppConatiner = createAppContainer(Routes);

export default class App extends Component {
  render(){
    return <AppConatiner />
  }
}