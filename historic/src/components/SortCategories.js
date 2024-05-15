import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { sortCategoryData } from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function SortCategories() {

  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View style={styles.container}>
      {
        sortCategoryData.map((sort, index) => {
          let isActive = sort == activeSort;
          let activeButtonClass = isActive ? styles.active : {};

          return (
            <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[styles.activeOnPress, activeButtonClass]}
            >
            <Text
              style={{
                fontSize: wp(4),
                color: isActive ? "black" : "#d3d3d3",
              }}
            >{sort}</Text>
            </TouchableOpacity>
          )

        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center" ,
    marginHorizontal: 16,
    backgroundColor: "#2f4f4f",
    borderRadius: 50,
    padding: 8,
  },


  active: {
    backgroundColor: "#fff8dc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },

  activeOnPress: {
    padding: 12,
    borderRadius: 50,
  },
});