import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RoverSchema = Yup.object().shape({
   code: Yup.string()
     .min(3, 'Too Short!')
     .max(7, 'Too Long!')
     .required('Required'),
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });

const Rover = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      let rovers = [];
      const value = await AsyncStorage.getItem('rovers');
      if(value) {
        rovers = JSON.parse(value);
        let item = rovers.find((r)=>r.code.trim().toLowerCase());
        if(item === values.code.trim().toLowerCase() ) {
            return setError("Error, value already exists");
        } else {
          rovers.push({...values, code: item.code.trim().toLowerCase()});
          const json_value = JSON.stringify(rovers);
          await AsyncStorage.setItem("rovers", json_value);
        }
      } else {
        rovers.push(values);
        const json_value = JSON.stringify(rovers);
        await AsyncStorage.setItem('rovers', json_value);
      }
    } catch (error) {
      AsyncStorage.removeItem('rovers');
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Formik
            initialValues={{code: "", name: ""}}
            onSubmit={handleSubmit}
            validationSchema={RoverSchema}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.form_group}>
              <Text style={styles.form_text} placeholder="1234">Code</Text>
              <TextInput style={styles.form_input}
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}/>
                {errors.code && touched.code ? <Text style={styles.errors}>{errors.code}</Text>:null}
            </View>
            <View style={styles.form_group}>
              <Text style={styles.form_text} placeholder="pepin">Name</Text>
              <TextInput style={styles.form_input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}/>
                {errors.name && touched.name ? <Text style={styles.errors}>{errors.name}</Text>:null}
            </View>
            <View style={styles.form_group}>
              <TouchableOpacity onPress={handleSubmit}
                                style={styles.btn}
              >
                <Text style={styles.form_btn_text}>Add Rover</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        </Formik>
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
  },
  errors: {
    color: "red",
    fontSize:15,
    fontWeight: "bold"
  }
});
export default Rover;
