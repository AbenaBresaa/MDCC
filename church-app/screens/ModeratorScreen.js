import { View, Text, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';

export default function ModeratorScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>☰ </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Moderator of General Assembly
      </Text>
    </View>
  );
}
