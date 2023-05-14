/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme/theme-color';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';

const RestaurantScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item: any = params;
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <CartIcon />
      <ScrollView>
        {/* header */}
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-8 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        {/* deskripsi */}
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            {/* title */}
            <Text className="text-3xl font-bold">{item.name}</Text>
            {/* alamat */}
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  className="h-4 w-4"
                  source={require('../assets/images/fullStar.png')}
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) .
                    <Text className="font-semibold"> {item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby . {item.address}
                </Text>
              </View>
            </View>
            {/* subtitle */}
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        {/* menu */}
        <View className="pb-36 bg-white">
          {/* title */}
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish: any, index: number) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
