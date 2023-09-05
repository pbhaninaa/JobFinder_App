import { React, useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Linking, } from 'react-native';
import { Styles, UsermanagementInputColor, hidePasswordEyeColor } from '../../../Styles'
import { FontAwesome } from '@expo/vector-icons';
import { RegisterIsEmpty, validateLength, isValidEmail } from '../../../utils/validations';
import { useNavigation } from '@react-navigation/native';
import { handleRegister } from '../../MyLocalDb';
export default Register = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const save = () => {
        if (RegisterIsEmpty(username, email, password)) {
            if (!isValidEmail(email)) {
                const navigate = navigation.navigate('Login')
                const user = {
                    email: email,
                    username: username,
                    password: password
                }
                handleRegister(user, navigate);
            } else {
                alert("Please enter valid email")
            }

        } else {
            alert('Enter something');
        }
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.flex}>
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
                <TextInput autoCompleteType="off"
                    textContentType="none" placeholder="Username" placeholderTextColor="gray" style={Styles.TextInput("white", UsermanagementInputColor, 240)} onChangeText={(value) => setUsername(value)} />
            </View>

            <View style={Styles.textInputDiv}>
                <TextInput autoCompleteType="off"
                    textContentType="none" placeholder="Email" placeholderTextColor="gray" style={Styles.TextInput("white", UsermanagementInputColor, 240)} onChangeText={(value) => setEmail(value)} />
            </View>

            <View style={Styles.textInputDiv}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={hidePassword}
                    autoCompleteType="off"
                    textContentType="none"
                    placeholderTextColor="gray"
                    style={Styles.TextInput("white", UsermanagementInputColor, 240)}
                    onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity onPress={() => { setHidePassword(!hidePassword) }}>
                    {hidePassword ?
                        <FontAwesome name="eye" size={24} color={hidePasswordEyeColor} /> :
                        <FontAwesome name="eye-slash" size={24} color={hidePasswordEyeColor} />}
                </TouchableOpacity>
            </View>
            <Text style={{ margin: 20, textAlign: 'center', top: 3, color: 'aliceblue', fontSize: 18, width: 300 }}>
                By tap Sign Up button you accept terms and privacy this app
            </Text>
            <TouchableOpacity style={Styles.button} onPress={save}>
                <Text style={Styles.btnText}>Create My Account</Text>
            </TouchableOpacity>

            <Text style={{ top: 10, color: 'lightgrey', opacity: 0.2, fontSize: 18 }}>
                App Version 1.0
            </Text>

            <View style={Styles.bottomLine}>
            </View>
        </View>
    )
}

