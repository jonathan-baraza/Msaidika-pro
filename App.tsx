import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { createDrawerNavigator } from "@react-navigation/drawer";

SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "mrt-thin": require("./assets/fonts/Montserrat/Montserrat-Thin.ttf"),
    "mrt-mid": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    "mrt-semi": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
    "rb-thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
    "rb-mid": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "rb-semi": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "rb-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "rb-xbold": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View className="flex-1" onLayout={handleOnLayout}>
        <Drawer.Navigator>
          <Drawer.Screen name="Welcome" component={Welcome} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}
