import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";
import { letters } from "../mock_data/unsent_Letters";

export default function UnsentLettersScreen({ navigation }) {
  navigation.setOptions({ headerTitle: 'together;', headerStyle: {
            backgroundColor: '#f5ac41', }, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          }});
  return (
    <View style={styles.container}>
      

      <View style={{ flexDirection: "row" }}>
          <Text style={styles.unsentLetters}> Unsent Letters </Text>
          <TouchableHighlight underlayColor="rgba(255, 255, 255, 0)" onPress={() => navigation.navigate("Input", {item: {}, screen: "UnsentLetters"})}>
            <View style={styles.pen}>
              <Ionicons name="md-create" size={40} color='rgb(104, 34, 201)' />
            </View>
          </TouchableHighlight>
        </View>

      <FlatList
        data={letters}
        renderItem={({ item }) => (
          <Post item={item} navigation={navigation}></Post>
        )}
      />
    </View>
  );
}

function Post({ item, navigation }) {
  return (
    <View style={styles.posts}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Post", { item: item, })}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.body}>{item.message}</Text>
      </TouchableOpacity>
    </View>
  );
}

UnsentLettersScreen.navigationOptions = {
  header: null,
  headerLeft: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbc2fb"
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  pen: {
    marginLeft: 65,
    marginTop: 5,
  },
  posts: {
    backgroundColor: "#FDE059",
    margin: 10,
    padding: 10,
    paddingTop: 20,
    height: 150,
    borderRadius: 12
  },
  postWrapper: {
    margin: 10
  },
  unsentLetters: {
    fontSize: 30,
    color: 'rgb(104, 34, 201)',
    textAlign: 'left',
    marginLeft: 5,
    fontFamily: 'space-mono',
  },
  title: {
    color: "#1176F6",
    fontSize: 20,
    fontFamily: "space-mono",
  },
  date: {
    fontSize: 15,
    fontFamily: "open-sans-bold"
  },
  body: {
    fontSize: 15,
    fontFamily: "gothic",
    height: 50,
  },
});
