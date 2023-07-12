import * as React from 'react';
import { Pressable, View, Text } from 'react-native';

function Conference({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Conference Details</Text>
        <Pressable
          onPress={() => navigation.navigate('Story')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Go to Story</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Open Drawer</Text>
        </Pressable>
      </View>
    );
  }

  export default Conference;