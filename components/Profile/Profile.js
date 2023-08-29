import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {  FontAwesome5,Ionicons, AntDesign } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../Styles'
export default Profile = () => {
    
  const navigation = useNavigation();
    const [cv, setCV] = useState(null)
    const [skills, setSkills] = useState(["Java", "Angular", "React", "React Native", "View", "Github"])
    const [education, setEducation] = useState([{ varsity: 'WSU', qualification: 'IT', period: "5years" },
    { varsity: 'WSU', qualification: 'IT', period: "5years" }
    ]);
    const [experience, setExperience] = useState([
        { position: 'Junior Dev', Company: 'Reverside', period: "5 years" },
        { position: 'Intermediate Dev', Company: 'MLab', period: "3 years" }
    ]);
    // ================================ Show and  hide states =======================
    const [showEducation, setShowEducation] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showMyInfor, setShowMyInfor] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    // ==================================Functions =================================================================
    edit = () => {
        alert('this is edit')
    }
    upload = () => {
        alert('this is upload')
    }
    return (
        <View style={Styles.body}>
            <View style={{ top: 30 }}>
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
                <View style={Styles.flex}>
                    <View style={{ gap: 15 }}>
                        <Text style={Styles.dashboardText}>Philasande Bhani</Text>
                        <Text style={{ fontSize: 20, color: 'grey', }}>Software Developer</Text>
                    </View>
                    {/* Profile picture */}
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 85, height: 85, backgroundColor: '#7939CB', borderRadius: 20, }}>
                    </View>
                </View>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={edit} style={Styles.editBtn}>
                        <Text style={Styles.btnText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={upload} style={Styles.UploadCVBtn}>
                        <FontAwesome5 name="file-upload" size={24} color="#7939CB" />
                        <Text style={Styles.btnText}>Upload CV</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={Styles.detailsScrollView}>
                    <View>
                        <View style={{ flex: 0, paddingBottom: 15, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <Text style={Styles.dashboardText}>About Me</Text>
                            <TouchableOpacity onPress={() => setShowMyInfor(prevShowSkills => !prevShowSkills)}>

                                {showMyInfor ? <AntDesign name="minuscircleo" size={24} color="#7939CB" /> : <AntDesign name="pluscircleo" size={24} color="#7939CB" />}

                            </TouchableOpacity>
                        </View>
                        {showMyInfor && (
                            <Text style={{ marginBottom: 100 }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        )}

                    </View>
                    <View>
                        <View style={{ flex: 0, paddingBottom: 15, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                            <Text style={Styles.dashboardText}>Education</Text>
                            <TouchableOpacity onPress={() => setShowEducation(prevShowEducation => !prevShowEducation)}>
                                {showEducation ? <AntDesign name="minuscircleo" size={24} color="#7939CB" /> : <AntDesign name="pluscircleo" size={24} color="#7939CB" />}

                            </TouchableOpacity>
                        </View>
                        {showEducation && (
                            <FlatList
                                style={{ marginBottom: 100 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={education}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item}>
                                        <View style={Styles.selectProfilePictureButton}>
                                            <View>
                                                <Text style={Styles.dashboardText}>Varsity Name: {item.varsity}</Text>
                                                <Text>Qualification: {item.qualification}</Text>
                                                <Text style={{ marginBottom: 5 }}>
                                                    Period: {item.period}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ columnGap: 8 }}
                                horizontal
                                numberOfLines={2}
                            />
                            // education.map((item, index) => (
                            //     <ScrollView key={index} style={Styles.skillStyles}>
                            //         <View style={Styles.selectProfilePictureButton}>
                            //             <View>
                            //                 <Text style={Styles.dashboardText}>Varsity Name: {item.varsity}</Text>
                            //                 <Text>Qualification: {item.qualification}</Text>
                            //                 <Text style={{ marginBottom: 5 }}>
                            //                     Period: {item.period}
                            //                 </Text>
                            //             </View>
                            //         </View>
                            //     </ScrollView>
                            // ))
                        )}


                    </View>

                    <View>
                        <View style={{ flex: 0, paddingBottom: 15, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                            <Text style={Styles.dashboardText}>Skills</Text>
                            <TouchableOpacity onPress={() => setShowSkills(prevShowSkills => !prevShowSkills)}>
                                {showSkills ? <AntDesign name="minuscircleo" size={24} color="#7939CB" /> : <AntDesign name="pluscircleo" size={24} color="#7939CB" />}

                            </TouchableOpacity>
                        </View>
                        {showSkills && (
                            <FlatList
                                style={{ marginBottom: 100 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={skills}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item}>
                                        <Text style={Styles.skillText}>{item}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ columnGap: 8 }}
                                horizontal
                                numberOfLines={2}
                            />)}
                    </View>
                    <View>
                        <View style={{ flex: 0, paddingBottom: 15, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                            <Text style={Styles.dashboardText}>Experience</Text>
                            <TouchableOpacity onPress={() => setShowExperience(prevShowEducation => !prevShowEducation)}>
                                {showExperience ? <AntDesign name="minuscircleo" size={24} color="#7939CB" /> : <AntDesign name="pluscircleo" size={24} color="#7939CB" />}

                            </TouchableOpacity>
                        </View>
                        {showExperience && (
                            <FlatList
                                style={{ marginBottom: 200 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={experience}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item}>
                                        <View style={Styles.selectProfilePictureButton}>
                                            <View>
                                                <Text style={Styles.dashboardText}>Company: {item.Company}</Text>
                                                <Text>Position: {item.position}</Text>
                                                <Text style={{ marginBottom: 5 }}>
                                                    Duration: {item.period}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ columnGap: 8 }}
                                horizontal
                                numberOfLines={2}
                            />

                        )}
                    </View>
                </ScrollView>
            </View>
            {/* <NavBar /> */}
            {/* <View style={Styles.bottomLine}></View> */}
        </View >
    )
}