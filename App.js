import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Home  from './Pages/Home';
import Conference  from './Pages/Conference';




function Story({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Our Story</Text>
       <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Go to Conference</Text>
      </Pressable>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}  />
        <Drawer.Screen name="Conference" component={Conference} />
        <Drawer.Screen name="Story" component={Story} />
      </Drawer.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;