import {Icon} from "react-native-elements"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Account} from "../screens/AccountScreen";
import {FavoriteScreen} from "../screens/FavoriteScreen";
import {RestaurantsScreen} from "../screens/RestaurantsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
<Tab.Navigator screenOptions={({route}) => ({
  tabBarActiveTintColor: "red",
  tabBarInactiveTintColor:"yellow",
  // en esta funcion definimos el icono de cada uno de los menus globales
  tabBarIcon: ({color, size}) => screenOptions(route, color, size)
})}
>
  <Tab.Screen name="Restaurantes" component={RestaurantsScreen} />
  <Tab.Screen name="Favoritos" component={FavoriteScreen} />
</Tab.Navigator>
  )
}

function screenOptions(route, color, size){
  let iconName;

  if(route.name === "Restaurantes"){
    iconName = "compass-outline";
  }
  if(route.name === "Favoritos"){
    iconName = "heart-outline";
  }
  return (
    <Icon
    type="material-community"
    name={iconName}
    color={color}
    size={size}
    />
  )
 
}