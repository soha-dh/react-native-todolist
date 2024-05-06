import { s } from "./TabButtonMenu.style";
import { TouchableOpacity, Text, View } from "react-native";

export function TabButtonMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
