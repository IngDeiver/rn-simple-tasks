import {
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';
  
  import {
    DefaultTheme as PaperDefaultTheme
  } from 'react-native-paper';
  
  export const CombinedDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primary: '#64dd17',
      accent: '#00c853',
    },
  };