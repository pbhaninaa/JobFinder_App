import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { FontAwesome5, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import LogoutComponent from '../Commons/LogoutComponent';
// import DocumentPicker from 'react-native-document-picker';
import { Styles,theme } from '../../Styles'
export default Profile = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation();
    const [cv, setCV] = useState(null)
    const [isVisible, setIsVisible] = useState(false);
    // ================================ Show and  hide states =======================
    const [showEducation, setShowEducation] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showMyInfor, setShowMyInfor] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    // ==================================Functions =================================================================
    edit = () => {
        alert('Not yet implemented but it should direct you to edit your profile ')
    }
    upload = async () => {
        alert('This is not yet implemented but it should direct you to upload your cv')
        // try {
        //     const result = await DocumentPicker.pick({
        //       type: [DocumentPicker.types.allFiles],
        //     });

        //     setCV(result);
        //   } catch (err) {
        //     if (DocumentPicker.isCancel(err)) {
        //       // User cancelled the picker
        //     } else {
        //       // Handle other errors
        //     }
        //   }
    }
    return (
        <View style={Styles.body}>
            <View style={{ top: 30 }}>
            <LogoutComponent isVisible={isVisible} />
                <View style={Styles.headerView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={Styles.dashboardText}>Profile</Text>
                    </View>
                    <TouchableOpacity style={Styles.center} onPress={()=>{ setIsVisible(!isVisible)}}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                            <Circle cx="2.5" cy="2.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="11.5" r="2.5" fill="#000" />
                            <Circle cx="2.5" cy="20.5" r="2.5" fill="#000" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={Styles.flex}>
                    <View style={{ gap: 15 }}>
                        <Text style={Styles.dashboardText}>{data.name} {data.surname} </Text>
                        <Text style={{ fontSize: 20, color: 'grey', }}>{data.profession}</Text>
                    </View>
                    <Image
                        source={{ uri: data.image }}
                        style={Styles.profilePic} />
                </View>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create')} style={Styles.editBtn("#ede3fa")}>
                        <Text style={Styles.btnText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={upload} style={Styles.UploadCVBtn}>
                        {cv === null ? <FontAwesome5 name="file-upload" size={24} color={theme} /> : <MaterialIcons name="file-download-done" size={24} color={theme} />}

                        <Text style={Styles.btnText}>Upload CV</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={Styles.detailsScrollView}>
                    <View>
                        <View style={Styles.flexingWithIcon}>
                            <Text style={Styles.dashboardText}>About Me</Text>
                            <TouchableOpacity style={Styles.add} onPress={() => setShowMyInfor(prevShowSkills => !prevShowSkills)}>
                                <Text>
                                    {showMyInfor ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                                </Text>

                            </TouchableOpacity>
                        </View>
                        {showMyInfor && (
                            <Text style={{ marginBottom: 10 }}>
                                {data.summary}
                            </Text>
                        )}

                    </View>
                    <View>
                        <View style={Styles.flexingWithIcon}>
                            <Text style={Styles.dashboardText}>Education</Text>
                            <TouchableOpacity style={Styles.add} onPress={() => setShowEducation(prevShowEducation => !prevShowEducation)}>
                                <Text>
                                    {showEducation ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {showEducation && (
                            <FlatList
                                style={{ marginBottom: 10 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={data.education}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item.id}>
                                        <View style={Styles.selectProfilePictureButton}>
                                            <View>
                                                <Text style={Styles.btnT}>Varsity: {item.university}</Text>
                                                <Text style={{ marginBottom: 5, marginTop: 5 }}>Qualification: {item.qualification}</Text>
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
                        <View style={Styles.flexingWithIcon}>
                            <Text style={Styles.dashboardText}>Skills</Text>
                            <TouchableOpacity style={Styles.add} onPress={() => setShowSkills(prevShowSkills => !prevShowSkills)}>
                                <Text>
                                    {showSkills ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {showSkills && (
                            <FlatList
                                style={{ marginBottom: 10 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={data.skills}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item.id}>
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
                        <View style={Styles.flexingWithIcon}>
                            <Text style={Styles.dashboardText}>Experience</Text>
                            <TouchableOpacity style={Styles.add} onPress={() => setShowExperience(prevShowEducation => !prevShowEducation)}>
                                <Text>
                                    {showExperience ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {showExperience && (
                            <FlatList
                                style={{ marginBottom: 200 }}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={true}
                                data={data.experience}
                                dotsx
                                renderItem={({ item }) => (
                                    <View style={Styles.skillStyle} key={item.id}>
                                        <View style={Styles.selectProfilePictureButton}>
                                            <View>
                                                <Text style={Styles.btnT}>Company: {item.company}</Text>
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