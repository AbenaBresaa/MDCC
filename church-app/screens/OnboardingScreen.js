import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function OnboardingScreen({ navigation }) {
  const player = useVideoPlayer(
    require('../assets/onboarding-video.mp4'),
    (player) => {
      player.loop = true;
      player.muted = true;
      player.play();
    }
  );

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to MDCC 🙏</Text>

        <Text style={styles.text}>
          Stay connected with church announcements, events, and sermons.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
