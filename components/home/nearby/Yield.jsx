import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  
  Keyboard,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";

import styles from "./nearbyjobs.style";

const Yield = () => {
  const [ finalAnswer, setfinalAnswer]= useState("")
  const [data, setData] = useState({
    Final_Dynamic_water_level: "",
    Static_water_level: "",
    Pump_Setting: "",
    Buffer_: "",
    Pumping_rate: "",
  });

  const handleCalculate = () => {
    console.log(data);
    const allowableDrawdown = data.Pump_Setting-data.Static_water_level-data.Buffer_
    
    const maximumDrawdown = data.Final_Dynamic_water_level-data.Static_water_level
    
    const Yield = Math.round((data.Pumping_rate/maximumDrawdown))*allowableDrawdown
    setfinalAnswer(Yield)
    console.log(finalAnswer)
    console.log(Yield)
    
    
    
  };
  return (
    <ScrollView
        style={{
          flex: 1,
          padding: 0,
          margin: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
      >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >

        <View style={styles.loginPageContainer}>
          <Text style={styles.header}>Please fill all the fields</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Final Dynamic water level"
              placeholderTextColor="gray"
              name="Final_Dynamic_water_level"
              value={data.Final_Dynamic_water_level}
              keyboardType="numeric"
              onChangeText={(text) =>
                setData((prev) => {
                  return { ...prev, Final_Dynamic_water_level: text };
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Static water level"
              placeholderTextColor="gray"
              keyboardType="numeric"
              name="Static_water_level"
              value={data.Static_water_level}
              onChangeText={(text) =>
                setData((prev) => {
                  return { ...prev, Static_water_level: text };
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Pump Setting"
              placeholderTextColor="gray"
              keyboardType="numeric"
              name="Pump_Setting"
              value={data.Pump_Setting}
              onChangeText={(text) =>
                setData((prev) => {
                  return { ...prev, Pump_Setting: text };
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Buffer"
              placeholderTextColor="gray"
              keyboardType="numeric"
              name="Buffer_"
              value={data.Buffer_}
              onChangeText={(text) =>
                setData((prev) => {
                  return { ...prev, Buffer_: text };
                })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Pumping rate"
              placeholderTextColor="gray"
              keyboardType="numeric"
              name="Pumping_rate"
              value={data.Pumping_rate}
              onChangeText={(text) =>
                setData((prev) => {
                  return { ...prev, Pumping_rate: text };
                })
              }
            />
          </View>

          <Button onPress={handleCalculate} title="Calculate" color="#0F52BA" />
        </View>
      
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Yield;