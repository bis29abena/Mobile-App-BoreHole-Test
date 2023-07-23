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
    Q: "",
    P: "",
    y: "",
    v: "",
    g: "",
    h: "",
    n: ""
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
      <View style={{ marginTop: SIZES.small }}>
        <Text style={styles.title}>Pump Sizing</Text>
        <Text style={styles.header}>Pump Sizing = (Qpgh/3.6 x 10y) X 1.1341</Text>
        <Text style={styles.header}>Q = Discharge (m^3/hr)</Text>
        <Text style={styles.header}>P = Density</Text>
        <Text style={styles.header}>g = Acceleration due to gravity</Text>
        <Text style={styles.header}>h = Elevation head (m)</Text>
        <Text style={styles.header}>v = Velocity (m/sec)</Text>
        <Text style={styles.header}>
          K = Resistance Coefficient of pipefitting
        </Text>
        <Text style={styles.header}>y = Pump efficiency</Text>
      </View>

      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q"
            placeholderTextColor="gray"
            name="Q"
            value={data.Q}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="P"
            placeholderTextColor="gray"
            name="P"
            value={data.P}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, P: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="y"
            placeholderTextColor="gray"
            name="y"
            value={data.y}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, y: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="v"
            placeholderTextColor="gray"
            name="v"
            value={data.v}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, v: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="g"
            placeholderTextColor="gray"
            name="g"
            value={data.g}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, g: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="h"
            placeholderTextColor="gray"
            name="h"
            value={data.h}
            onChanheText={(text) =>
              setData((prev) => {
                return { ...prev, g: text };
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
