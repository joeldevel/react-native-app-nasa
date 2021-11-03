import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Animated } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rocket from './assets/rocket.png';

// pantallas
import Home from './screens/Home';
import Detail from './screens/Detail';
import Rover from './screens/Rover';

// pila de navegacion
const Stack = createNativeStackNavigator();

const App = () => {
  const [animated, setAnimated] = useState(false);
  const [show] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(700));
  const [font] = useState(new Animated.Value(1));

  useEffect(()=> {
    Animated.parallel([
      Animated.timing( show, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
        delay: 1000
      }),
      Animated.timing( position, {
        toValue: -700,
        duration: 3000,
        useNativeDriver: false,
      })
    ]).start(()=> {
      Animated.timing( font, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }).start(()=> setAnimated(true)); // cuando todas las animaciones finalizan
    });
  }, []);
  if (!animated)
  return (
    <>
    <StatusBar animated={true} backgroundColor="#142950" barStyle="#light-content">
    </StatusBar>
    <View style={styles.container}>
      <Animated.Image style={[styles.image, {top: position}]} source={Rocket} />
      <Animated.Text style={[styles.text, {opacity: show, transform:[{scale: font}]}]}>
        Bienvenido
      </Animated.Text>
    </View>
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rover" component={Rover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#142950',
    justifyContent: 'space-around'
  },
  text: {
    color: '#fafafa',
    fontSize: 50
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});
export default App;
