/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
//import { ClerkProvider, SignedIn , SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  return (
    /*<ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_ZW5nYWdlZC1rYXR5ZGlkLTM0LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <SignedIn>
          <NavigationContainer>

          </NavigationContainer>
      </SignedIn>

      <SignedOut>
       <Login/>
      </SignedOut>

      <StatusBar style="auto" />
    </View>
    </ClerkProvider>*/
    /*<View style={styles.container}>
       <NavigationContainer>
       <Login />
       </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}*/import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Font is not yet loaded, you might want to render a loading screen here
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
