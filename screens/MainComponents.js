import DirectoryScreen from "./DirectoryScreen";
import CampsiteInfoScreen from "./campsiteInfoScreen";
import { Platform, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigator = () => {
  Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Directory"
        component="DirectoryScreen"
        option={{ title: "Campsite Directory" }}
      />
      <Stack.Screen
        name="CampsiteInfo"
        component="CampsiteInfoScreen"
        option={({ route }) => ({
          title: route.params.campsite.name,
        })}
      />
    </Stack.Navigator>
  );
};
const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <DirectoryNavigator />
    </View>
  );
};

export default Main;
