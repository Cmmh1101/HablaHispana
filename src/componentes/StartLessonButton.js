import React, { Component } from "react";
import { Button } from "react-native-elements";
import { LESSONS } from "../shared/unit_1_lessons";

class StartBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: LESSONS,
    };
  }
  render() {
    const { navigate } = this.props.navigation;

    return <Button title="Start Unit" onPress={() => navigate("Lessons")} />;
  }
}

export default StartBtn;
