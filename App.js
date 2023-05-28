import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from './constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from './components';
// import { NavigationContainer } from '@react-navigation/native';
import { Layout } from './_layout';


export default function App() {
  // const router = useRouter();
  return (
    // <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightwhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightwhite },
        }}
      />
    </SafeAreaView>
    // </NavigationContainer>
  );
}
