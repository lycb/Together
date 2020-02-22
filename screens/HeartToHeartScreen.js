import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { posts } from '../mock_data/heart_to_heart_post';

export default function HeartToHeartScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.heartToHeart}>💓 to 💓</Text>
        <View style={styles.postsContainer}>
          <View style={styles.posts}>
          <FlatList
            data={posts}
            renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
          />
          </View>
        </View>
    </View>
  );
}

function Posts({ title, date, message }) {
  return (
    <RectButton style={styles.debug}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text style={styles.optionText}>{title}</Text>
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{date}</Text>
          <Text>{message}</Text>
        </View>
      </View>
    </RectButton>
  );
}

HeartToHeartScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5EAFB',
  },
  debug: {
    backgroundColor: 'red',
  },
  posts: {
    backgroundColor: '#FDE059',
    margin: 10
  },
  postsContainer: {
    margin: 10,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  heartToHeart: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    marginLeft: 20
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
