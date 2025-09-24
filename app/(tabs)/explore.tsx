import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("Books");

  const genres = [
    { name: "Horror", img: "https://img.freepik.com/premium-photo/leafless-dry-black-tree-with-spooky-blood-red-sky-scary-horror-tree-nature-background-halloween_696486-50.jpg" },
    { name: "Fantasy", img: "https://static.wikia.nocookie.net/powerlisting/images/c/c6/Fantasy_World.jpeg/revision/latest/scale-to-width-down/1200?cb=20160210204714" },
    { name: "Sci-Fi", img: "https://img.goodfon.com/wallpaper/big/5/30/wojtek-fus-spaceship-planet-stars-shield-energy-shield-space.webp" },
    { name: "Romance", img: "https://images.stockcake.com/public/5/c/a/5ca12f80-8669-42ff-9ef7-f9bf6f0871b0_large/autumn-love-embrace-stockcake.jpg" },
    { name: "Mystery", img: "https://t4.ftcdn.net/jpg/01/82/29/77/360_F_182297712_9CsfAgraiubHa1ZgwCtXzIIwwFTUcfUc.jpg" },
  ];

  const books = [
    {
      title: "Where The Crawdads Sing",
      author: "Delia Owens",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    },
    {
      title: "The Institute",
      author: "Stephen King",
      cover: "https://m.media-amazon.com/images/I/71EwoNQypZL.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    },
  ];

  const authors = [
    {
      name: "Amanda Leigh",
      bio: "Award-winning poet 🌿",
      profile: "https://i.pravatar.cc/100?img=12",
      banner:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Jonathan Hale",
      bio: "Fiction writer ✍️",
      profile: "https://i.pravatar.cc/100?img=32",
      banner:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <LinearGradient
      colors={["#fafafa", "#fff5ec"]} 
      style={styles.gradientBg}
    >
      <ScrollView style={styles.container}>
        {/* 🔍 Search Bar */}
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="filter-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* 🔘 Tabs */}
        <View style={styles.tabRow}>
          {["Books", "Posts"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 📂 Genres */}
        {activeTab === "Books" && (
          <>
            <Text style={styles.sectionTitle}>Genres</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 12 }}
            >
              {genres.map((g, idx) => (
                <TouchableOpacity key={idx} style={styles.genreCard}>
                  <Image source={{ uri: g.img }} style={styles.genreImage} />
                  <Text style={styles.genreText}>{g.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>


        {/* 📚 Recommended Books */}
        
            <Text style={styles.sectionTitle}>Recommended Books</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {books.map((b, idx) => (
                <View key={idx} style={styles.bookCard}>
                  <Image source={{ uri: b.cover }} style={styles.bookCover} />
                  <Text style={styles.bookTitle}>{b.title}</Text>
                  <Text style={styles.bookAuthor}>{b.author}</Text>
                </View>
              ))}
            </ScrollView>

            {/* 👩‍💻 Recommended Authors */}
            <Text style={styles.sectionTitle}>Recommended Authors</Text>
            <ScrollView style={{marginBottom: 30}} horizontal showsHorizontalScrollIndicator={false}>
              {authors.map((a, idx) => (
                <View key={idx} style={styles.authorCard}>
                  <Image source={{ uri: a.banner }} style={styles.banner} />
                  <View style={styles.authorInfo}>
                    <Image source={{ uri: a.profile }} style={styles.profile} />
                    <Text style={styles.authorName}>{a.name}</Text>
                    <Text style={styles.authorBio}>{a.bio}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </>
        )}

        {/* 📝 Recommended Posts */}
        {activeTab === "Posts" && (
          <View style={styles.postCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
              }}
              style={styles.postImage}
            />
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>Excerpt from "Lost Pages"</Text>
              <Text style={styles.postAuthor}>by Jonathan Hale</Text>
              <Text style={styles.postText}>
                "And in the silence, I found my voice..."
              </Text>
              <View style={styles.postActions}>
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color="#FF6B6B"
                  style={{ marginRight: 12 }}
                />
                <Ionicons
                  name="chatbubble-outline"
                  size={20}
                  color="#333"
                  style={{ marginRight: 12 }}
                />
                <Ionicons name="bookmark-outline" size={20} color="#333" />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBg: { flex: 1 },
  container: { flex: 1, padding: 16 },
  searchRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: { marginLeft: 6, flex: 1, fontSize: 14, color: "#333" },
  filterBtn: {
    backgroundColor: "#FF6B6B",
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 8,
    color: "#111",
  },
  genreCard: {
    width: 90,
    height: 90,
    borderRadius: 18,
    marginRight: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  genreImage: { ...StyleSheet.absoluteFillObject, resizeMode: "cover" },
  genreText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 6,
    borderRadius: 6,
    overflow: "hidden",
  },
  bookCard: {
    width: 120,
    marginRight: 14,
    alignItems: "center",
  },
  bookCover: {
    width: 110,
    height: 160,
    borderRadius: 10,
    marginBottom: 8,
  },
  bookTitle: { fontSize: 13, fontWeight: "600", textAlign: "center" },
  bookAuthor: { fontSize: 12, color: "#777", textAlign: "center" },
  authorCard: {
    width: 180,
    borderRadius: 14,
    marginRight: 14,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 2,
  },
  banner: { width: "100%", height: 70 },
  authorInfo: { alignItems: "center", padding: 10 },
  profile: { width: 50, height: 50, borderRadius: 25, marginTop: -25 },
  authorName: { fontSize: 14, fontWeight: "700", marginTop: 6 },
  authorBio: { fontSize: 12, color: "#666", textAlign: "center", marginTop: 2 },
  tabRow: {
    flexDirection: "row",
    marginVertical: 14,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 4,
    alignSelf: "center",
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  activeTabButton: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  tabText: { fontSize: 13, color: "#555" },
  activeTabText: { color: "#FF6B6B", fontWeight: "700" },
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
});
