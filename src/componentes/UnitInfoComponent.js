import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { UNITS } from "../shared/units";

function RenderUnit({ unit }) {
  if (unit) {
    return (
      <Card
        featuredTitle={unit.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{unit.lessons}</Text>
      </Card>
    );
  }
  return <View />;
}

class UnitInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: UNITS,
    };
  }

  static navigationOptions = {
    title: "Units Information",
  };

  render() {
    const unitId = this.props.navigation.getParam("unitId");
    const unit = this.state.units.filter((unit) => unit.id === unitId)[0];
    return <RenderUnit unit={unit} />;
  }
}

export default UnitInfo;
