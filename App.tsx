import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { data } from "./MOCK_DATA";
import { FlashList } from "@shopify/flash-list";
import { sections } from "./MOCK_DATA_SECTIONS";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Estratégia simples: loop com map */}

      {/* <ScrollView>
        {data.map((d) => (
          <Text key={d.id} style={{ height: 100 }}>
            {d.recipe}
          </Text>
        ))}
      </ScrollView> */}

      {/* Estratégia mais usual: Flatlist */}

      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={{ height: 100 }}>{item.recipe}</Text>
        )}
      /> */}

      {/* Estratégia mais usual: Flashlist (shopify)*/}

      {/* <View style={{ width: "100%", height: "100%" }}>
        <FlashList
          data={data}
          renderItem={({ item }) => (
            <Text style={{ height: 100 }}>{item.recipe}</Text>
          )}
          estimatedItemSize={200}
          style={{ width: "100%" }}
        />
      </View> */}

      <SectionList
        sections={sections}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.recipe}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        style={styles.sectionList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
  },
  sectionList: { width: "80%" },
  item: {
    borderColor: "grey",
    borderRadius: 8,
    borderWidth: 1,
    height: 100,
    padding: 8,
    marginVertical: 4,
  },
  sectionHeader: {
    marginTop: 16,
    borderTopColor: "grey",
    borderTopWidth: 2,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
