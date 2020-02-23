import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";
import { posts } from "../mock_data/unsent_Letters";

export default function UnsentLettersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.unsentLetters}> Unsent Letters </Text>
      <FlatList
        data={posts}
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
        onPress={() => navigation.navigate("Resources")}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </TouchableOpacity>
    </View>
  );
}

UnsentLettersScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbc2fb"
  },
  message: {
    height: 70,
    width: 375
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
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  postsContainer: {
    margin: 10
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  unsentLetters: {
    fontSize: 40,
    color: "rgb(104, 34, 201)",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "space-mono"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
