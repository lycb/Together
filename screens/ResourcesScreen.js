import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity, Linking, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";

const dialCall = () => {
  let phoneNumber = "telprompt:${1-800-273-8255}";
  Linking.openURL(phoneNumber);
};

const dialCall2 = () => {
  let phoneNumber = "telprompt:${1−800−799−7233}";
  Linking.openURL(phoneNumber);
};

const dialCall3 = () => {
  let phoneNumber = "telprompt:${1−800-787-3224}";
  Linking.openURL(phoneNumber);
};

export default function ResourcesScreen() {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.screenTitle}>Resources</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.linksWrapper}>
          <OptionButton
            icon="md-rose"
            label="National Suicide Preventon Lifeline"
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://suicidepreventionlifeline.org/"
              )
            }
          />
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={dialCall}
              activeOpacity={0.7}
              style={styles.callButton}
            >
              <Text style={styles.TextStyle}>CALL NOW</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.linksWrapper}>
        <OptionButton
          icon="md-rose"
          label="National Domestic Violence Hotline"
          onPress={() =>
            WebBrowser.openBrowserAsync("https://www.thehotline.org/")
          }
          isLastOption
        />

        <OptionButton
          icon="md-rose"
          label="National Domestic Violence Hotline En Español"
          onPress={() =>
            WebBrowser.openBrowserAsync("https://espanol.thehotline.org/")
          }
          isLastOption
        />

        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={dialCall2}
            activeOpacity={0.7}
            style={styles.callButton}
          >
            <Text style={styles.TextStyle}>CALL NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={dialCall3}
            activeOpacity={0.7}
            style={styles.callButton}
          >
            <Text style={styles.TextStyle}>CALL NOW TTY</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.linksWrapper}>
        <OptionButton
          icon="md-rose"
          label="American Foundation for Suicide Preventon"
          onPress={() => WebBrowser.openBrowserAsync("https://afsp.org/")}
        />
        </View>

        <View style={styles.linksWrapper}>
        <OptionButton
          icon="md-rose"
          label="OASIS"
          onPress={() =>
            WebBrowser.openBrowserAsync("https://www.oasis-open.org/org")
          }
        />
        </View>
      </ScrollView>
    </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6C2C9"
  },
  screenTitle: {
    fontSize: 30,
    color: "#ff4faf",
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "space-mono"
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderColor: "#ededed",
    marginTop: 10
  },
  optionText: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 1,
    color: "#ffd3e5",
    fontFamily: "open-sans-bold"
  },

  //CALL BUTTON
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  linksWrapper: {
    width: "80%",
    marginLeft:40,
    padding: 10,
    backgroundColor: "#ff87bb",
    borderRadius: 7,
    marginBottom:20,
  },
  callButton: {
    width: "80%",
    padding: 6,
    backgroundColor: "#FDE059",
    borderRadius: 7
  },
  TextStyle: {
    color: "#ff4faf",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "space-mono"
  }
});
