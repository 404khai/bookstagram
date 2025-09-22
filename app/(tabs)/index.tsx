import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const books = [
  {
    id: "1",
    title: "Where The Crawdads Sing",
    author: "Delia Owens",
    cover: require("../../assets/images/crawdads.jpg"),
  },
  {
    id: "2",
    title: "The Institute",
    author: "Stephen King",
    cover: require("../../assets/images/institute.jpg"),
  },
  {
    id: "3",
    title: "First Term at Silver Spires",
    author: "Amy Bryant",
    cover: require("../../assets/images/silverspires.jpeg"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* --- Top Bar --- */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="book-outline" size={20} color="#333" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/avatar.jpeg")}
          style={styles.avatar}
        />
      </View>

      {/* --- Greeting --- */}
      <View style={styles.header}>
        <Text style={styles.greeting}>What will you read, Sochima?</Text>
        <Text style={styles.subText}>We have some fantastic books for you.</Text>
      </View>

      {/* --- Book Carousel --- */}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.bookCard}>
            <Image source={item.cover} style={styles.bookCover} />
          </View>
        )}
      />

      {/* --- Now Reading --- */}
      <Text style={styles.readingNow}>Reading Now</Text>
      <View style={styles.readingCard}>
        <Image
          source={require("../../assets/images/handmaid.jpg")}
          style={styles.readingCover}
        />

        <View style={styles.readingInfo}>
          <Text style={styles.bookTitle}>The Handmaid’s Tale</Text>
          <Text style={styles.bookAuthor}>Margaret Atwood</Text>

          <Text style={styles.rating}>★★★☆☆</Text>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>23 / 45</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
      </View>

      {/* --- Player --- */}
      {/* <View style={styles.playerBar}>
        <Text style={styles.time}>3:01</Text>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.time}>4:12</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 50,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 6,
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  iconButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    marginRight: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  subText: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  bookCard: {
    marginRight: 16,
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  readingNow: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  readingCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  readingCover: {
    width: 50,
    height: 70,
    borderRadius: 6,
    marginRight: 12,
  },
  readingInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  bookAuthor: {
    fontSize: 13,
    color: "#666",
  },
  rating: {
    marginVertical: 4,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 4,
    marginTop: 4,
    overflow: "hidden",
  },
  progressFill: {
    width: "50%", // progress %
    height: "100%",
    backgroundColor: "#ff5757",
  },
  progressText: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  playerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: -8,
  },
  playButton: {
    backgroundColor: "#000",
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    color: "#555",
  },
});
