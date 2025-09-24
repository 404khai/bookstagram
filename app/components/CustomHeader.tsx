// components/CustomHeader.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CustomHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color="#FF6B6B" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    backgroundColor: "#fafafa",
    paddingTop: 40,
    paddingHorizontal: 16,
    elevation: 0, // Android remove shadow
    shadowColor: "transparent", // iOS remove shadow
  },
  backBtn: {
    marginRight: 12,
    padding: 6,
  },
  title: {
    fontSize: 30,
    fontFamily: "HennyPenny_400Regular",
    color: "#FF6B6B",
  },
});
