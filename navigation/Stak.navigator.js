import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Tela inicial " component={TabNavigator} />
            <Stack.Screen name="Tela posts" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;