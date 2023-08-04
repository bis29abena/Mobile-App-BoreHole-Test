import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import axios from "axios";

import styles from "./popularjobs.style";

const EngineeringFacts = () => {
  const [imageUri, setImageUri] = useState(null);
  const [q, setQ] = useState("");
  const [qm, setQm] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    Static_water_level: "",
    Pump_Setting: "",
    Buffer_: "",
    S1: "",
    S2: "",
    S3: "",
    S4: "",
    S5: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
  });

  const handleCalculate = async () => {
    setLoading(true);
    var isEmpty = false;

    Object.values(data).forEach((value) => {
      if (value === "") isEmpty = true;
    });

    if (isEmpty) {
      setLoading(false);
      Alert.alert("Warning", "Please fill all fields", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    } else {
      const StaticLevel = {
        s1: Number(data.S1),
        s2: Number(data.S2),
        s3: Number(data.S3),
        s4: Number(data.S4),
        s5: Number(data.S5),
      };

      const QuaterLevel = {
        q1: Number(data.Q1),
        q2: Number(data.Q2),
        q3: Number(data.Q3),
        q4: Number(data.Q4),
        q5: Number(data.Q5),
      };

      const STP = {
        static_water_level: Number(data.Static_water_level),
        pump_setting: Number(data.Pump_Setting),
        buffer_: Number(data.Buffer_),
        StaticLevel: StaticLevel,
        QuaterLevel: QuaterLevel,
      };

      try {
        const res = await axios.post(
          "https://engineer-api-5e8f00dc3272.herokuapp.com/graph/",
          STP,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (Object.values(res.data).length > 0) {
          await convertBufferToImage(res.data.image);
          setQ(res.data.q);
          setQm(res.data.qm);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert("Error", error, [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
      }
    }
  };

  const convertBufferToImage = async (buffer) => {
    setImageUri(`data:image/jpeg;base64,${buffer}`);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Static water level"
            placeholderTextColor="gray"
            name="Static_water_level"
            keyboardType="numeric"
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
        <Text style={styles.header}>PUMPING RATE (Q)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q1"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Q1"
            value={data.Q1}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q1: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q2"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Q2"
            value={data.Q2}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q2: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q3"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Q3"
            value={data.Q3}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q3: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q4"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Q4"
            value={data.Q4}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q4: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q5"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Q5"
            value={data.Q5}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q5: text };
              })
            }
          />
        </View>
        <Text style={styles.header}>DRAWDOWN (S)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S1"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="S1"
            value={data.S1}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S1: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S2"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="S2"
            value={data.S2}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S2: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S3"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="S3"
            value={data.S3}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S3: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S4"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="S4"
            value={data.S4}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S4: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S5"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="S5"
            value={data.S5}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S5: text };
              })
            }
          />
        </View>

        <Button onPress={handleCalculate} title="Calculate" color="#0F52BA" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: SIZES.medium,
        }}
      >
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 350, height: 250 }}
          />
        )}
        {q && (
          <Text style={{ ...styles.title, margin: SIZES.medium }}>
            q = {q}L/mins
          </Text>
        )}
      </View>
      <Modal animationType="slide" transparent={true} visible={loading}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#0000FF" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default EngineeringFacts;
