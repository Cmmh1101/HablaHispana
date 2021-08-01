import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

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

function ModuleInfo(props) {
  return <RenderModule module={props.module} />;
}

export default ModuleInfo;
