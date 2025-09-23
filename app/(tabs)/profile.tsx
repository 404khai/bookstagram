import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  FlatList,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const sampleBooks = [
  {
    id: "1",
    title: "The Handmaid’s Tale",
    author: "Margaret Atwood",
    rating: "★★★★☆",
    progress: 23,
    total: 45,
    cover: "https://m.media-amazon.com/images/I/71XspM9uRLL.jpg",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    rating: "★★★★★",
    progress: 12,
    total: 50,
    cover: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
  },
];

const samplePosts = [
  "https://picsum.photos/300/300?1",
  "https://picsum.photos/300/300?2",
  "https://picsum.photos/300/300?3",
  "https://picsum.photos/300/300?4",
  "https://picsum.photos/300/300?5",
];

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("books");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header Image */}
        <View style={styles.headerImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
            }}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay} />
          <TouchableOpacity style={styles.settingsBtn} onPress={() => router.push("/screens/settings")}>
            <Ionicons name="settings-sharp" size={26} color="#fff" />
          </TouchableOpacity>
          
        </View>

        {/* Profile Row */}
        <View style={styles.profileRow}>
          <View style={styles.profilePicWrapper}>
            <LinearGradient
              colors={["#FF6B6B", "#ffab6b"]}
              style={styles.gradientBorder}
            >
              <Image
                source={require("../../assets/images/avatar.jpeg")}
                style={styles.profilePic}
              />
            </LinearGradient>
            <TouchableOpacity style={styles.addStoryIcon}>
              <Feather name="plus" size={20} color="#ffab6b" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileStats}>
            <Text style={styles.displayName}>Sochi-K</Text>
            <Text style={styles.username}>@sochi.fro</Text>
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>9</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>53</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bio */}
        <Text style={styles.bio}>Author, Dreamer, Software Developer</Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "books" && styles.activeTab]}
            onPress={() => setActiveTab("books")}
          >
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={20}
              color={activeTab === "books" ? "#FF6B6B" : "#555"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "books" && styles.activeTabText,
              ]}
            >
              Books
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "posts" && styles.activeTab]}
            onPress={() => setActiveTab("posts")}
          >
            <Ionicons
              name="grid-outline"
              size={20}
              color={activeTab === "posts" ? "#FF6B6B" : "#555"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "posts" && styles.activeTabText,
              ]}
            >
              Posts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "likes" && styles.activeTab]}
            onPress={() => setActiveTab("likes")}
          >
            <FontAwesome
              name="heart"
              size={20}
              color={activeTab === "likes" ? "#FF6B6B" : "#555"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "likes" && styles.activeTabText,
              ]}
            >
              Likes
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        <View style={styles.contentContainer}>
          {activeTab === "books" && (
            <View>
              {sampleBooks.map((book) => (
                <View key={book.id} style={styles.bookCard}>
                  <Image source={{ uri: book.cover }} style={styles.bookCover} />
                  <View style={styles.readingInfo}>
                    <Text style={styles.bookTitle}>{book.title}</Text>
                    <Text style={styles.bookAuthor}>{book.author}</Text>
                    <Text style={styles.rating}>{book.rating}</Text>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${(book.progress / book.total) * 100}%` },
                        ]}
                      />
                    </View>
                    <Text style={styles.progressText}>
                      {book.progress} / {book.total}
                    </Text>
                    <TouchableOpacity style={styles.moreBtn}>
                      <Text style={styles.moreBtnText}>More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}

          {activeTab === "posts" && (
            <View style={styles.gridContainer}>
              {samplePosts.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => openImage(index)}
                  style={styles.gridItem}
                >
                  <Image source={{ uri: img }} style={styles.gridImage} />
                </TouchableOpacity>
              ))}
            </View>
          )}

          {activeTab === "likes" && (
            <Text>❤️ Books and posts you liked will appear here.</Text>
          )}
        </View>
      </ScrollView>

      {/* Floating Add Post */}
      <TouchableOpacity style={styles.floatingBtn}>
        <Feather name="feather" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Modal Image Viewer */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <FlatList
            horizontal
            pagingEnabled
            data={samplePosts}
            initialScrollIndex={currentIndex}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.modalImage} />
            )}
            keyExtractor={(_, idx) => idx.toString()}
          />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerImageContainer: { height: 130 },
  headerImage: { width: "100%", height: "100%" },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  settingsBtn: {
    position: "absolute",
    top: 40,
    right: 15,
    zIndex: 10,
  },
  profileRow: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    marginTop: -40,
  },
  profilePicWrapper: { position: "relative", marginRight: 20 },
  gradientBorder: { borderRadius: 60, padding: 3 },
  profilePic: { width: 90, height: 90, borderRadius: 45 },
  addStoryIcon: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 3,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  profileStats: { 
    display: "flex",
    flexDirection: "column", 
    marginTop: 15 
  },
  displayName: { fontSize: 22, fontWeight: "700", color: "#111" },
  username: { fontSize: 13, fontWeight: "300", color: "#111" },
  statsRow: { flexDirection: "row", marginTop: 6 , gap: 15},
  statBox: { marginRight: 15, alignItems: "center" },
  statNumber: { fontSize: 16, fontWeight: "600", color: "#111" },
  statLabel: { fontSize: 12, color: "#555" },
  bio: { paddingHorizontal: 20, color: "#444", marginBottom: 15 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
  },
  tab: { alignItems: "center" },
  tabText: { fontSize: 13, color: "#555" },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#FF6B6B" },
  activeTabText: { color: "#FF6B6B", fontWeight: "700" },
  contentContainer: { padding: 15 },
  // Books
  bookCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    marginBottom: 15,
  },
  bookCover: { width: 70, height: 100, borderRadius: 6, marginRight: 12 },
  readingInfo: { flex: 1 },
  bookTitle: { fontSize: 15, fontWeight: "600", color: "#111" },
  bookAuthor: { fontSize: 13, color: "#666" },
  rating: { marginVertical: 4 },
  progressBar: {
    height: 5,
    backgroundColor: "#eee",
    borderRadius: 3,
    marginVertical: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#FF6B6B",
    borderRadius: 3,
  },
  progressText: { fontSize: 12, color: "#666" },
  moreBtn: {
    backgroundColor: "#FF6B6B",
    padding: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  moreBtnText: { color: "#fff", fontWeight: "600", fontSize: 12 },
  // Posts
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -2,
  },
  gridItem: { width: width / 3, height: width / 3, padding: 2 },
  gridImage: { width: "100%", height: "100%" },
  // Floating Button
  floatingBtn: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#FF6B6B",
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
  // Modal
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: width * 0.9,
    height: width * 1.2,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  closeBtn: { position: "absolute", top: 40, right: 20 },
});
