import { React, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { Styles } from '../../../Styles'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default Register = () => {
    return (
        <View>
            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.header}>
                    <Text style={Styles.header}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.header}>
                    <Text style={Styles.register}>
                        Log In
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={Styles.textInputDiv}>
                <TextInput placeholder="Enter your name here" placeholderTextColor="gray" style={Styles.TextInput} />
            </View>

            <View style={Styles.textInputDiv}>
                <TextInput placeholder="Email" placeholderTextColor="gray" style={Styles.TextInput} />
            </View>

            <View style={Styles.textInputDiv}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    style={Styles.TextInput} />
                <TouchableOpacity >
                    <Text style={Styles.show}>Show</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ margin: 20, textAlign: 'center', top: 3, color: 'aliceblue', fontSize: 18, width: 300 }}>
                By tap Sign Up button you accept terms and privacy this app
            </Text>
            <TouchableOpacity style={Styles.button} >
                <Text style={Styles.btnText}>Create My Account</Text>
            </TouchableOpacity>

            <Text style={{ marginLeft: '30%', top: 25, color: 'lightgrey', opacity: 0.2, fontSize: 18 }}>
                App Version 1.0
            </Text>

            <View style={Styles.bottomLine}>
            </View>
        </View>
    )
}

