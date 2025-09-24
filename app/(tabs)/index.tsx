import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BookBookmark  } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

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
  const [commentsVisible, setCommentsVisible] = useState(false);

  return (
    // <LinearGradient
    //   colors={["#fafafa", "#fff7e6"]} 
    //   style={styles.gradientBg}
    // >
    // <LinearGradient
    //   colors={["#fafafa", "#ffeaea"]} 
    //   style={styles.gradientBg}
    // >
    <LinearGradient
      colors={["#fafafa", "#fff5ec"]} 
      style={styles.gradientBg}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* --- Top Bar --- */}
        {/* <View style={styles.topBar}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.iconButton}>
            <BookBookmark  size={20} color="#333" weight="light" />
          </TouchableOpacity>

          
        </View> */}

        {/* --- Greeting --- */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            What will you read, Sochi-K
          </Text>
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
            <TouchableOpacity 
              style={styles.bookCard} 
              onPress={() => router.push("/screens/bookDetailScreen")}  // 👈 navigate to BookDetail
            >
              <Image source={item.cover} style={styles.bookCover} />
            </TouchableOpacity>
          )}
        />



        <View style={styles.readingNowHead}>
          <Text style={styles.readingNow}>Reading Now</Text>
          <Ionicons name="arrow-forward" size={20} color="#666" />
        </View>
        
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


        <View style={styles.header}>
          <Text style={styles.greeting}>
            Latest Author Posts
          </Text>
        </View>
        {/* --- Post Section (Instagram-style) --- */}
        <View style={styles.postCard}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
          >
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                source={{ uri: `https://picsum.photos/600/400?random=${i}` }}
                style={styles.postImage}
              />
            ))}
          </ScrollView>

          <Text style={styles.postTitle}>✨ New Release: "Dreaming in JS"</Text>

          <View style={styles.postActions}>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#FF6B6B" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCommentsVisible(true)}>
              <Ionicons name="chatbubble-outline" size={24} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Comments Modal */}
        <Modal
          visible={commentsVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setCommentsVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Comments</Text>
              <View style={styles.comment}>
                <Text style={styles.commentAuthor}>Alice:</Text>
                <Text style={styles.commentText}>Loved this book!</Text>
              </View>
              <View style={styles.reply}>
                <Text style={styles.commentAuthor}>Dan:</Text>
                <Text style={styles.commentText}>Same here 🔥</Text>
              </View>

              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setCommentsVisible(false)}
              >
                <Text style={{ color: "#fff" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* --- Poll Section --- */}
        <View style={styles.pollCard}>
          <Image
            source={{ uri: "https://picsum.photos/400/200" }}
            style={styles.pollImage}
          />
          <Text style={styles.pollTitle}>📖 Which genre should I write next?</Text>
          <TouchableOpacity style={styles.pollOption}>
            <Text>Fantasy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pollOption}>
            <Text>Romance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pollOption}>
            <Text>Sci-Fi</Text>
          </TouchableOpacity>
        </View>

        {/* --- Reading Now --- */}
        
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBg: { flex: 1 },
  container: { flex: 1, paddingTop: 40 },
  topBar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, marginBottom: 20 },
  searchContainer: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#fff",
    borderRadius: 12, paddingHorizontal: 10, flex: 1, height: 40, marginRight: 12,
    shadowColor: "rgb(138, 138, 138)", shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
  },
  searchInput: { marginLeft: 6, flex: 1, fontSize: 14, color: "#333" },
  iconButton: {
    backgroundColor: "#fff",
    padding: 9,
    borderRadius: 10,
    shadowColor: "rgb(138, 138, 138)",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  header: { paddingHorizontal: 16, marginBottom: 20 },
  greeting: { fontSize: 20, fontWeight: "700", color: "#222" },
  subText: { fontSize: 14, color: "#777", marginTop: 4 },
  bookCard: { marginRight: 16 },
  bookCover: { width: 120, height: 180, borderRadius: 10 },

  /* Post */
  postCard: {
    backgroundColor: "#fff", margin: 16, borderRadius: 14, paddingBottom: 12,
    shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5, elevation: 2,
  },
  carousel: { width: "100%", height: 200 },
  postImage: { width: width - 32, height: 200, borderTopLeftRadius: 14, borderTopRightRadius: 14 },
  postTitle: { margin: 12, fontSize: 16, fontWeight: "600", color: "#111" },
  postActions: { flexDirection: "row", marginLeft: 12, gap: 16 },

  /* Modal */
  modalOverlay: {
    flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff", borderTopLeftRadius: 16, borderTopRightRadius: 16,
    padding: 20, maxHeight: "60%",
  },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  comment: { flexDirection: "row", marginBottom: 6 },
  reply: { flexDirection: "row", marginLeft: 20, marginBottom: 6 },
  commentAuthor: { fontWeight: "600", marginRight: 6 },
  commentText: { color: "#444" },
  closeBtn: {
    marginTop: 16, backgroundColor: "#FF6B6B", padding: 10,
    borderRadius: 8, alignItems: "center",
  },

  /* Poll */
  pollCard: {
    backgroundColor: "#fff", marginHorizontal: 16, marginBottom: 20,
    borderRadius: 14, padding: 12, shadowColor: "#000",
    shadowOpacity: 0.05, shadowRadius: 5, elevation: 2,
  },
  pollImage: { width: "100%", height: 150, borderRadius: 10, marginBottom: 10 },
  pollTitle: { fontSize: 15, fontWeight: "600", marginBottom: 10, color: "#111" },
  pollOption: {
    backgroundColor: "#f3f3f3", padding: 10, borderRadius: 8, marginBottom: 8,
  },

  /* Reading */
  readingNowHead: {flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: 16, marginTop: 30 },
  readingNow: { fontSize: 16, fontWeight: "600", color: "#333" },
  readingCard: {
    backgroundColor: "#fff", margin: 16, padding: 12, borderRadius: 14,
    flexDirection: "row", alignItems: "center",
    shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5, elevation: 2,
  },
  readingCover: { width: 50, height: 70, borderRadius: 6, marginRight: 12 },
  readingInfo: { flex: 1 },
  bookTitle: { fontSize: 15, fontWeight: "600", color: "#111" },
  bookAuthor: { fontSize: 13, color: "#666" },
  rating: { marginVertical: 4 },
  progressBar: { width: "100%", height: 6, backgroundColor: "#eee", borderRadius: 4, marginTop: 4 },
  progressFill: { width: "50%", height: "100%", backgroundColor: "#ff5757" },
  progressText: { fontSize: 12, color: "#777", marginTop: 2 },
});



// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const books = [
//   {
//     id: "1",
//     title: "Where The Crawdads Sing",
//     author: "Delia Owens",
//     cover: require("../../assets/images/crawdads.jpg"),
//   },
//   {
//     id: "2",
//     title: "The Institute",
//     author: "Stephen King",
//     cover: require("../../assets/images/institute.jpg"),
//   },
//   {
//     id: "3",
//     title: "First Term at Silver Spires",
//     author: "Amy Bryant",
//     cover: require("../../assets/images/silverspires.jpeg"),
//   },
// ];

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       {/* --- Top Bar --- */}
//       <View style={styles.topBar}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={18} color="#999" />
//           <TextInput
//             placeholder="Search"
//             placeholderTextColor="#999"
//             style={styles.searchInput}
//           />
//         </View>

//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="book-outline" size={20} color="#333" />
//         </TouchableOpacity>

//         <Image
//           source={require("../../assets/images/avatar.jpeg")}
//           style={styles.avatar}
//         />
//       </View>

//       {/* --- Greeting --- */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>What will you read, <Text style={{fontFamily: 'HennyPenny_400Regular'}}>Sochima</Text></Text>
//         <Text style={styles.subText}>We have some fantastic books for you.</Text>
//       </View>

//       {/* --- Book Carousel --- */}
//       <FlatList
//         data={books}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ paddingHorizontal: 16 }}
//         renderItem={({ item }) => (
//           <View style={styles.bookCard}>
//             <Image source={item.cover} style={styles.bookCover} />
//           </View>
//         )}
//       />

//       {/* --- Now Reading --- */}
//       <Text style={styles.readingNow}>Reading Now</Text>
//       <View style={styles.readingCard}>
//         <Image
//           source={require("../../assets/images/handmaid.jpg")}
//           style={styles.readingCover}
//         />

//         <View style={styles.readingInfo}>
//           <Text style={styles.bookTitle}>The Handmaid’s Tale</Text>
//           <Text style={styles.bookAuthor}>Margaret Atwood</Text>

//           <Text style={styles.rating}>★★★☆☆</Text>

//           <View style={styles.progressBar}>
//             <View style={styles.progressFill} />
//           </View>
//           <Text style={styles.progressText}>23 / 45</Text>
//         </View>

//         <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
//       </View>

//       {/* --- Player --- */}
//       {/* <View style={styles.playerBar}>
//         <Text style={styles.time}>3:01</Text>
//         <TouchableOpacity style={styles.playButton}>
//           <Ionicons name="play" size={20} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.time}>4:12</Text>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fafafa",
//     paddingTop: 50,
//   },
//   topBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     marginBottom: 20,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     flex: 1,
//     height: 40,
//     marginRight: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   searchInput: {
//     marginLeft: 6,
//     flex: 1,
//     fontSize: 14,
//     color: "#333",
//   },
//   iconButton: {
//     backgroundColor: "#fff",
//     padding: 8,
//     borderRadius: 10,
//     marginRight: 12,
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//   },
//   header: {
//     paddingHorizontal: 16,
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#222",
//   },
//   subText: {
//     fontSize: 14,
//     color: "#777",
//     marginTop: 4,
//   },
//   bookCard: {
//     marginRight: 16,
//   },
//   bookCover: {
//     width: 120,
//     height: 180,
//     borderRadius: 10,
//   },
//   readingNow: {
//     marginTop: 24,
//     marginLeft: 16,
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   readingCard: {
//     backgroundColor: "#fff",
//     margin: 16,
//     padding: 12,
//     borderRadius: 14,
//     flexDirection: "row",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   readingCover: {
//     width: 50,
//     height: 70,
//     borderRadius: 6,
//     marginRight: 12,
//   },
//   readingInfo: {
//     flex: 1,
//   },
//   bookTitle: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#111",
//   },
//   bookAuthor: {
//     fontSize: 13,
//     color: "#666",
//   },
//   rating: {
//     marginVertical: 4,
//   },
//   progressBar: {
//     width: "100%",
//     height: 6,
//     backgroundColor: "#eee",
//     borderRadius: 4,
//     marginTop: 4,
//     overflow: "hidden",
//   },
//   progressFill: {
//     width: "50%", // progress %
//     height: "100%",
//     backgroundColor: "#ff5757",
//   },
//   progressText: {
//     fontSize: 12,
//     color: "#777",
//     marginTop: 2,
//   },
//   playerBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: 40,
//     marginTop: -8,
//   },
//   playButton: {
//     backgroundColor: "#000",
//     width: 46,
//     height: 46,
//     borderRadius: 23,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   time: {
//     fontSize: 12,
//     color: "#555",
//   },
// });
