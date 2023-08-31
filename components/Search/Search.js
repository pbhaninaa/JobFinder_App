import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, Image } from 'react-native';
import { Styles } from '../../Styles'
import { Ionicons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import useFetch from '../useFetch'

export default Search = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation();
    const [itemToSearch, setSearch] = useState('developer');
    const [testing, setTesting] = useState('')

    // const { data, isLoading, Error } = useFetch("search", {
    //     query: itemToSearch,
    //     num_pages: "1",
    // });
    const [isLoading, setLoading] = useState(false)

    // const Searching = () => {
    //     alert(testing)
    //     setSearch(testing)
    //     alert(itemToSearch + "good")
    //     setTesting('')
    // }

    const JobTittleSubString = (Job_Name) => {
        const name = Job_Name.substr(0, 18);
        return Job_Name.length > 18 ? name + '...' : name;
    };
    const search = (searchTerm) => {
        if (searchTerm.length > 0) {
            const filteredData = data.filter(item =>
                item.job_title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setData(filteredData);
        }
    };
    const newest = () => {
        const sortedData = [...data].sort((a, b) => new Date(a.posted_at) - new Date(b.posted_at));
        setData(sortedData);
    };
    return (
        <View style={Styles.body}>
            <View style={Styles.topSearch}>
                <View style={{ flex: 0, flexDirection: 'row', gap: 70 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="chevron-back" size={34} color="aliceblue" />
                    </TouchableOpacity >
                    <Text style={Styles.whiteHeading}>Search Job</Text>
                    <TouchableOpacity >
                        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <G clip-path="url(#clip0_23_7)">
                                <Path d="M12.6996 11.6977V0.674578C12.6996 0.299813 12.3998 0 12.025 0C11.6503 0 11.3505 0.299813 11.3505 0.674578V11.6977C9.78643 12.0125 8.60217 13.3966 8.60217 15.0556C8.60217 16.7146 9.78643 18.0987 11.3505 18.4135V23.3204C11.3505 23.6952 11.6503 23.995 12.025 23.995C12.3998 23.995 12.6996 23.6952 12.6996 23.3204V18.4135C14.2636 18.0987 15.4479 16.7146 15.4479 15.0556C15.4479 13.4016 14.2686 12.0125 12.6996 11.6977ZM12.025 17.1293C10.8807 17.1293 9.95133 16.1999 9.95133 15.0556C9.95133 13.9113 10.8807 12.9819 12.025 12.9819C13.1693 12.9819 14.0987 13.9113 14.0987 15.0556C14.0987 16.1999 13.1693 17.1293 12.025 17.1293Z" fill="white" />
                                <Path d="M4.43972 6.04122V0.674578C4.43972 0.299813 4.13991 0 3.76515 0C3.39038 0 3.09057 0.299813 3.09057 0.674578V6.04122C1.52655 6.35603 0.342285 7.74016 0.342285 9.39913C0.342285 11.0581 1.52655 12.4422 3.09057 12.757V23.3204C3.09057 23.6952 3.39038 23.995 3.76515 23.995C4.13991 23.995 4.43972 23.6952 4.43972 23.3204V12.752C6.00375 12.4372 7.18801 11.0531 7.18801 9.39413C7.18801 7.73517 6.00375 6.35603 4.43972 6.04122ZM3.76515 11.4728C2.62086 11.4728 1.69144 10.5434 1.69144 9.39913C1.69144 8.25484 2.62086 7.32542 3.76515 7.32542C4.90943 7.32542 5.83885 8.25484 5.83885 9.39913C5.83885 10.5434 4.90443 11.4728 3.76515 11.4728Z" fill="white" />
                                <Path d="M20.9095 6.04122V0.674578C20.9095 0.299813 20.6096 0 20.2349 0C19.8601 0 19.5603 0.299813 19.5603 0.674578V6.04122C17.9963 6.35603 16.812 7.74016 16.812 9.39913C16.812 11.0581 17.9963 12.4422 19.5603 12.757V23.3254C19.5603 23.7002 19.8601 24 20.2349 24C20.6096 24 20.9095 23.7002 20.9095 23.3254V12.752C22.4735 12.4372 23.6577 11.0531 23.6577 9.39413C23.6577 7.73517 22.4785 6.35603 20.9095 6.04122ZM20.2349 11.4728C19.0906 11.4728 18.1612 10.5434 18.1612 9.39913C18.1612 8.25484 19.0906 7.32542 20.2349 7.32542C21.3792 7.32542 22.3086 8.25484 22.3086 9.39913C22.3086 10.5434 21.3792 11.4728 20.2349 11.4728Z" fill="white" />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_23_7">
                                    <Rect width="30" height="30" fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={Styles.searchInputDiv}>
                <TextInput
                    placeholder="Search here..."
                    placeholderTextColor="grey"
                    style={Styles.TextInput('white', 250)}
                    onChangeText={(text) => setTesting(text)} />
                <TouchableOpacity onPress={() => { search(testing) }}>
                    <Ionicons name="search-outline" size={24} color="grey" />
                </TouchableOpacity>

            </View>
            {/* <View style={Styles.flex}>
                <Text style={{ fontSize: 25, top: 10 }}>Filter</Text> */}
            {/* flatlis to be implemented here */}
            {/* <View style={Styles.selected}>
                    <Text >London</Text>
                    <TouchableOpacity>
                        <Feather name="x" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </View> */}

            <View style={Styles.headerView}>
                <Text style={Styles.dashboardText}>{data.length} Jobs Found</Text>
                <TouchableOpacity style={Styles.center} onPress={newest}>
                    <Text style={Styles.more}>Newest</Text>
                </TouchableOpacity>
            </View>
            <ScrollView >
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    data.length > 0 ? (
                        data.map((job) => (
                            <TouchableOpacity
                                style={Styles.posts}
                                onPress={() => navigation.navigate('JobDetails', { jobData: job })}
                                key={`nearby-job-${job.job_id}`}
                            >
                                <View style={Styles.flex}>
                                    <Image
                                        source={{ uri: job.employer_logo == null ? 'https://www.fintechfutures.com/files/2019/07/synechron.png' : job.employer_logo }}
                                        resizeMode='contain'
                                        style={Styles.iconContainerView}
                                    />
                                    <View style={Styles.postDetails}>
                                        <Text style={Styles.more}>{job?.job_employment_type}</Text>
                                        <Text style={Styles.dashboardText} numberOfLines={1}>{JobTittleSubString(job?.job_title)}</Text>
                                        <Text style={{ fontSize: 20, color: 'lightgrey' }}>{job?.job_city}.{job?.job_state}.{job?.job_country}</Text>
                                        <Text style={{ fontSize: 20, color: 'lightgrey' }}>Languege: {job?.job_posting_language}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text>
                            Something went wrong
                        </Text>
                    )
                )}


            </ScrollView >
            <View style={Styles.bottomLine}></View>

        </View >
    )
}