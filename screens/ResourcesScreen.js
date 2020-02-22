import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {TouchableOpacity, Linking, Platform } from 'react-native';

const dialCall = () => {
  let phoneNumber = 'telprompt:${1-800-273-8255}'
  Linking.openURL(phoneNumber)
}

const dialCall2 = () => {
  let phoneNumber = 'telprompt:${1−800−799−7233}'
  Linking.openURL(phoneNumber)
}

const dialCall3 = () => {
  let phoneNumber = 'telprompt:${1−800-787-3224}'
  Linking.openURL(phoneNumber)
}

export default function ResourcesScreen() {
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.screen_title}>Resources</Text>

      <OptionButton
        icon="md-desktop"
        label="National Suicide Preventon Lifeline"
        onPress={() => WebBrowser.openBrowserAsync('https://suicidepreventionlifeline.org/')}
      />



      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.TextStyle}>CALL NOW</Text>
            </TouchableOpacity>
              </View>

      <OptionButton
        icon="md-desktop"
        label="National Domestic Violence Hotline"
        onPress={() => WebBrowser.openBrowserAsync('https://www.thehotline.org/')}
        isLastOption
      />

       <OptionButton
        icon="md-desktop"
        label="National Domestic Violence Hotline En Español"
        onPress={() => WebBrowser.openBrowserAsync('https://espanol.thehotline.org/')}
        isLastOption
      />

      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={dialCall2} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.TextStyle}>CALL NOW</Text>
            </TouchableOpacity>
              </View>

      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={dialCall3} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.TextStyle}>CALL NOW TTY</Text>
            </TouchableOpacity>
              </View>

      <OptionButton
        icon="md-desktop"
        label="American Foundation for Suicide Preventon"
        onPress={() => WebBrowser.openBrowserAsync('https://afsp.org/')}
      />

      <OptionButton
        icon="md-desktop"
        label="OASIS"
        onPress={() => WebBrowser.openBrowserAsync('https://www.oasis-open.org/org')}
      />


    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
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
    backgroundColor: '#F6C2C9',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    marginTop: 10
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },

  //CALL BUTTON
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    //marginBottom: 10
  },
  button: {
 
    width: '80%',
    padding: 6,
    backgroundColor: '#F5AC41',
    borderRadius: 7,
  },
 
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
    screen_title: {
    fontSize: 45,
    color: 'black',
    textAlign: 'center'
  },
});
