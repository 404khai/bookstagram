import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BookBookmark  } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

export default function BookDetailScreen() {
  return (
    <LinearGradient
      colors={["#fafafa", "#ffeaea"]} // White → soft yellow fade
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* --- Book Cover --- */}
        <View style={styles.bookHeader}>
          <Image
            source={require("../../assets/images/handmaid.jpg")}
            style={styles.bookCover}
          />
          <Text style={styles.bookTitle}>The Handmaid’s Tale</Text>
          <Text style={styles.bookAuthor}>Margaret Atwood</Text>
        </View>

        {/* --- Icon Row --- */}
        <View style={styles.iconRow}>
          <View style={styles.iconGroup}>
            <BookBookmark  size={28} color="#333" weight="light" />
            <Text style={styles.iconLabel}>Bookmark</Text>
          </View>
          <View style={styles.iconGroup}>
            <Ionicons name="chatbubble-outline" size={24} color="#333" />
            <Text style={styles.iconLabel}>Discuss</Text>
          </View>
          <View style={styles.iconGroup}>
            <Ionicons name="text-outline" size={24} color="#333" />
            <Text style={styles.iconLabel}>Font</Text>
          </View>
          <View style={styles.iconGroup}>
            <Ionicons name="share-outline" size={24} color="#333" />
            <Text style={styles.iconLabel}>Share</Text>
          </View>
        </View>

        {/* --- Chapters --- */}
        <View style={styles.chapterList}>
          <Text style={styles.sectionTitle}>Chapters</Text>

          {[1, 2, 3, 4, 5].map((chapter) => (
            <TouchableOpacity key={chapter} style={styles.chapterCard}>
              <Text style={styles.chapterTitle}>Chapter {chapter}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookHeader: {
    alignItems: "center",
    marginTop: 50,
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
    paddingHorizontal: 20,
  },
  iconGroup: {
    alignItems: "center",
  },
  iconLabel: {
    fontSize: 12,
    color: "#444",
    marginTop: 4,
  },
  chapterList: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#222",
  },
  chapterCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chapterTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});
