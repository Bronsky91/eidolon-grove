import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import sproutlingsReducer from "./store/reducers/sproutlings";
import pointsReducer from "./store/reducers/points";

import GameScreen from "./screens/GameScreen";
import TodoScreen from "./screens/TodoScreen";
import GardenScreen from "./screens/GardenScreen";
import ShopScreen from "./screens/ShopScreen";

const rootReducer = combineReducers({
  sproutlings: sproutlingsReducer,
  points: pointsReducer,
});
const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Game") {
                iconName = focused ? "timer" : "timer-outline";
              } else if (route.name === "Todo") {
                iconName = "list";
              } else if (route.name === "Garden") {
                iconName = focused ? "leaf" : "leaf-outline";
              } else if (route.name === "Shop") {
                iconName = focused ? "pricetag" : "pricetag-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "green",
            inactiveTintColor: "gray",
            showLabel: false,
          }}
        >
          <Tab.Screen name="Game" component={GameScreen} />
          <Tab.Screen name="Todo" component={TodoScreen} />
          <Tab.Screen name="Garden" component={GardenScreen} />
          <Tab.Screen name="Shop" component={ShopScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
