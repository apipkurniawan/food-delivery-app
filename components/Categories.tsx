/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import {getCategories} from '../api';
import {urlFor} from '../sanity';

function Categories() {
  const [activeCategory, setActiveCategory] = useState<number>();
  let [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
    });
  });

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((category: any, index: number) => {
          let isActive = category._id === activeCategory;
          let textClass = isActive
            ? ' font-semibold text-gray-800'
            : ' text-gray-500';
          let btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200';
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}>
                <Image
                  style={{width: 45, height: 45}}
                  source={{uri: urlFor(category.image).url()}}
                />
              </TouchableOpacity>
              <Text className={'text-sm ' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories;
