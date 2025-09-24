import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

export default function ExploreScreen() {
  const categories = ["Fiction", "Poetry", "Non-Fiction", "Sci-Fi", "Romance"];

  return (
    <ScrollView style={styles.container}>
      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search authors, books, or posts..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* 📚 Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((cat, idx) => (
          <TouchableOpacity key={idx} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* ✨ Author Spotlight */}
      <View style={styles.authorCard}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.authorImage}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.authorName}>Amanda Leigh</Text>
          <Text style={styles.authorBio}>
            Award-winning poet. Exploring love, loss, and growth 🌿
          </Text>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔥 Trending Post */}
      <View style={styles.postCard}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1512820790803-83ca734da794" }}
          style={styles.postImage}
        />
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>Excerpt from "Lost Pages"</Text>
          <Text style={styles.postAuthor}>by Jonathan Hale</Text>
          <Text style={styles.postText}>
            "And in the silence, I found my voice, echoing between the walls of forgotten stories..."
          </Text>
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="heart-outline" size={20} color="#FF6B6B" />
              <Text style={styles.actionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="chatbubble-outline" size={20} color="#333" />
              <Text style={styles.actionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <FontAwesome6 name="bookmark" size={18} color="#333" />
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 📊 Poll Section */}
      <View style={styles.pollCard}>
        <Text style={styles.pollQuestion}>
          Which genre inspires you the most?
        </Text>
        {["Fiction", "Poetry", "Sci-Fi", "Non-Fiction"].map((option, i) => (
          <TouchableOpacity key={i} style={styles.pollOption}>
            <Text style={styles.pollText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafafa", padding: 16 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: { marginLeft: 6, flex: 1, fontSize: 14, color: "#333" },
  categoryScroll: { marginBottom: 20 },
  categoryChip: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryText: { fontSize: 14, color: "#333", fontWeight: "600" },
  authorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  authorImage: { width: 60, height: 60, borderRadius: 30 },
  authorName: { fontSize: 16, fontWeight: "700", color: "#222" },
  authorBio: { fontSize: 13, color: "#666", marginVertical: 6 },
  followBtn: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  followText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  postImage: { width: "100%", height: 180 },
  postContent: { padding: 12 },
  postTitle: { fontSize: 15, fontWeight: "700", color: "#111" },
  postAuthor: { fontSize: 13, color: "#777", marginVertical: 4 },
  postText: { fontSize: 14, color: "#444", marginBottom: 10 },
  postActions: { flexDirection: "row", marginTop: 6 },
  actionBtn: { flexDirection: "row", alignItems: "center", marginRight: 16 },
  actionText: { marginLeft: 4, fontSize: 13, color: "#555" },
  pollCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  pollQuestion: { fontSize: 15, fontWeight: "600", marginBottom: 12 },
  pollOption: {
    backgroundColor: "#f7f7f7",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  pollText: { fontSize: 14, color: "#333" },
});
