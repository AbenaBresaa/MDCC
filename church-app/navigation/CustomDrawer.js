import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>

      {/* 🔵 TOP CURVED HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MDCC </Text>
      </View>

      {/* 📋 MENU ITEMS */}
      <View style={styles.menu}>
        <DrawerItem
          label="Moderator of G.A"
          icon={({ size }) => <Ionicons name="person" size={size} />}
          onPress={() => props.navigation.navigate('Moderator')}
        />

        <DrawerItem
          label="Clerk of General Assembly"
          icon={({ size }) => <Ionicons name="people" size={size} />}
          onPress={() => props.navigation.navigate('Home')}
        />

        <DrawerItem
          label="My Church"
          icon={({ size }) => <FontAwesome5 name="church" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Almanac"
          icon={({ size }) => <MaterialIcons name="menu-book" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Hymnal"
          icon={({ size }) => <MaterialIcons name="library-music" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Liturgy"
          icon={({ size }) => <MaterialIcons name="auto-stories" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Constitution"
          icon={({ size }) => <Ionicons name="document-text" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Bible Study Materials"
          icon={({ size }) => <Ionicons name="book" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="GPS"
          icon={({ size }) => <Ionicons name="location" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="News"
          icon={({ size }) => <Ionicons name="newspaper" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="Self Service"
          icon={({ size }) => <Ionicons name="person-circle" size={size} />}
          onPress={() => {}}
        />

        <DrawerItem
          label="About Us"
          icon={({ size }) => <Ionicons name="information-circle" size={size} />}
          onPress={() => {}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#d82b2bd2',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: "time new roman"
  },
  menu: {
    marginTop: 15,
  },
});
