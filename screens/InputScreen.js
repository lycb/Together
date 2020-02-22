import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TextInput, Component } from 'react-native';


export default function InputScreen() {
  const [value, onChangeText] = React.useState('UWUOWO');
  const [value2, onChangeText2] = React.useState('UWUOWO2')
	return (
	 <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
	    <View style={styles.container}> 
	    	<Text style={styles.screen_title}>New Post</Text>
	        <Text style={styles.header}>Title</Text>
			 <TextInput style={styles.txt_input}
			     onChangeText={text => onChangeText(text)}
			     value={value}
			 />
			 <Text style={styles.header}>Message</Text>
			 <TextInput style={styles.txt_input}
			     onChangeText={text => onChangeText2(text)}
			     value={value2}
			 />
		</View>

	</ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5EAFB',
  },
  header: {
    fontSize: 30,
    color: '#1176F6',
    textAlign: 'left',
    marginLeft: 20,
    fontFamily: 'space-mono',
  },
  txt_input: {
  	height: 40,
  	borderColor: 'gray',
  	borderWidth: 1
  },
  screen_title: {
  	fontSize: 45,
    color: '#1176F6',
    textAlign: 'center'
  },
    contentContainer: {
    paddingTop: 15,
  },
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
});