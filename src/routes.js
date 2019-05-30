import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#6b22d8"
    },

    headerTintColor: "#FFF"
  },
});


