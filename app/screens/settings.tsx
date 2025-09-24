import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const settingsOptions = [
    {
      title: "Edit Profile",
      color: "#4dabf7",
      icon: (color) => <Ionicons name="person-circle" size={24} color={color} />,
      onPress: () => console.log("Edit Profile tapped"),
    },
    {
      title: "Change Password",
      color: "#f06595",
      icon: (color) => <MaterialIcons name="lock-outline" size={24} color={color} />,
      onPress: () => console.log("Change Password tapped"),
    },
    {
      title: "Language",
      color: "#22b8cf",
      icon: (color) => <Ionicons name="language" size={24} color={color} />,
      onPress: () => console.log("Language tapped"),
    },
    {
      title: "Notifications",
      color: "#ffa94d",
      icon: (color) => <Ionicons name="notifications" size={24} color={color} />,
      onPress: () => console.log("Notifications tapped"),
    },
    {
      title: "Privacy",
      color: "#40c057",
      icon: (color) => <Entypo name="shield" size={24} color={color} />,
      onPress: () => console.log("Privacy tapped"),
    },
    {
      title: "Saved Books",
      color: "#7950f2",
      icon: (color) => <FontAwesome5 name="bookmark" size={26} color={color} />,
      onPress: () => console.log("Saved Books tapped"),
    },
    {
      title: "Reading Preferences",
      color: "#ff6b6b",
      icon: (color) => <MaterialIcons name="menu-book" size={24} color={color} />,
      onPress: () => console.log("Reading Preferences tapped"),
    },
    {
      title: "Help & Support",
      color: "#339af0",
      icon: (color) => <Ionicons name="help-circle" size={24} color={color} />,
      onPress: () => console.log("Help tapped"),
    },
    {
      title: "About App",
      color: "#fab005",
      icon: (color) => <Ionicons name="information-circle" size={24} color={color} />,
      onPress: () => console.log("About tapped"),
    },
    {
      title: "Logout",
      color: "#e03131",
      icon: (color) => <MaterialIcons name="logout" size={24} color={color} />,
      onPress: () => console.log("Logout tapped"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.header}>Settings</Text> */}

      {settingsOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionCard}
          onPress={item.onPress}
          activeOpacity={0.7}
        >
          <View style={[styles.iconWrapper, { backgroundColor: item.color + "20" }]}>
            {item.icon(item.color)}
          </View>
          <Text style={styles.optionText}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={22} color="#aaa" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 20,
    color: "#111",
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "rgb(138, 138, 138)",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
