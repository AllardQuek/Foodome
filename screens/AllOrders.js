import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { SIZES, COLORS, FONTS } from "../constants";

import Animated from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
import cart from "../data/shoppingCart";
import HomeHeader from "../components/HomeHeader";

const AllOrders = () => {
    const data = [
        {
            key: 1,
            name: "Normal Orders",
          },
          {
            key: 2,
            name: "Group Orders",
          },
    ];

    // function renderHeader() {
    //     return (
    //         <View style={{ flexDirection: 'row' }}>
    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingLeft: SIZES.padding * 2,
    //                     justifyContent: 'center'
    //                 }}
    //                 onPress={() =>
    //                     navigation.navigate("Home")
    //                   }
    //             >
    //                 <Image
    //                     source={icons.back}
    //                     resizeMode="contain"
    //                     style={{
    //                         width: 30,
    //                         height: 30
    //                     }}
    //                 />
    //             </TouchableOpacity>

    //             {/* Restaurant Name Section */}
    //             <View
    //                 style={{
    //                     flex: 1,
    //                     alignItems: 'center',
    //                     justifyContent: 'center'
    //                 }}
    //             >
    //                 <View
    //                     style={{
    //                         height: 50,
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         paddingHorizontal: SIZES.padding * 3,
    //                         borderRadius: SIZES.radius,
    //                         backgroundColor: COLORS.lightGray3
    //                     }}
    //                 >
    //                     <Text style={{ ...FONTS.h3 }}>Shopping Cart</Text>
    //                 </View>
    //             </View>

    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingRight: SIZES.padding * 2,
    //                     justifyContent: 'center'
    //                 }}
    //             >
    //                 <Image
    //                     source={icons.list}
    //                     resizeMode="contain"
    //                     style={{
    //                         width: 30,
    //                         height: 30
    //                     }}
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    function renderOrderList() {
        const renderItem = ({ item }) => (
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3,
                        borderBottomColor: COLORS.lightGray2,
                        borderBottomWidth: 1
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.quantity}</Text>
                </View>
              )}
            />
        );
    
        return (
          <FlatList
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding * 2,
              paddingBottom: 30,
            }}
          />
        );
      }
    
    return (
        <SafeAreaView style={styles.container}>
          {/* <HomeHeader currentLocation={currentLocation} navigation={navigation} /> */}
          {renderOrderList()}
        </SafeAreaView>
    );

    return (
        <View style={styles.container}>
        <StatusBar hidden />
        <Animated.Flatlist
        data = {data}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
            return (
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3,
                        borderBottomColor: COLORS.lightGray2,
                        borderBottomWidth: 1
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.quantity}</Text>
                </View>
              )}
            />
            )
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AllOrders;