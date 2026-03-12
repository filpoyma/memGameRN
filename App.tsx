import React from 'react';
import {StatusBar} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Game from './src/containers/Game';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  //const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: Colors.lighter,
  };

  React.useEffect(() => {
    BootSplash.hide({fade: true}).catch(console.error);
  }, []);

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Game />
    </SafeAreaProvider>
  );
}

export default App;
