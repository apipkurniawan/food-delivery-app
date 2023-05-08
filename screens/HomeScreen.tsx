/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text className="bg-red-100">Home Screen</Text>
      <Button
        title="Go to Restaurant"
        onPress={() => navigation.navigate('Restaurant')}
      />
    </View>
  );
}
export default HomeScreen;
