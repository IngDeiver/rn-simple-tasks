import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tasks } from '../screens';

const Tab = createMaterialBottomTabNavigator();

function TaskTabNavigator() {
    return (
      <Tab.Navigator
      initialRouteName="Pending"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Done') {
            iconName = focused
              ? 'checkbox-multiple-marked-circle'
              : 'checkbox-multiple-marked-circle-outline';
          } else if (route.name === 'Pending') {
            iconName = focused ? 'close-box' : 'close-box-outline';
          } else if (route.name === 'All') {
            iconName = focused ? 'format-list-bulleted' : 'format-list-checkbox';
          }
  
          // You can return any component that you like here!
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Pending" component={Tasks} initialParams={{ filterBy: "pending" }} />
        <Tab.Screen name="Done" component={Tasks} initialParams={{ filterBy: "done" }} />
        <Tab.Screen name="All" component={Tasks} initialParams={{ filterBy: "all" }} />
      </Tab.Navigator>)
}

export default TaskTabNavigator