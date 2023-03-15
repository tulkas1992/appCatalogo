import { Icon } from "react-native-elements";
import { screen } from "../utils";
import {RestaurantsStack} from "./RestaurantsStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Account, AccountScreen } from "../screens/AccountScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RankingScreen } from "../screens/RankingScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "yellow",
        headerShown:false,
        // en esta funcion definimos el icono de cada uno de los menus globales
        tabBarIcon: ({ color, size }) =>
          screenOptionsFunctionChangedIcon(route, color, size),
      })}
    >
      <Tab.Screen name={screen.account.tab} component={AccountScreen} />
      <Tab.Screen name={screen.restaurants.tab} component={RestaurantsStack} />
      <Tab.Screen name={screen.favorites.tab} component={FavoriteScreen} />
      <Tab.Screen name={screen.search.tab} component={SearchScreen} />
      <Tab.Screen name={screen.ranking.tab} component={RankingScreen} />
    </Tab.Navigator>
  );
}

function screenOptionsFunctionChangedIcon(route, color, size) {
  let iconName;

  if (route.name === screen.restaurants.tab) {
    iconName = "compass-outline";
  }
  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name === screen.account.tab) {
    iconName = "account-circle";
  }
  if (route.name === screen.search.tab) {
    iconName = "map-search-outline";
  }
  if (route.name === screen.ranking.tab) {
    iconName = "sale";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
