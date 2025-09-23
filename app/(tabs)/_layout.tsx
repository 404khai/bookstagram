import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#FF6B6B',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, // 👈 default: no headers
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
      },
    }}
  >
    {/* Home (Index) */}
    <Tabs.Screen
      name="index"
      options={{
        title: 'Bookstagram',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FF6B6B',
        },
        headerTintColor: '#fff',
        // 👇 custom header title with image + text
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('@/assets/images/blogo2.png')} // replace with your logo
              style={{ width: 100, height: 80, marginRight: 8 }}
            />
            <Text style={{fontFamily: 'HennyPenny_400Regular', color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
              Bookstagram
            </Text>
          </View>
        ),
        // 👇 notification bell on the right
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log('Go to Notifications')}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
    
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />


    {/* Library */}
    <Tabs.Screen
      name="library"
      options={{
        title: 'Library',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="library" size={size} color={color} />
        ),
      }}
    />

    {/* Explore */}
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" size={size} color={color} />
        ),
      }}
    />

    {/* Community */}
    <Tabs.Screen
      name="community"
      options={{
        title: 'Community',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people" size={size} color={color} />
        ),
      }}
    />

    {/* Profile */}
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle" size={size} color={color} />
        ),
      }}
    />
</Tabs>

  );
}
