import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity ,Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ProfileScreen() {
  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark-sharp',
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'log-out',
    },
  ];

  const contactUsMenu = [
    {
      id: 1,
      name: 'Email',
      icon: 'mail',
      value: 'Homify@homeservice.com',
      action: () => {
        Linking.openURL('mailto:Homify@homeservice.com');
      },
    },
    {
      id: 2,
      name: 'Phone',
      icon: 'call',
      value: '+91 9626307764',
      action: () => {
        Linking.openURL('tel:+919626307764');
      },
    },
    {
      id: 3,
      name: 'Address',
      icon: 'location',
      value: '123 , Good Street , Madurai',
      action: () => {
        const address = '123 , Good Street , Madurai';
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`);
      },
    },
  ];
  

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <Text style={{ fontSize: 30, fontFamily: 'Outfit-bold' }}>Profile</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: Colors.PRIMARY,
        }}
      >
        <Image
          source={require('./../../../assets/images/Manivelan Kalidass.jpg')}
          style={{ width: 90, height: 90, borderRadius: 99 }}
        />
        <Text style={{ fontSize: 26, fontFamily: 'Outfit-medium', color: Colors.WHITE, marginTop: 8 }}>
          Manivelan Kalidass 
        </Text>
        <Text style={{ fontSize: 18, fontFamily: 'Outfit-medium', color: Colors.WHITE, marginTop: 8 }}>
          manivelank73@gmail.com
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        
        <Text style={{ fontSize: 24, fontFamily: 'Outfit-bold' , paddingBottom:20 }}>Profile Menu</Text>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <Ionicons name={item.icon} size={25} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'Outfit', fontSize: 20, marginLeft: 10 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: 24, fontFamily: 'Outfit-bold', paddingBottom: 20 }}>Contact Us</Text>
        <FlatList
          data={contactUsMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
              onPress={item.action}
            >
              <Ionicons name={item.icon} size={25} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'Outfit', fontSize: 20, marginLeft: 10 }}>
                {item.name}: {item.value}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
