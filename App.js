import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Animated } from 'react-native';
import Rocket from './assets/rocket.png';

const App = () => {
  const [show] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(700));

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
    ]).start();
  }, []);

  return (
    <>
    <StatusBar animated={true} backgroundColor="#142950" barStyle="#light-content">
    </StatusBar>
    <View style={styles.container}>
      <Animated.Image style={[styles.image, {top: position}]} source={Rocket} />
      <Animated.Text style={[styles.text, {opacity: show}]}>Bienvenido</Animated.Text>
    </View>
    </>
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
