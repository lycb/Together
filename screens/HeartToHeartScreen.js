import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { posts } from '../mock_data/heart_to_heart_post';



export default function HeartToHeartScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.heartToHeart}>♥ to ♥</Text>
          <FlatList
            data={posts}
            renderItem={({item}) => <Post item={item} navigation={navigation}></Post>}
          />
    </View>
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
          <Text>{item.title}</Text>
          <Text>{item.date}</Text>
          <Text>{item.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

HeartToHeartScreen.navigationOptions = {
  header: null,
};


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
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 12,
  },
  postWrapper: {
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
    fontSize: 50,
    color: '#1176F6',
    textAlign: 'left',
    marginLeft: 20,
    fontFamily: 'space-mono',
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
