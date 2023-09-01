import React, { useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image} from 'react-native';
import { Styles } from '../../Styles'
import { Ionicons } from '@expo/vector-icons';
import MySvg from '../Commons/MySvg';
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import LogoutComponent from '../Commons/LogoutComponent';
export default Applications =  ({ route }) => {
    const { userData } = route.params;
    const [selectedTab, setSelectedTab] = useState('applications'); // Initialize with 'applications'


    const navigation = useNavigation();
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    const [isVisible, setIsVisible] = useState(false);
   
    return (
        <View style={Styles.body}>
            <View style={{ top: 90 }}>
            <LogoutComponent isVisible={isVisible} />
                <View style={Styles.headerView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={Styles.dashboardText}>Applocations</Text>
                    </View>
                    <TouchableOpacity style={Styles.center} onPress={()=>{ setIsVisible(!isVisible)}}>
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
                        <Text>Applications({userData.applications.length})</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            Styles.tab,
                            selectedTab === 'interview' ? Styles.selected2 : null,
                        ]}
                        onPress={() => handleTabChange('interview')}
                    >
                        <Text>Interview({userData.interviews.length})</Text>
                    </TouchableOpacity>
                </View>
                {selectedTab === 'applications' ? (
                    <View>
                        <ScrollView style={{ top: 30 }}>
                            {userData.applications.length > 0 ? (
                                userData.applications.map((item, index) => (
                                    <View style={Styles.posts} key={index}>
                                        <View style={Styles.flex}>
                                            <Image 
                                             source={{ uri: item.employer_logo == null ? 'https://www.fintechfutures.com/files/2019/07/synechron.png' : item.employer_logo }}
                                             resizeMode='contain' job_posting_language
                                            style={Styles.iconContainerView} />
                                            <View style={Styles.postDetails}>
                                                <Text style={Styles.more}>{item.job_employment_type}</Text>
                                                <Text style={Styles.dashboardText}>{item.job_title}</Text>
                                                <Text style={{ fontSize: 20, color: 'lightgrey' }}>{item.job_city},{item.job_country},{item.job_state}</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.flex}>
                                            <Text style={Styles.salary}> {item.appllied_at === undefined ? 'Not yet appilied' : item.appllied_at}</Text>
                                            <View style={Styles.rates}>

                                                <Text style={Styles.more} >
                                                    {item.appllied_at === undefined ? 'Not yet appilied' : 'Applied'}
                                                </Text>

                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (

                                <View style={Styles.nothingToShow}>
                                    <MySvg data={"Applications"}/>
                                </View>
                            )}
                        </ScrollView>
                        {/* <NavBar /> */}
                    </View>
                ) : (
                    <View>
                        <ScrollView style={{ top: 30 }}>
                            {userData.interviews.length > 0 ? (
                                userData.interviews.map((item, index) => (
                                    <View style={Styles.posts} key={index}>                                   
                                        <View style={Styles.flex}>
                                        <Image 
                                             source={{ uri: item.employer_logo == null ? 'https://www.fintechfutures.com/files/2019/07/synechron.png' : item.employer_logo }}
                                             resizeMode='contain' job_posting_language
                                            style={Styles.iconContainerView} />
                                            <Text style={Styles.salary}><Text style={Styles.btnT}>Interviewed with</Text> {item.company_name}</Text>
                                            
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <MySvg data={"Interviews"}/>

                            )}
                        </ScrollView>
                        {/* <NavBar /> */}
                    </View>
                )}
            </View>

        </View >


    )
}
