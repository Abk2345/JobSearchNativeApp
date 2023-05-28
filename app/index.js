import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  return (
    // <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconurl={icons.menu} dimension="60%" handlePress={() => { alert("Implement drawer!") }} />
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconurl={images.profile
            } dimension="100%" handlePress={() => { alert("Implement Profile!") }} />
          },
          headerTitle: "Jobs4U",
          headerTitleAlign: 'center',
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: 'bold' },
          headerStyle: {
            backgroundColor: COLORS.primary
          },
        }}

      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) [
                router.push(`/search/${searchTerm}`)
              ]
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
    // </NavigationContainer>
  );
}
