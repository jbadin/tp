import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import Scientist from "./components/Scientist";

export default function App() {
  const customData = require("./data/tp.json");
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={customData}
          renderItem={({ item }) => (
            <Scientist
              title={item.title}
              img={item.img}
              desc={item.desc}
            ></Scientist>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});