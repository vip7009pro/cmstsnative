/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Stack = createStackNavigator();

const SplashScreen =()=> {
  return (
    <View>
      <Text>
        Nguyen Van Hung
      </Text>
    </View>
  );
}
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name='SplashScreen1' component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name='SplashScreen2' component={SplashScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
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
    display: 'flex',
    alignSelf: 'center',
    color: 'green',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
