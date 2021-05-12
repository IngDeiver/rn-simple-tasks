import {
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';

export const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
   
    mode: 'exact',
    colors: {
       
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        
    },
};