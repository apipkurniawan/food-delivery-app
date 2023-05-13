import React from 'react';
import {Text, View, Image} from 'react-native';

function OrderPrepairingScreen() {
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
