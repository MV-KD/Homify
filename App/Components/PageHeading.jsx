import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PageHeading({ title, navigation }) {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={24} color="black" />
      <Text style={{ fontSize: 25, fontFamily: 'Outfit-medium' }}>{title}</Text>
    </TouchableOpacity>
  );
}
