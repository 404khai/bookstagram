import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
   const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header Background */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/800/400" }} // random header image
          style={styles.headerImage}
        />
        <View style={styles.overlay} />

        {/* Top Row (Settings + Search) */}
        <View style={styles.topRow}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#ddd"
            style={styles.searchBar}
          />
          <TouchableOpacity onPress={() => router.push("/screens/settings")}>
            <Ionicons name="settings-sharp" size={26} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=5" }} // profile picture
          style={styles.profilePic}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Jane Doe</Text>
          <Text style={styles.bio}>✍️ Author | Storyteller | Dreamer</Text>
          <View style={styles.statsRow}>
            <Text style={styles.stat}>
              <Text style={styles.bold}>120</Text> Following
            </Text>
            <Text style={styles.stat}>
              <Text style={styles.bold}>340</Text> Followers
            </Text>
            <Text style={styles.stat}>
              <Text style={styles.bold}>56</Text> Posts
            </Text>
          </View>
        </View>
      </View>

      {/* Action Row */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <FontAwesome5 name="book" size={20} color="#ff6b6b" />
          <Text style={styles.actionText}>My Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="videocam" size={22} color="#4dabf7" />
          <Text style={styles.actionText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcons name="favorite" size={22} color="#f06595" />
          <Text style={styles.actionText}>Likes</Text>
        </TouchableOpacity>
      </View>

      {/* Example Posts Section */}
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Recent Posts</Text>
        <View style={styles.postCard}>
          <Text style={styles.postTitle}>🌟 Chapter 1: The Beginning</Text>
          <Text style={styles.postDesc}>
            A journey into the unknown world of imagination...
          </Text>
        </View>
        <View style={styles.postCard}>
          <Text style={styles.postTitle}>🔥 Behind the Scenes</Text>
          <Text style={styles.postDesc}>
            How I come up with story ideas and build characters.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 200,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)", // dark blending effect
  },
  topRow: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    color: "#fff",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -50,
    paddingHorizontal: 30,
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#fff",
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
  },
  bio: {
    color: "#666",
    marginVertical: 5,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  stat: {
    fontSize: 14,
    color: "#444",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  actionBtn: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 4,
    fontSize: 13,
    color: "#333",
  },
  postsSection: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  postCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  postDesc: {
    color: "#666",
    fontSize: 14,
  },
});
