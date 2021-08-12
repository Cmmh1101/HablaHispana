import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { UNITS } from "../shared/units";
import { LESSONS } from "../shared/unit_1_lessons";

function RenderUnit({ lesson }) {
  if (lesson) {
    return (
      <Card
        featuredTitle={lesson.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{lesson.name}</Text>
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
      lessons: LESSONS,
    };
  }

  static navigationOptions = {
    title: "Unit Information",
  };

  render() {
    const lessonId = this.props.navigation.getParam("lessonId");
    const lesson = this.state.lessons.filter(
      (lesson) => lesson.id === lessonId
    )[0];

    return (
      <View>
        <RenderUnit lesson={lesson} />
      </View>
    );
  }
}

export default UnitInfo;
