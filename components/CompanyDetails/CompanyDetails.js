import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import LogoutComponent from '../Commons/LogoutComponent';
import Svg, {Circle } from 'react-native-svg';;
import { LoginBtn, Styles,theme } from '../../Styles'

import { useNavigation } from '@react-navigation/native';
export default CompanyDetails = () => {
    
  const navigation = useNavigation();
    const [images, setImages] = useState([{id: 1, name: '1'}, {id: 2, name:'2'}])
    // ================================ Show and  hide states =======================
    const [isVisible, setIsVisible] = useState(false);

    // ==================================Functions =================================================================

    return (
        <View style={Styles.CompanyDetailsbody}>
            <View style={{ top: 60 }}>
            <LogoutComponent isVisible={isVisible} />
                <View style={Styles.headerView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="chevron-back" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={{
                        paddingBottom: 15,
                        flex: 0,
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        gap: 40
                    }}>
                        <TouchableOpacity style={Styles.center} onPress={()=>{ setIsVisible(!isVisible)}}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                                <Circle cx="2.5" cy="2.5" r="2.5" fill="#ffff" />
                                <Circle cx="2.5" cy="11.5" r="2.5" fill="#ffff" />
                                <Circle cx="2.5" cy="20.5" r="2.5" fill="#ffff" />
                            </Svg>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ width: 350, padding: 15 }}>
                    <View >
                        <View style={{ padding: 10, backgroundColor: '#fbe0cc', borderRadius: 15, marginBottom: 10, marginTop: -40, width: 90, flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <FontAwesome name="star" size={18} color="#FF8A00" />
                            <Text style={{ fontSize: 20, color: '#ff8a00' }}>4.3</Text>
                        </View>
                        <View style={{ gap: 15 }}>
                            <Text style={Styles.whiteHeading}>African Resonance</Text>
                            <Text style={{ fontSize: 20, color: 'lightgrey' }}>
                                <Entypo name="location-pin" size={30} color="#fff" />
                                Frankenwald,
                                Sandton,
                                2090
                            </Text>
                        </View>

                    </View>

                </View>
                {/* <View style={Styles.companyDetailsLogo}>
                    <Text>Testing</Text>
                </View> */}
                <ScrollView style={Styles.detailsScrollView}>

                    <View>
                        <Text style={Styles.dashboardText}>About Company</Text>
                        <Text style={{ marginBottom: 10, marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                    <FlatList
                        style={{ marginBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={true}
                        data={images}
                        dotsx
                        renderItem={({ item }) => (
                            <View style={Styles.skillStyle} key={item.id}>
                                <View style={{
                                    width: 205,
                                    height: 126,
                                    flexShrink: 0,
                                    marginTop: 10,
                                }}>

                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ columnGap: 8 }}
                        horizontal
                        numberOfLines={2}
                    />
                    <View>
                        <Text style={Styles.dashboardText}>Location</Text>
                        <View style={{flex:0,flexDirection:'row', alignItems:'center',justifyContent:'left',gap:12, marginTop:15}}>
                            <Entypo name="location" size={34} color={theme} />
                            <Text >Sandton </Text>
                        </View>

                    </View>
                </ScrollView>
            </View >

            <View style={Styles.bottomBtns}>
                <TouchableOpacity style={Styles. applyBtn(350)}>
                    <Text style={Styles.Cardnumber}>21</Text>
                    <Text style={Styles.applyBtnText}>Available positions</Text>
                    <Ionicons name="arrow-forward" size={32} color={LoginBtn} />
                </TouchableOpacity>
            </View>
            <View style={Styles.bottomLine}></View>
        </View >
    )
}