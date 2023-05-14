import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';

function OrderPrepairingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      console.log('yuhuuuu');

      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../assets/images/delivery.gif')}
        className="h-80 w-80"
      />
    </View>
  );
}

export default OrderPrepairingScreen;
