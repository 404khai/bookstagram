import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const settingsOptions = [
    {
      title: "Edit Profile",
      icon: <Ionicons name="person-circle" size={24} color="#4dabf7" />,
      onPress: () => console.log("Edit Profile tapped"),
    },
    {
      title: "Change Password",
      icon: <MaterialIcons name="lock-outline" size={24} color="#f06595" />,
      onPress: () => console.log("Change Password tapped"),
    },
    {
      title: "Language",
      icon: <Ionicons name="language" size={24} color="#22b8cf" />,
      onPress: () => console.log("Language tapped"),
    },
    {
      title: "Notifications",
      icon: <Ionicons name="notifications" size={24} color="#ffa94d" />,
      onPress: () => console.log("Notifications tapped"),
    },
    {
      title: "Privacy",
      icon: <Entypo name="shield" size={24} color="#40c057" />,
      onPress: () => console.log("Privacy tapped"),
    },
    {
      title: "Saved Books",
      icon: <FontAwesome5 name="bookmark" size={22} color="#7950f2" />,
      onPress: () => console.log("Saved Books tapped"),
    },
    {
      title: "Reading Preferences",
      icon: <MaterialIcons name="menu-book" size={24} color="#ff6b6b" />,
      onPress: () => console.log("Reading Preferences tapped"),
    },
    {
      title: "Help & Support",
      icon: <Ionicons name="help-circle" size={24} color="#339af0" />,
      onPress: () => console.log("Help tapped"),
    },
    {
      title: "About App",
      icon: <Ionicons name="information-circle" size={24} color="#fab005" />,
      onPress: () => console.log("About tapped"),
    },
    {
      title: "Logout",
      icon: <MaterialIcons name="logout" size={24} color="#e03131" />,
      onPress: () => console.log("Logout tapped"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {settingsOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={item.onPress}
        >
          <View style={styles.icon}>{item.icon}</View>
          <Text style={styles.optionText}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={20} color="#aaa" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
