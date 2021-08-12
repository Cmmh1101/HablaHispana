import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class LessonActitvitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Button with icon component"
        />

        <Button
          icon={{
            name: "arrow-right",
            size: 15,
            color: "white",
          }}
          title="Button with icon object"
        />
      </View>
    );
  }
}

export default LessonActitvitiesList;
