import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Styles } from '../../Styles'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import MySvg from '../Commons/MySvg';
import LogoutComponent from '../Commons/LogoutComponent';


export default Applications = ({ route }) => {

    const { data } = route.params;
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('applications');
    const [hours, setHours] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const JobTittleSubString = (Job_Name) => {
        const name = Job_Name.substr(0, 18);
        return Job_Name.length > 18 ? name + '...' : name
    };
   
    useEffect(() => {
        setHours(new Date().getHours());
    }, [])
    return (
        <View style={Styles.body}>
            <View style={{ top: 30 }}>
            <LogoutComponent isVisible={isVisible} />
                <View style={Styles.headerView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={Styles.dashboardText}>Notifications</Text>
                    </View>
                    <TouchableOpacity style={Styles.center} onPress={()=>{ setIsVisible(!isVisible)}}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                            <Circle cx="2.5" cy="2.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="11.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="20.5" r="2.5" fill="#000" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ top: 30 }}>
                    {data.notifications.length > 0 ? (
                        data.notifications.map((item, index) => (
                            <View style={Styles.posts} key={index}>
                                <View style={Styles.flex}>
                                    <View style={Styles.iconContainerView}>
                                        {item.id == 1 ? <MaterialIcons name="notifications-active" size={35} color="white" /> : <Ionicons name="notifications" size={35} color="aliceblue" />}

                                    </View>
                                    <View style={Styles.postDetails}>
                                        <Text style={Styles.more}>Sender : {item.notification_sender}</Text>
                                        <Text style={Styles.dashboardText}>{JobTittleSubString(item.notification_title)}</Text>
                                    </View>
                                </View>
                                <View style={Styles.flex}>
                                    <Text style={{ fontSize: 20, color: 'lightgrey' }}>{item.notification_body}</Text>
                                </View>
                                <View style={Styles.flex}>
                                    <Text style={Styles.salary}>Recieved at {item.response_time}</Text>
                                    <View style={Styles.rates}></View>
                                </View>
                            </View>
                        ))
                    ) : (

                        <View style={Styles.nothingToShow}>
                            <MySvg data={"Notifications"} />
                        </View>
                    )}
                </ScrollView>
            </View>
            {/* <NavBar /> */}
            {/* <View style={Styles.bottomLine}></View> */}
        </View >


    )
}
