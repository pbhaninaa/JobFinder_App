import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Styles } from '../../Styles'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default HomeComponent = () => {

    return (
        <SafeAreaView style={Styles.container} >
            {/* <View style={Styles.oblong}></View> */}
            <View style={Styles.content}>
                <FontAwesome name="suitcase" size={180} color="white" textAlign="center" />
                <Text style={Styles.header}>
                    Finding a job has never been easier
                </Text>
                <Text style={Styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                </Text>
            </View>
            <View style={Styles.menuContainer}>
                <TouchableOpacity style={Styles.candidate}>
                    <Feather name="user" size={24} color="black" />
                    <Text>Candidate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.company}>
                    <FontAwesome5 name="building" size={24} color="black" />
                    <Text>Company</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.bottomLine}></View>
        </SafeAreaView>
    )
}