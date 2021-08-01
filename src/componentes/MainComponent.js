import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import ModuleInfo from "./ModuleInfoComponent";
import { MODULES } from "../shared/modules";
import { View } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: MODULES,
      selectedModule: null,
    };
  }

  onModuleSelect(moduleId) {
    this.setState({ selectedModule: moduleId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Directory
          modules={this.state.modules}
          onPress={(moduleId) => this.onModuleSelect(moduleId)}
        />
        <ModuleInfo
          module={
            this.state.modules.filter(
              (module) => module.id === this.state.selectedModule
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
