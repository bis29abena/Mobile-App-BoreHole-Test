import { React, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const formularTypes = ["Step-Test-Analysis", "Yield", "Pump-Sizing"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Step-Test-Analysis");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hello Welcome</Text>
        <Text style={styles.userName}>
          Estimate the yield and suitable pump size of a borehole.
        </Text>
      </View>

      
      <View style={styles.tabsContainer}>
        <FlatList
          data={formularTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Welcome;
