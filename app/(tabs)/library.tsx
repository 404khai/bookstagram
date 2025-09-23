import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { BookBookmark  } from "phosphor-react-native";
import { Ionicons } from "@expo/vector-icons";

const sampleBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://m.media-amazon.com/images/I/91HHxxtA1wL.jpg",
  },
];

export default function Library() {
  const [search, setSearch] = useState("");

  const filteredBooks = sampleBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* --- Top Bar --- */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search your library"
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <BookBookmark  size={20} color="#333" weight="light" />
        </TouchableOpacity>
      </View>

      {/* --- Books List --- */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.bookCard} 
            onPress={() => router.push("/screens/bookDetailScreen")}  // 👈 same thing here
          >
            <Image source={{ uri: item.cover }} style={styles.bookCover} />
            <View style={{ flex: 1 }}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.rating}>★★★☆☆</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>23 / 45</Text>          
            </View>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 10,
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
    shadowColor: "rgb(138, 138, 138)",
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
    padding: 9,
    borderRadius: 10,
    shadowColor: "rgb(138, 138, 138)",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bookCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bookCover: {
    width: 50,
    height: 70,
    borderRadius: 6,
    marginRight: 12,
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
  rating: { marginVertical: 4 },
  progressBar: { width: "80%", height: 6, backgroundColor: "#eee", borderRadius: 4, marginTop: 4 },
  progressFill: { width: "50%", height: "100%", backgroundColor: "#ff5757" },
  progressText: { fontSize: 12, color: "#777", marginTop: 2 },
});
