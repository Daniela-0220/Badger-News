import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BadgerNewsStack from "./BadgerNewsStack"
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";

const BadgerBottomTabs = createBottomTabNavigator()

function BadgerTabs(props) {

    return <>
        <BadgerBottomTabs.Navigator>
            <BadgerBottomTabs.Screen name="News" component={BadgerNewsStack}/>
            <BadgerBottomTabs.Screen name="Preferences" component={BadgerPreferencesScreen}/>
        </BadgerBottomTabs.Navigator>
    </>
}

export default BadgerTabs;