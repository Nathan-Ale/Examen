import { Ionicons } from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function Layout () {
    return(
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;

                    if (route.name === "inicio") {
                        iconName = focused ? "home" : "home-outline"
                    }else if(route.name === "addTask"){
                        iconName = focused ? "add-circle" : "add-circle-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor:"gray"
             })}
        />
    )
}