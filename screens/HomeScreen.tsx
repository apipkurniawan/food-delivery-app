/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar, TextInput, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';

import {themeColors} from '../theme/theme-color';
import Categories from '../components/Categories';

function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="light-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 mt-3 px-4 pb-2">
        <View className="flex-row flex-1 items-center py-1 px-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurant" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 pl-2 border-l-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3 rounded-full">
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
