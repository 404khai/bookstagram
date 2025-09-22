import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <ScrollView style={styles.container}>
      {/* Background Header with Blend */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
          }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
      </View>

      {/* Profile Pic */}
      <View style={styles.profilePicContainer}>
        <Image
          source={require("../../assets/images/avatar.jpeg")}
          style={styles.profilePic}
        />
        {/* <Image
          source={{
            uri: "https://i.pinimg.com/736x/5a/bd/f7/5abdf77bb0a6525a5f9b2ec87d10f891.jpg",
          }}
          style={styles.profilePic}
        /> */}
      </View>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.username}>Danielle</Text>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.bio}>Author | Dreamer ✨</Text>
        <Text style={styles.subText}>9 Followers · 53 Following</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtnSecondary}>
            <Text style={styles.actionText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Section (Books, Posts, Likes) */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "books" && styles.activeTab]}
          onPress={() => setActiveTab("books")}
        >
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={22}
            color={activeTab === "books" ? "#FFD700" : "white"}
          />
          <Text style={[styles.tabText, activeTab === "books" && styles.activeTabText]}>
            Books
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "posts" && styles.activeTab]}
          onPress={() => setActiveTab("posts")}
        >
          <Ionicons
            name="grid-outline"
            size={22}
            color={activeTab === "posts" ? "#FFD700" : "white"}
          />
          <Text style={[styles.tabText, activeTab === "posts" && styles.activeTabText]}>
            Posts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "likes" && styles.activeTab]}
          onPress={() => setActiveTab("likes")}
        >
          <FontAwesome
            name="heart"
            size={22}
            color={activeTab === "likes" ? "#FFD700" : "white"}
          />
          <Text style={[styles.tabText, activeTab === "likes" && styles.activeTabText]}>
            Likes
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {activeTab === "books" && (
          <View>
            <Text style={styles.sectionTitle}>📚 Books by this Author</Text>
            <Text style={styles.bookItem}>• "The Future of AI"</Text>
            <Text style={styles.bookItem}>• "Code & Creativity"</Text>
            <Text style={styles.bookItem}>• "Dreaming in JavaScript"</Text>
          </View>
        )}
        {activeTab === "posts" && (
          <Text style={styles.sectionTitle}>📝 No posts yet. Create your first post!</Text>
        )}
        {activeTab === "likes" && (
          <Text style={styles.sectionTitle}>❤️ Books and posts you liked will appear here.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerContainer: { width: "100%", height: 130 },
  headerImage: { width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  profilePicContainer: {
    marginTop: -30,
    marginLeft: 30,
    borderWidth: 3,
    borderColor: "#FF6B6B",
    borderRadius: 60,
    overflow: "hidden",
    width: 100,
    height: 100,
  },
  profilePic: { width: "100%", height: "100%" },
  infoContainer: { paddingHorizontal: 20, marginTop: 10 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  username: { fontSize: 22, fontWeight: "bold", color: "#121212" },
  bio: { marginTop: 6, color: "#ccc" },
  subText: { color: "#888", marginTop: 4 },
  actionRow: { flexDirection: "row", marginTop: 10 },
  actionBtn: {
    backgroundColor: "#FFD700",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  actionBtnSecondary: {
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actionText: { color: "#000", fontWeight: "bold" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#333",
    marginTop: 20,
  },
  tab: { alignItems: "center", paddingVertical: 10 },
  tabText: { color: "white", fontSize: 14, marginTop: 4 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#FFD700" },
  activeTabText: { color: "#FFD700", fontWeight: "bold" },
  contentContainer: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "white", marginBottom: 10 },
  bookItem: { fontSize: 14, color: "#ddd", marginBottom: 5 },
});

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { useRouter } from "expo-router";

// export default function ProfileScreen() {
//    const router = useRouter();

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Background */}
//       <View style={styles.header}>
//         <Image
//           source={{ uri: "https://picsum.photos/800/400" }} // random header image
//           style={styles.headerImage}
//         />
//         <View style={styles.overlay} />

//         {/* Top Row (Settings + Search) */}
//         <View style={styles.topRow}>
//           <TextInput
//             placeholder="Search..."
//             placeholderTextColor="#ddd"
//             style={styles.searchBar}
//           />
//           <TouchableOpacity onPress={() => router.push("/screens/settings")}>
//             <Ionicons name="settings-sharp" size={26} color="#ffffff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Profile Info */}
//       <View style={styles.profileInfo}>
//         <Image
//           source={{ uri: "https://i.pravatar.cc/150?img=5" }} // profile picture
//           style={styles.profilePic}
//         />
//         <View style={styles.userInfo}>
//           <Text style={styles.username}>Jane Doe</Text>
//           <Text style={styles.bio}>✍️ Author | Storyteller | Dreamer</Text>
//           <View style={styles.statsRow}>
//             <Text style={styles.stat}>
//               <Text style={styles.bold}>120</Text> Following
//             </Text>
//             <Text style={styles.stat}>
//               <Text style={styles.bold}>340</Text> Followers
//             </Text>
//             <Text style={styles.stat}>
//               <Text style={styles.bold}>56</Text> Posts
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* Action Row */}
//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.actionBtn}>
//           <FontAwesome5 name="book" size={20} color="#ff6b6b" />
//           <Text style={styles.actionText}>My Posts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionBtn}>
//           <Ionicons name="videocam" size={22} color="#4dabf7" />
//           <Text style={styles.actionText}>Videos</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionBtn}>
//           <MaterialIcons name="favorite" size={22} color="#f06595" />
//           <Text style={styles.actionText}>Likes</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Example Posts Section */}
//       <View style={styles.postsSection}>
//         <Text style={styles.sectionTitle}>Recent Posts</Text>
//         <View style={styles.postCard}>
//           <Text style={styles.postTitle}>🌟 Chapter 1: The Beginning</Text>
//           <Text style={styles.postDesc}>
//             A journey into the unknown world of imagination...
//           </Text>
//         </View>
//         <View style={styles.postCard}>
//           <Text style={styles.postTitle}>🔥 Behind the Scenes</Text>
//           <Text style={styles.postDesc}>
//             How I come up with story ideas and build characters.
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     height: 200,
//     position: "relative",
//   },
//   headerImage: {
//     width: "100%",
//     height: "100%",
//     position: "absolute",
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(0,0,0,0.4)", // dark blending effect
//   },
//   topRow: {
//     marginTop: 50,
//     marginHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   searchBar: {
//     flex: 1,
//     marginRight: 15,
//     backgroundColor: "rgba(255,255,255,0.2)",
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     color: "#fff",
//   },
//   profileInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: -50,
//     paddingHorizontal: 30,
//   },
//   profilePic: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     borderWidth: 3,
//     borderColor: "#fff",
//     marginRight: 20,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   username: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   bio: {
//     color: "#666",
//     marginVertical: 5,
//   },
//   statsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 8,
//   },
//   stat: {
//     fontSize: 14,
//     color: "#444",
//   },
//   bold: {
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
//   actionBtn: {
//     alignItems: "center",
//   },
//   actionText: {
//     marginTop: 4,
//     fontSize: 13,
//     color: "#333",
//   },
//   postsSection: {
//     marginTop: 25,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 15,
//   },
//   postCard: {
//     backgroundColor: "#f9f9f9",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//   },
//   postTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   postDesc: {
//     color: "#666",
//     fontSize: 14,
//   },
// });
