import * as React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";
import { posts } from "../mock_data/heart_to_heart_post";
import SafeAreaView from "react-native-safe-area-view";

export default function HeartToHeartScreen({ navigation }) {
  navigation.setOptions({ headerTitle: "" });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#A5EAFB" />
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.heartToHeart}>♥ to ♥</Text>
          <TouchableHighlight underlayColor="rgba(255, 255, 255, 0)" onPress={() => navigation.navigate("Input", {item: {}, screen: "HeartToHeart"})}>
            <View style={styles.pen}>
              <Ionicons name="md-create" size={40} color="#1176F6" />
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post item={item} navigation={navigation}></Post>
          )}
          inverted={true}
        />

      </View>
    </SafeAreaView>
  );
}

function Post({ item, navigation }) {
  return (
    <View style={styles.posts}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Post", { item: item })}
        activeOpacity={0.7}
        style={styles.button}
      >
        <View style={styles.postWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.body}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

HeartToHeartScreen.navigationOptions = {
  header: null,
  headerLeft: null
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#A5EAFB"
  },
  pen: {
    marginLeft: 235,
    marginTop: 5,
  },
  debug: {
    backgroundColor: "red"
  },
  posts: {
    backgroundColor: "#FDE059",
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 12,
    paddingLeft: 10
  },
  postWrapper: {
    margin: 10
  },
  heartToHeart: {
    fontSize: 30,
    color: "#1176F6",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "space-mono"
  },
  title: {
    color: "#1176F6",
    fontSize: 20,
    fontFamily: "space-mono"
  },
  date: {
    fontSize: 15,
    fontFamily: "open-sans-bold"
  },
  body: {
    fontSize: 15,
    fontFamily: "gothic"
  }
});
