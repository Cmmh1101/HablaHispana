import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { MODULES } from "../shared/modules";

function RenderModule({ module }) {
  if (module) {
    return (
      <Card
        featuredTitle={module.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{module.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class ModuleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: MODULES,
    };
  }

  static navigationOptions = {
    title: "Module Information",
  };

  render() {
    const moduleId = this.props.navigation.getParam("campsiteId");
    const module = this.state.modules.filter(
      (module) => module.id === moduleId
    )[0];
    return <RenderModule module={module} />;
  }
}

export default ModuleInfo;
