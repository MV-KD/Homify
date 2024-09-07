import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PageHeading } from './../../Components/PageHeading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './../BusinessListByCategoryScreen/BusinessListItem';

export default function BookingScreen() {
  const userEmail = 'manivelank73@gmail.com';
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserBookings();
  }, []);

  const getUserBookings = () => {
    setLoading(true);
    setError(null);
    GlobalApi.getUserBookings(userEmail)
      .then(resp => {
        console.log(resp);
        setBookingList(resp.bookings);
      })
      .catch(err => {
        console.error('Error fetching bookings:', err);
        setError('Error fetching bookings. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: 'Outfit-medium', fontSize: 24 }}>My Bookings</Text>
      <View>
        <FlatList
          data={bookingList}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={getUserBookings}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} booking={item} />
          )}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center', paddingVertical: 5 }}>
              <Text>No bookings found.</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
