import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerNewsDetailScreen from "../screens/BadgerNewsDetailScreen"

const NewsStack = createNativeStackNavigator()

function BadgerTabs(props) {

    return <>
        <NewsStack.Navigator>
            <NewsStack.Screen name="AllNews" component={BadgerNewsScreen} options={{ headerShown: false }}/>
            <NewsStack.Screen name="SpecificNews" component={BadgerNewsDetailScreen} options={{title: 'Article'}}/>
        </NewsStack.Navigator>
    </>
}

export default BadgerTabs;