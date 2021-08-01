import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { MODULES } from "../shared/modules";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: MODULES,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("ModuleInfo", { moduleId: item.id })}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.modules}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
