import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, Linking } from 'react-native';
import { FontAwesome5, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';
import { Styles } from '../../Styles'
import MapView, { Marker } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
export default JobDetails = ({ route }) => {
    const { jobData } = route.params;
    const navigation = useNavigation();
    // ================================ Show and  hide states =======================
    const [show, setShow] = useState('description')


    // ==================================Functions =================================================================
    const JobTittleSubString = (Job_Name) => {
        const name = Job_Name.substr(0, 18);
        return Job_Name.length > 18 ? name + '...' : name
    };


    const [mapType, setMapType] = useState('standard');
    const toggleMapType = () => {
        setMapType(prevMapType => prevMapType === 'standard' ? 'satellite' : 'standard');
    };
    return (
        <View style={Styles.body}>
            <View style={{ top: 70 }}>
                <View style={Styles.headerView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{
                        paddingBottom: 15,
                        flex: 0,
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        gap: 40
                    }}>
                        <TouchableOpacity style={Styles.center}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <Path d="M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z" fill="#4F5B79" />
                            </Svg>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <Path d="M2.42033 15.7767C1.75758 16.0837 1 15.5998 1 14.8694V1.6875C1 1.58272 1.05086 1.43096 1.24427 1.27736C1.43942 1.12239 1.74747 1 2.125 1H14.875C15.2525 1 15.5606 1.12239 15.7557 1.27736C15.9491 1.43096 16 1.58272 16 1.6875V14.8694C16 15.5998 15.2424 16.0837 14.5797 15.7767L9.76098 13.5445C8.96115 13.174 8.03885 13.174 7.23902 13.5445L2.42033 15.7767Z" stroke="#4F5B79" stroke-width="2" />
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.center}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
                                <Circle cx="2.5" cy="2.5" r="2.5" fill="#4F5B79" />
                                <Circle cx="2.5" cy="11.5" r="2.5" fill="#4F5B79" />
                                <Circle cx="2.5" cy="20.5" r="2.5" fill="#4F5B79" />
                            </Svg>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{
                    width: 350,
                    padding: 15,
                }}>
                    <View style={Styles.flex}>
                        <Image
                            source={{ uri: jobData.employer_logo == null ? 'https://www.fintechfutures.com/files/2019/07/synechron.png' : jobData.employer_logo }}
                            resizeMode='contain' job_posting_language
                            style={Styles.PostDetailsIcon} />

                        <View style={Styles.postDetails}>
                            <Text style={Styles.more}>{jobData.job_employment_type}</Text>
                            <Text style={Styles.dashboardText}>{JobTittleSubString(jobData.job_title)}</Text>
                            <Text style={{ fontSize: 20, color: 'lightgrey' }}>{jobData?.job_city}.{jobData?.job_state}.{jobData?.job_country}</Text>

                        </View>

                    </View>
                    <View style={Styles.flex}>
                        <Text style={Styles.salary}>{jobData.job_min_salary === null ? "Salary not disclosed" : jobData.job_min_salary}</Text>
                        <View style={Styles.rate}>
                            <FontAwesome name="star" size={18} color="#FF8A00" />
                            <Text style={{ color: '#FF8A00' }}>{jobData.company_rate}</Text>
                        </View>
                    </View>
                </View>


                <ScrollView style={Styles.detailsScrollView}>
                    <View style={Styles.flex}>
                        <TouchableOpacity onPress={() => { setShow('description') }} style={Styles.UploadCVBtn}>
                            <Text style={Styles.btnText}>Description</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShow('location') }} style={Styles.UploadCVBtn}>
                            <Text style={Styles.btnText}>Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShow('requiremets') }} style={Styles.editBtn("#ede3fa")} >
                            <Text style={Styles.btnText}>Requiremets</Text>
                        </TouchableOpacity>
                    </View>
                    {show === 'requiremets' ? (
                        <View style={Styles.center}>
                        <Text >{jobData.job_requirements}</Text>
                    </View>
                    ) : show === 'location' ? (
                        <View style={Styles.center}>
                            <Text style={Styles.more}>{jobData.job_city}{jobData.job_state}{jobData.job_country}</Text>
                            <MapView
                                style={Styles.map}
                                initialRegion={{
                                    latitude: jobData.job_latitude,
                                    longitude: jobData.job_longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                mapType={mapType}
                            >
                                <Marker
                                    coordinate={{ latitude: jobData.job_latitude, longitude: jobData.job_longitude }}
                                    title="Marker Title"
                                    description="Marker Description"
                                />
                                <TouchableOpacity onPress={toggleMapType} style={Styles.mapBtn}>
                                    <Text style={{color:'aliceblue'}}>
                                        Show {mapType === 'standard' ? 'Satellite' : 'Standard'}
                                    </Text>
                                </TouchableOpacity>
                            </MapView>

                        </View>
                    ) : show === 'description' ? (
                        <View style={Styles.center}>
                            <Text >{jobData.job_description}</Text>
                        </View>
                    ) :
                        <View style={Styles.center}>
                            <Text style={Styles.btnText}>There's nothing to show</Text>
                        </View>
                    }
                </ScrollView>
            </View>

            <View style={Styles.bottomBtns}>
                <TouchableOpacity style={{
                    height: 55,
                    width: '35%',
                    backgroundColor: '#E7D5FF',
                    borderRadius: 15,
                    marginRight: 15,
                    flex: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => navigation.navigate('CompanyDetails')}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M5.37867 6.72958H9.04492V8.26892H5.37867V6.72958Z" fill="#502488" />
                        <Path d="M5.37867 10.2299H9.04492V11.7693H5.37867V10.2299Z" fill="#502488" />
                        <Path d="M5.37867 13.7303H9.04492V15.2696H5.37867V13.7303Z" fill="#502488" />
                        <Path d="M5.37867 17.2306H9.04492V18.77H5.37867V17.2306Z" fill="#502488" />
                        <Path d="M12.7928 20.8196V8.24184L20.8308 8.23245V16.7175H22.3692V7.46189C22.3692 7.04199 22.0184 6.6922 21.5991 6.6922L12.0227 6.70338C11.5982 6.70389 11.2544 7.0483 11.2544 7.47307V20.8196H3.16923V5.58907L11.2544 3.41404V5.16148H12.7928V2.4101C12.7928 1.91215 12.3051 1.53738 11.8238 1.66681L2.20025 4.25569C1.86431 4.3461 1.63077 4.65086 1.63077 4.99897V20.8196H0V22.359H24V20.8196H12.7928Z" fill="#502488" />
                        <Path d="M20.8308 18.103H22.3692V19.5369H20.8308V18.103Z" fill="#502488" />
                        <Path d="M14.9551 10.2299H18.6213V11.7693H14.9551V10.2299Z" fill="#502488" />
                        <Path d="M14.9551 13.7303H18.6213V15.2696H14.9551V13.7303Z" fill="#502488" />
                        <Path d="M14.9551 17.2306H18.6213V18.77H14.9551V17.2306Z" fill="#502488" />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.applyBtn(200)}
                    onPress={() => { Linking.openURL(jobData.job_apply_link) }}
                >
                    <FontAwesome5 name="file-upload" size={25} color="#E7D5FF" />
                    <Text style={Styles.applyBtnText}>Apply now</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={Styles.bottomLine}></View> */}
        </View >
    )
}