//-----https://www.youtube.com/watch?v=oD5WpQJo9YY-----//
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Hello = () => <Text>Hello world</Text>;


const App: () => Node = () => {
    return(
      <View style={ styles.container }>
        <View style={ styles.containerGreen } />
        <View style={ styles.containerYellow } />
        <View style={ styles.containerBlue } />
      </View>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  containerGreen: {
    flex: 1, 
    backgroundColor: 'green'
  },
  containerYellow: {
    flex: 1, 
    backgroundColor: 'yellow'
  },
  containerBlue: {
    flex: 1, 
    backgroundColor: 'blue'
  },
});

export default App;
