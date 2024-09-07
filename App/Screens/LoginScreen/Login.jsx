import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { useOAuth } from "@clerk/clerk-expo"; // Remove Clerk-related imports
// import { useWarmUpBrowser } from '../../hooks/WarmUpBrowser'; // Remove Clerk-related imports
// import { useWarmUpBrowser } from '../../hooks/WarmUpBrowser';

// Comment out the useWarmUpBrowser hook
// useWarmUpBrowser();
// WebBrowser.maybeCompleteAuthSession(); // Remove Clerk-related imports

//export default function Login() {
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" }); // Remove Clerk-related hooks

  // const onPress = React.useCallback(async () => {
  //   try {
  //     const { createdSessionId, signIn, signUp, setActive } =
  //       await startOAuthFlow();

  //     if (createdSessionId) {
  //       setActive({ session: createdSessionId });
  //     } else {
  //       // Use signIn or signUp for next steps such as MFA
  //     }
  //   } catch (err) {
  //     console.error("OAuth error", err);
  //   }
  // }, []);
  /*const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('TabNavigation'); // Navigate to the TabNavigation component
  };
  const onPress = () => {
    // Define your onPress logic here
    console.log('Button pressed');
  };


  

  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('./../../../assets/images/login.jpg')} style={styles.loginImage} />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: 'white', textAlign: 'center' }}>
          Let's find
          <Text style={{ fontWeight: 'bold' }}> Professional cleaning and repair </Text>Service
        </Text>

        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>
          Best app to find services near you which deliver you a Professional services.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: 'blue' }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}*/
export default function Login() {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('TabNavigation'); // Navigate to the TabNavigation component
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('./../../../assets/images/login.jpg')} style={styles.loginImage} />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: 'white', textAlign: 'center' }}>
          Let's find
          <Text style={{ fontWeight: 'bold' }}> Professional cleaning and repair </Text>Service
        </Text>

        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>
          Best app to find services near you which deliver you a Professional services.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: 'blue' }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    alignItems: 'center',
    marginTop: 70,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 15
  },
  subContainer: {
    width: '100%',
    backgroundColor: 'blue',
    height: '70%',
    marginTop: -35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 99,
    marginTop: 40
  }
});
