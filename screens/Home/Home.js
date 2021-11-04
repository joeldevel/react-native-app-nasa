import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>console.log('adding!')}>
        <Text style={styles.text}>
          <Ionicons name="add" size={30} color="#fafafa"/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    // poner una sombra, buscar react native shadow
    display: "flex",
    position: "absolute",
    backgroundColor: "#142950",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    bottom: 30,
    right: 30,

  },
  text: {
    display: "flex",
    color: "#fafafa",

  }
})

export default Home;
