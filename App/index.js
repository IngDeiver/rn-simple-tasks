import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import RootNavigator from './navigation'
import {
  Provider as PaperProvider
} from 'react-native-paper';
import { PreferencesContext } from './context'
import { CombinedDefaultTheme, CombinedDarkTheme } from './theme'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from  "react-native-splash-screen";
import { Provider } from 'react-redux'
import store from './redux/store'
import Toast from 'react-native-toast-message';


const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  });
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer theme={theme} >
              <SafeAreaProvider>
                <RootNavigator/>
                <Toast ref={(ref) => Toast.setRef(ref)} />
              </SafeAreaProvider>
            </NavigationContainer>
        </Provider>

      </PaperProvider>
    </PreferencesContext.Provider>
  )
}

export default App