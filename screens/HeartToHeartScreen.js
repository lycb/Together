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
    paddingLeft:10,
  },
  postWrapper: {
    margin: 10,
  },
  heartToHeart: {
    fontSize: 50,
    color: '#1176F6',
    textAlign: 'left',
    marginLeft: 20,
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
  },
});
