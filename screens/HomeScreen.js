import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  navigation.setOptions({ headerTitle: 'together;', headerStyle: {
            backgroundColor: '#f5ac41', }, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          }});
  return (
    <View style={styles.container}>
      <View style={styles.centerized}>
        <Image
          source={require("../assets/images/Together.png")}
          style={styles.logo}
        />
        <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.replace("Root2")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonThings}>I need help</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.replace("Root")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonThings}>I want to help</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonThings: {
    fontSize: 20,
    color: "#ef8700",
    textAlign: "center",
    fontFamily: "space-mono"
  },
  buttonGroup: {
    marginTop: 50,
  },
  centerized: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20
  },
  logo: {
    height: 250,
    resizeMode: "contain",
    marginTop: 3,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#FDE059",
    paddingLeft: 20,
    paddingRight: 20,
    width: 250,
  }
});
