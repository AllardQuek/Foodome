import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS, SIZES} from "../constants";
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Icon} from "react-native-elements";

const CustomerOrVendor = ({ navigation }) => {
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <Appbar style={styles.appBar}>
                <MaterialCommunityIcons
                    style={{ color: "#F9881F" }}
                    name="food-croissant"
                    size={64}
                    color="black"
                />
            </Appbar>

            <Text style={styles.heading}>Are you a{'\n'} buyer or a seller?</Text>
            <Icon onPress={() =>
                navigation.navigate("Home")
            }
                reverse
                name='person-outline'
                type='ionicon'
                color='#F9881F'
                size={60}
            />
            <Text style={styles.iconHeading}>Buyer</Text>
            <Text style={styles.iconLabel}>Order from your favorite{'\n'}stores or vendors!</Text>
            <Icon
                reverse
                name='pricetag-outline'
                type='ionicon'
                color='#F9881F'
                size={60}
            />
            <Text style={styles.iconHeading}>Seller</Text>
            <Text style={styles.iconLabel}>Sell and find buyers{'\n'}for your products!</Text>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    appBar: {
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    heading: {
        marginTop: 50,
        marginBottom: 50,
        fontWeight: 'bold',
        fontSize: 22,
        justifyContent: 'center',
        textAlign: 'center',
    },
    iconHeading: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
    },
    iconLabel: {
        marginTop: 5,
        marginBottom: 60,
        fontSize: 14,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'grey'
    },
});

export default CustomerOrVendor;