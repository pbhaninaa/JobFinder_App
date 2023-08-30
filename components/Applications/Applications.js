import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import { Styles } from '../../Styles'
import { Octicons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import NavBar from '../Commons/NavBar';
import MySvg from '../Commons/MySvg';
import Svg, { Path, Circle } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';



export default Applications = () => {
    
    const [selectedTab, setSelectedTab] = useState('applications'); // Initialize with 'applications'
    const [data, setData] = useState('applied'); // Initialize with 'data'
    const [application, setApplication] = useState([1,2])
    const [interviews, setInterviews] = useState([1,2,3,4])
    const [company, setCompany] = useState('MLab');


    const navigation = useNavigation();
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <View style={Styles.body}>
            <View style={{ top: 90 }}>
                <View style={Styles.headerView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={Styles.dashboardText}>Applocations</Text>
                    </View>
                    <TouchableOpacity style={Styles.center}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                            <Circle cx="2.5" cy="2.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="11.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="20.5" r="2.5" fill="#000" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={Styles.toogleDiv}>
                    <TouchableOpacity
                        style={[
                            Styles.tab,
                            selectedTab === 'applications' ? Styles.selected2 : null,
                        ]}
                        onPress={() => handleTabChange('applications')}
                    >
                        <Text>Applications({application.length})</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            Styles.tab,
                            selectedTab === 'interview' ? Styles.selected2 : null,
                        ]}
                        onPress={() => handleTabChange('interview')}
                    >
                        <Text>Interview({interviews.length})</Text>
                    </TouchableOpacity>
                </View>
                {selectedTab === 'applications' ? (
                    <View>
                        <ScrollView style={{ top: 30 }}>
                            {application.length > 0 ? (
                                application.map((item, index) => (
                                    <View style={Styles.posts} key={index}>
                                        <View style={Styles.flex}>
                                            <View style={Styles.iconContainerView}></View>
                                            <View style={Styles.postDetails}>
                                                <Text style={Styles.more}>Full time</Text>
                                                <Text style={Styles.dashboardText}>Graphic Designer</Text>
                                                <Text style={{ fontSize: 20, color: 'lightgrey' }}>Manth Inch. <Entypo name="dot-single" size={24} color="lightgrey" /> London </Text>
                                            </View>
                                        </View>
                                        <View style={Styles.flex}>
                                            <Text style={Styles.salary}> {data === undefined ? 'Not yet appilied' : 'Applied on 20/05/2021'}</Text>
                                            <View style={Styles.rates}>

                                                <Text style={Styles.more} >
                                                    {data === undefined ? 'Not yet appilied' : 'Applied'}
                                                </Text>

                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (

                                <View style={Styles.nothingToShow}>
                                    <MySvg />

                                </View>
                            )}
                        </ScrollView>
                        {/* <NavBar /> */}
                    </View>
                ) : (
                    <View>
                        <ScrollView style={{ top: 30 }}>
                            {interviews.length > 0 ? (
                                interviews.map((item, index) => (
                                    <View style={Styles.posts} key={index}>                                   
                                        <View style={Styles.flex}>
                                            <Text style={Styles.salary}>Interviewed with {company+index}</Text>
                                            <View style={Styles.rates}>
                                                <TouchableOpacity >
                                                    <Text style={Styles.more} >
                                                        Details
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <MySvg />

                            )}
                        </ScrollView>
                        {/* <NavBar /> */}
                    </View>
                )}
            </View>

        </View >


    )
}
