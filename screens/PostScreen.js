import * as React from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";

export default function PostScreen({ route, navigation }) {
  navigation.setOptions({ headerTitle: '' });
  const { item } = route.params;
  return (
    //<View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.posts}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.body}>{item.message}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Reply" onPress={() => navigation.navigate("Reply", { item: item, })}
        />
      </View>
      <FlatList
        data={item.reply}
        renderItem={({ item }) => <Reply item={item}></Reply>}
        keyExtractor={item => item.id}
      />
      </ScrollView>
    //</View>
  );
}

function Reply({ item }) {
  return (
    <View style={styles.reply}>
      <View style={styles.postWrapper}>
        <Text style={styles.replyDate}>{item.date}</Text>
        <Text style={styles.replyBody}>{item.message}</Text>
      </View>
    </View>
  );
}

PostScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#c9fc5a"
  },
  title: {
    color: "#1176F6",
    fontSize: 30,
    fontFamily: "space-mono",
    paddingBottom: 30
  },
  replyDate: {
    fontSize: 15,
    fontFamily: "open-sans-bold"
  },
  date: {
    fontSize: 20,
    fontFamily: "open-sans-bold"
  },
  replyBody: {
    fontSize: 15,
    fontFamily: "gothic"
  },
  body: {
    fontSize: 20,
    fontFamily: "gothic"
  },
  button: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 325,
    backgroundColor: "#FDE059",
    width: 75,
    textAlign: "center",
    padding: 5,
    height: 50,
    borderRadius: 12
  },
  backButton: {
    display: "flex",
    flexWrap: "wrap",
    width: 75,
    textAlign: "center",
    padding: 5,
    height: 50,
    borderRadius: 12
  },
  reply: {
    backgroundColor: "#F5AC41",
    borderRadius: 12,
    margin: 10
  },
  posts: {
    backgroundColor: "#FDE059",
    margin: 10,
    padding: 20,
    borderRadius: 12
  },
  postWrapper: {
    margin: 10
  }
});
