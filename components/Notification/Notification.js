import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Styles } from '../../Styles'

import {Ionicons } from '@expo/vector-icons';
import Svg, {  Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';



export default Applications = ({route}) => {
    
    const { jobDatas } = route.params;
  const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('applications');
    const JobTittleSubString = (Job_Name) => {
        const name = Job_Name.substr(0, 18);
        return Job_Name.length > 18 ? name + '...' : name
    };
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <View style={Styles.body}>
            <View style={{ top: 30 }}>
                <View style={Styles.headerView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={Styles.dashboardText}>Notifications</Text>
                    </View>
                    <TouchableOpacity style={Styles.center}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                            <Circle cx="2.5" cy="2.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="11.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="20.5" r="2.5" fill="#000" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={Styles.posts}>
                        <View style={Styles.flex}>
                            <View style={Styles.iconContainerView}><Ionicons name="notifications" size={35} color="aliceblue" /></View>
                            <View style={Styles.postDetails}>
                            <Text style={Styles.more}>{jobData.job_employment_type}</Text>
                            <Text style={Styles.dashboardText}>{JobTittleSubString(jobData.job_title)}</Text>
                            <Text style={{ fontSize: 20, color: 'lightgrey' }}>{jobData?.job_city}.{jobData?.job_state}.{jobData?.job_country}</Text>

                        </View>
                        </View>
                        <Text style={{ fontSize: 20, color: 'grey' }}>
                            The kebab menu, also known as the three dots menu.
                        </Text>
                        <Text style={{ fontSize: 20, color: 'grey', marginTop: 5 }}>
                            5h ago
                        </Text>
                    </View>
                </ScrollView>
            </View>
            {/* <NavBar /> */}
            {/* <View style={Styles.bottomLine}></View> */}
        </View >


    )
}
