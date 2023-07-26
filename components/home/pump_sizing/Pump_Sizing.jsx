import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ModalView from "../../common/modal/ModalView";

import { COLORS, SIZES } from "../../../constants";

import styles from "./pumpsizing.style";

const Pump_Sizing = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState({
    Pumping_rate: "",
    P: "",
    Pump_efficiency: "",
    Superficial_velocity: "",
    g: "",
    Elevation_head: "",
    
  });
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 0,
        margin: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      
      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pumping rate"
            placeholderTextColor="gray"
            name="Pumping_rate"
            value={data.Pumping_rate}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Pumping_rate: text };
              })
            }
          />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pump efficiency"
            placeholderTextColor="gray"
            name="Pump_efficiency"
            value={data.Pump_efficiency}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Pump_efficiency: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Superficial velocity"
            placeholderTextColor="gray"
            name="Superficial_velocity"
            value={data.Superficial_velocity}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Superficial_velocity: text };
              })
            }
          />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Elevation head"
            placeholderTextColor="gray"
            name="Elevation_head"
            value={data.Elevation_head}
            onChanheText={(text) =>
              setData((prev) => {
                return { ...prev, Elevation_head: text };
              })
            }
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text>Choose Fitting Type</Text>
          </TouchableOpacity>
        </View>
        <Button title="Calculate" color="#0F52BA" />
      </View>
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        setData={setData}
      />
    </ScrollView>
  );
};

export default Pump_Sizing;
