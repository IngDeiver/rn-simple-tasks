import React, {useContext} from 'react';
import { Detail } from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import TaskTabNavigator from './TaskTabNavigator'
import { TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from '../context';

const TaskStack = createStackNavigator();

function TaskStackNavigator() {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
  return (
    <TaskStack.Navigator screenOptions={{
      headerRight: () => <TouchableRipple>
        <Switch
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
        </TouchableRipple>
    }}>
      <TaskStack.Screen name="Tasks" component={TaskTabNavigator} />
      <TaskStack.Screen name="Details" component={Detail} />
    </TaskStack.Navigator>
  );
}

export default TaskStackNavigator
