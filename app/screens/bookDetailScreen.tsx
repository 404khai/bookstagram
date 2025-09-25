import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BookBookmark } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";

export default function BookDetailScreen() {
  return (
    <LinearGradient
      colors={["#fafafa", "#fff5ec"]} // White → soft peach fade
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* --- Book Cover --- */}
        <CustomHeader title="Details" />
        <View style={styles.bookHeader}>
          <Image
            source={require("../../assets/images/handmaid.jpg")}
            style={styles.bookCover}
          />
          <Text style={styles.bookTitle}>The Handmaid’s Tale</Text>
          <Text style={styles.bookAuthor}>Margaret Atwood</Text>

          {/* --- Book Meta --- */}
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>250 Pages</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>4/5 ★</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>Published Apr 2022</Text>
          </View>
        </View>

        {/* --- Icon Row --- */}
        <View style={styles.iconRow}>
          <View style={styles.iconGroup}>
            <BookBookmark size={28} color="#333" weight="light" />
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

        {/* --- Description --- */}
        <View style={styles.descBox}>
          <Text style={styles.descText} numberOfLines={4}>
            The Handmaid's Tale is set in a totalitarian society ruled by a
            fundamentalist regime that treats women as property of the state.
            Facing environmental disasters and a plunging birth rate, the regime
            enslaves fertile women, calling them Handmaids...
          </Text>
          <Text style={styles.readMore}>Read More</Text>
        </View>

        {/* --- Keyword Tags --- */}
        <View style={styles.tagRow}>
          {["Dystopian", "Classic", "Feminism", "Political"].map((tag) => (
            <View key={tag} style={styles.tagPill}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* --- Chapters --- */}
        <View style={styles.chapterList}>
          <Text style={styles.sectionTitle}>Chapters</Text>

          {[...Array(10)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.chapterCard}>
              <View>
                <Text style={styles.chapterTitle}>Chapter {index + 1}</Text>
                <Text style={{ color: "#777", marginTop: 4 }}>
                  Subtitle or short description
                </Text>
              </View>

              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          ))}

          {/* --- Pagination --- */}
          <View style={styles.pagination}>
            {[1, 2, 3].map((page) => (
              <TouchableOpacity key={page} style={styles.pagePill}>
                <Text style={styles.pageText}>{page}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* --- Reviews --- */}
        <View style={styles.reviewSection}>
          <Text style={styles.sectionTitle}>Reviews</Text>

          {[1, 2].map((rev) => (
            <View key={rev} style={styles.reviewCard}>
              <Image
                source={require("../../assets/images/avatar2.jpeg")}
                style={styles.avatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.reviewer}>Samy Heard · ★★★★☆</Text>
                <Text style={styles.reviewText}>
                  Absolutely gripping story! Couldn’t put it down.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* --- Sticky Add Button --- */}
      {/* <View style={styles.addBtnWrapper}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add To List</Text>
        </TouchableOpacity>
      </View> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bookHeader: { alignItems: "center", marginTop: 40 },
  bookCover: { width: 150, height: 220, borderRadius: 12, marginBottom: 16 },
  bookTitle: { fontSize: 20, fontWeight: "700", color: "#111" },
  bookAuthor: { fontSize: 14, color: "#666", marginTop: 4 },
  metaRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  metaText: { fontSize: 12, color: "#777" },
  dot: { marginHorizontal: 6, color: "#aaa" },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
    paddingHorizontal: 20,
  },
  iconGroup: { alignItems: "center" },
  iconLabel: { fontSize: 12, color: "#444", marginTop: 4 },
  descBox: { paddingHorizontal: 20 },
  descText: { fontSize: 14, color: "#333", lineHeight: 20 },
  readMore: { color: "#FF6B6B", marginTop: 4, fontSize: 13 },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  tagPill: {
    backgroundColor: "#ffeaea",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: { fontSize: 12, color: "#444" },
  chapterList: { paddingHorizontal: 20, marginTop: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 12 },
  chapterCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "rgb(138, 138, 138)",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chapterTitle: { fontSize: 15, fontWeight: "500" },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  pagePill: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    elevation: 1,
  },
  pageText: { fontSize: 13, color: "#444" },
  reviewSection: { paddingHorizontal: 20, marginTop: 24 },
  reviewCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  reviewer: { fontSize: 13, fontWeight: "600", marginBottom: 4 },
  reviewText: { fontSize: 13, color: "#555", lineHeight: 18 },
  addBtnWrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#111",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
  },
  addText: { color: "#fff", fontWeight: "600", fontSize: 14 },
});