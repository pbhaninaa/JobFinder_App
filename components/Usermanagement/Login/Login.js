import { React, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { Styles } from '../../../Styles'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default Login = () => {
    const [rememberMe, setRememberMe] = useState(false)
    return (
        <View>
            <View style={Styles.buttons}>
                <TouchableOpacity style={Styles.header}>
                    <Text style={Styles.header}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.header}>
                    <Text style={Styles.register}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.textInputDiv}>
                <TextInput placeholder="Enter your text here" placeholderTextColor="gray" style={Styles.TextInput("#461584")} />
            </View>
            <View style={Styles.textInputDiv}>
                <TextInput placeholder="Password"  secureTextEntry={true} placeholderTextColor="gray" style={Styles.TextInput("#461584")} />
                <TouchableOpacity >
                    <Text style={Styles.show}>Show</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.button} >
                <Text style={Styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={Styles.displayFlex}>
            {/* <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
            /> */}
            <Text style={Styles.text}>
                Remember Me
            </Text>
            <TouchableOpacity  >
                <Text style={Styles.text}>
                    Forgot Password
                </Text>
            </TouchableOpacity>
        </View>
            <Text style={{ marginLeft: '30%', top: 25, color: 'aliceblue', fontSize: 18 }}>
                Or sign in with
            </Text>
            <View style={Styles.section}>
                <View>
                    <View style={Styles.displayFlex}>
                        <TouchableOpacity style={Styles.LoginWithMedia}>
                            <AntDesign name="google" size={24} color="aliceblue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.LoginWithMedia}>
                            <FontAwesome5 name="facebook" size={24} color="aliceblue" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={Styles.bottomLine}>
            </View>
        </View>
    )
}

