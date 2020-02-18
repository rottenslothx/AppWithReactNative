import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import SecondPage from "../screens/SecondPage";
import Third from "../screens/Third";

const Stack = createStackNavigator();
const Stack_Second = createStackNavigator();
const Tab = createBottomTabNavigator();

function ReactNavigator() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Mainscreen" component={Main} />
    //     <Stack.Screen name="Thirdscreen" component={Third} />
    //   </Stack.Navigator>

    //   <Stack_Second.Navigator>
    //     <Stack_Second.Screen name="Secondscreen" component={SecondPage} />
    //   </Stack_Second.Navigator>

    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Mainscreen"
    //       component={this.NavigationContainer.Stack}
    //     />
    //     <Tab.Screen
    //       name="Secondscreen"
    //       component={this.NavigationContainer.Stack_Second}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mainscreen"
          component={
            <Stack.Navigator>
              <Stack.Screen name="Mainscreen" component={Main} />
              <Stack.Screen name="Thirdscreen" component={Third} />
            </Stack.Navigator>
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ReactNavigator;
