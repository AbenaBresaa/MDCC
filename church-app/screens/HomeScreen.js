import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
  source={require("../assets/logo.jpeg")}
  style={styles.logo}
/>

        <Text style={styles.churchName}>MDCC Church</Text>
        <Text style={styles.subtitle}>
          A place of worship, faith, and fellowship
        </Text>
      </View>

      {/* Welcome Message */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome</Text>
        <Text style={styles.cardText}>
          Welcome to the official MDCC mobile app. Stay connected with church
          announcements, events, and spiritual resources.
        </Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>📢 Announcements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>📅 Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>🎵 Hymnal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    backgroundColor: "#2f4762",
    padding: 70,
    alignItems: "center",
  },
  churchName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 5,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
  section: {
    marginHorizontal: 15,
  },
  actionCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  logo: {
     width: 100, 
     height: 100 
  }
});
