import "react-native-gesture-handler";
import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import BottomTabNavigator2 from "./navigation/BottomTabNavigator2";
import HomeScreen from "./screens/HomeScreen";
import HeartToHeartScreen from "./screens/HeartToHeartScreen";
import ResourcesScreen from "./screens/ResourcesScreen";
import UnsentLettersScreen from "./screens/UnsentLettersScreen";
import InputScreen from "./screens/InputScreen";
import PostScreen from "./screens/PostScreen";
import ReplyScreen from "./screens/ReplyScreen";
import useLinking from "./navigation/useLinking";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      console.disableYellowBox = true;
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          lacquer: require("./assets/fonts/Lacquer/Lacquer-Regular.ttf"),
          "indie-flower": require("./assets/fonts/Indie_Flower/IndieFlower-Regular.ttf"),
          gothic: require("./assets/fonts/Didact_Gothic/DidactGothic-Regular.ttf"),
          "open-sans-regular": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
          "open-sans-light-italic": require("./assets/fonts/Open_Sans/OpenSans-LightItalic.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="Root2" component={BottomTabNavigator2} />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                navigationOption={{ header: null }}
              />
              <Stack.Screen
                name="HeartToHeart"
                component={HeartToHeartScreen}
              />
              <Stack.Screen name="Resources" component={ResourcesScreen} />
              <Stack.Screen
                name="UnsentLetters"
                component={UnsentLettersScreen}
              />
              <Stack.Screen name="Input" component={InputScreen} />
              <Stack.Screen name="Post" component={PostScreen} />
              <Stack.Screen name="Reply" component={ReplyScreen} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
