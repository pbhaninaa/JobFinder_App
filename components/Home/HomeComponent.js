import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather,FontAwesome } from '@expo/vector-icons';
import Svg, { Path} from 'react-native-svg';
import { Styles } from '../../Styles'
export default HomeComponent = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Styles.container} >
            <View style={Styles.content}>
                <FontAwesome name="suitcase" size={180} color="white" textAlign="center" />
                <Text style={Styles.header}>
                    Finding a job has never been easier
                </Text>
                <Text style={Styles.whiteText()}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                </Text>
            </View>
            <View style={Styles.menuContainer}>
                <TouchableOpacity style={Styles.candidate} onPress={() => navigation.navigate('Login')}>
                    <Feather name="user" size={24} color="#502488" />
                    <Text style={Styles.btnText}>Candidate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.company}  onPress={() => navigation.navigate('Login')}>
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
                    <Text style={Styles.btnText}>Company</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.bottomLine}></View>
        </SafeAreaView>
    )
}