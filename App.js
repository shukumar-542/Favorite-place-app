import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/Places/UI/IconButton";
import { Colors } from "./constant/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(Ionicons.font);
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.gray700,
          headerStyle  : {backgroundColor : Colors.primary500},
          contentStyle  : {backgroundColor : Colors.gray700}
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: "All Places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                size={24}
                color={tintColor || "black"}
                onPress={() => navigation.navigate("AddPlace")}
              />
            ),
          })}
        />
        <Stack.Screen name="AddPlace" component={AddPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
