import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Component,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { posts } from "../mock_data/heart_to_heart_post";
import { letters } from "../mock_data/unsent_Letters";
import { StackActions } from '@react-navigation/native';

export default function InputScreen({ route, navigation }) {
  navigation.setOptions({ headerTitle: "" });
  const { screen } = route.params;
  const [value, onChangeText] = React.useState("");
  const [value2, onChangeText2] = React.useState("");

  const newPost = (title, date, message) => {
    let new_id = posts.length;
    if (screen === "UnsentLetters") {
      new_id = letters.length;
    }
    const newObj = {
      new_id,
      title,
      date,
      message,
      reply: []
    };
    if (screen === "HeartToHeart") {
      posts.push(newObj);
    } else {
      letters.push(newObj);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Text style={styles.screenTitle}>New Post</Text>
        <View style={styles.newPost}>
          <Text style={styles.header}>Title</Text>
          <TextInput
            style={styles.txtInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Text style={styles.header}>Message</Text>
          <TextInput
            style={styles.txtInput}
            onChangeText={text => onChangeText2(text)}
            value={value2}
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => {
              var x = new Date();
              var y = x.getFullYear().toString();
              var m = (x.getMonth() + 1).toString();
              var d = x.getDate().toString();
              d.length == 1 && (d = "0" + d);
              m.length == 1 && (m = "0" + m);
              var yyyymmdd = y + "-" + m + "-" + d;
              newPost(value, yyyymmdd, value2);
              navigation.dispatch(StackActions.popToTop());
            }}
            title="Submit"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7de88b"
  },
  button: {
    marginTop: 15,
    backgroundColor: "#fff",
    width: "20%",
    borderRadius: 12,
    marginLeft: "75%",
  },
  header: {
    fontSize: 20,
    color: "#31bc72",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "open-sans-bold"
  },
  newPost: {
    backgroundColor: "#FDE059",
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 12,
    paddingLeft: 10
  },
  txtInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
  },
  screenTitle: {
    fontSize: 30,
    color: "#31bc72",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "space-mono"
  },
  contentContainer: {
    paddingTop: 15
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  TextStyle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  }
});
