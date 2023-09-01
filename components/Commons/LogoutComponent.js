import React,{useState} from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../Styles';

const LogoutComponent = ({ isVisible }) => {
    const navigation = useNavigation();
    const logout =()=>{
        navigation.navigate('Landing')
    }
    return (
        <View>
            <Modal transparent visible={isVisible}>
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalContent}>
                        <TouchableOpacity>
                            <Text style={Styles.headerText('#000')}>About App</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={Styles.headerText('#000')}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={logout}>
                            <Text style={Styles.headerText('#F94687')}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LogoutComponent;
