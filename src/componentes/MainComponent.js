import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { MODULES } from "../shared/modules";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: MODULES,
    };
  }

  render() {
    return <Directory modules={this.state.modules} />;
  }
}

export default Main;
