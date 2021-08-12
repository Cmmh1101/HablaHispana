import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { LESSONS } from "../shared/unit_1_lessons";

class Lessons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: LESSONS,
    };
  }

  static navigationOptions = {
    title: "Lessons",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderLessonsItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.Lessons}
        renderItem={renderLessonsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Lessons;
