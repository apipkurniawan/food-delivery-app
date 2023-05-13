import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

function OrderPrepairingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('yuhu');

    setTimeout(() => {
      console.log('====================================');
      console.log('here');
      console.log('====================================');
      navigation.navigate('Delivery');
    }, 3000);
  });

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text style={{color: 'red'}}>Hello</Text>
    </View>
  );
}

export default OrderPrepairingScreen;
