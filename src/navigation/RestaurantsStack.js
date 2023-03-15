import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";

const stack = createNativeStackNavigator();

export function RestaurantsStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name={screen.restaurants.restaurants}
        component={RestaurantsScreen}
        options={{
            title: "Restaurantes"
        }}
      />
    </stack.Navigator>
  );
}
