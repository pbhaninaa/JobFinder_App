import { React, useEffect, useState } from 'react'
import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchUsers } from '../../useFetch';
import { Styles } from '../../../Styles'



export default Login = () => {
    const navigation = useNavigation();
    const [rememberMe, setRememberMe] = useState(false)
    const [hidePassword, setHidePassword] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
   
    const handleSignIn = () => {
        navigation.navigate('Home')
        setUsername('')
        setPassword('')
    };
   
    return (
        <View style={Styles.container}>
            <View style={Styles.flex}>
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
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="gray"
                    autoCompleteType="off" 
                    textContentType="none" 
                    style={Styles.TextInput("#461584", 240)}
                    onChangeText={(value) => setUsername(value)}
                />
            </View>
            <View style={Styles.textInputDiv}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={hidePassword}
                    autoCompleteType="off" 
                    textContentType="none" 
                    placeholderTextColor="gray"
                    style={Styles.TextInput("#461584", 240)}
                    onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity onPress={() => { setHidePassword(!hidePassword) }}>
                    {hidePassword ?
                        <FontAwesome name="eye" size={24} color="#C8ACED" /> :
                        <FontAwesome name="eye-slash" size={24} color="#C8ACED" />}
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.button} onPress={handleSignIn}>
                <Text style={Styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={Styles.flex}>
                <TouchableOpacity style={{ marginLeft: '10%' }} onPress={() => { setRememberMe(!rememberMe) }}>
                    {rememberMe ?
                        <MaterialCommunityIcons name="checkbox-outline" size={30} color="#C8ACED" /> :
                        <Fontisto name="checkbox-passive" size={21} color="#C8ACED" />}
                </TouchableOpacity>
                <Text style={{ marginLeft: '1%', color: 'aliceblue', fontSize: 18 }}>
                    Remember Me
                </Text>
                <TouchableOpacity  >
                    <Text style={{ marginLeft: '20%', color: 'aliceblue', fontSize: 18 }}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.flex}>

                <Text style={{ marginLeft: '1%', color: 'aliceblue', fontSize: 18 }}>
                    Don't have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ marginLeft: '5%', color: 'skyblue', fontSize: 18 }}>
                        Click to register.
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ top: 40 }}>
                <Text style={{ marginLeft: '30%', color: 'aliceblue', fontSize: 18 }}>
                    Or sign in with
                </Text>
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

