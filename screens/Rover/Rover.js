import React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const Rover = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.form_group}>
          <Text style={styles.form_text} placeholder="1234">Code</Text>
          <TextInput style={styles.form_input}/>
        </View>
        <View style={styles.form_group}>
          <Text style={styles.form_text} placeholder="pepin">Name</Text>
          <TextInput style={styles.form_input}/>
        </View>
        <View style={styles.form_group}>
          <TouchableOpacity onPress={()=> console.log('hola')}
                            style={styles.btn}
          >
            <Text style={styles.form_btn_text}>Add Rover</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 15
  },
  form_group: {
    marginTop: 30,
    marginBottom: 30,

  },
  form_input: {
    backgroundColor: "#e3e3e3",
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 20
  },
  form_text: {
    color: "#333",
    fontWeight: "bold"
  },
  btn: {
    backgroundColor: "#142950",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 50,
    borderRadius: 10
  },
  form_btn_text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold"
  }
});
export default Rover;
