import { Picker } from '@react-native-picker/picker';
// import DropdownSelectList from 'react-native-dropdown-select-list';
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {
    isNotEmpty,
    isValidEmail,
    isValidExperience,
    isValidSkill,
    phoneLength,
    isNumeric,
} from "../../utils/validations";
import {
    FontAwesome,
    Feather,
    AntDesign,
    Ionicons,
    Fontisto,
    Entypo,
    MaterialIcons
} from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

import { Styles,theme } from '../../Styles'



const CreateProfile = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [houseAddress, setHouseAddress] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");
    const [EducationInforArray, setEsducationInforArray] = useState([]);
    const [WorkInforArray, setWorkInforArray] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [skills, setSkills] = useState([]);
    const [professionalSummary, setProfessionalSummary] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        // Fetch the list of skills from the backend API
        fetchSkillList();
    }, []);

    const fetchSkillList = async () => {
        try {
            console.log("I am an api", api());
            const response = await axios.get("http://localhost:5114/api/User");
            console.log(response);
            setSkillList(response);
        } catch (error) {
            console.log("Error fetching skill list:", error);
        }
    };

    const handleSaveProfile = async () => {
        // try {
        //   // Prepare the user profile data to be saved
        if (
            isNotEmpty(
                firstName,
                lastName,
                emailAddress,
                houseAddress,
                gender,
                experience,
                EducationInforArray,
                phoneNumber,
                skills,
                professionalSummary,
                profilePicture
            )
        ) {
            if (!isValidEmail(emailAddress)) {
                if (phoneLength(phoneNumber) && isNumeric(phoneNumber)) {
                    const userProfile = {
                        firstName,
                        lastName,
                        emailAddress,
                        houseAddress,
                        gender,
                        experience,
                        EducationInforArray,
                        phoneNumber,
                        skills,
                        professionalSummary,
                        profilePicture,
                    };
                    console.log(userProfile);
                 navigation.navigate('Home')
                } else {
                    alert("Check your phone number");
                }
            } else {
                alert("Fill all the required fields @");
            }
        } else {
            alert("Fill all the required fields");
        }

        //   // Send the user profile data to the backend API for saving
        //   await axios.post("your-backend-api-url/profiles", userProfile);

        //   // Navigate to the desired screen after saving the profile
        //   navigation.navigate("Profile");
        // } catch (error) {
        //   console.log("Error saving user profile:", error);
        // }
    };

    const handleSelectProfilePicture = async () => {
        try {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== "granted") {
                console.log("Permission denied to access media library.");
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {
                setProfilePicture(result.uri);
            }
        } catch (error) {
            console.log("Error selecting profile picture:", error);
        }
    };
    //  ============================== testing ===============================
    const [isEducationViewVisible, setIsEducationViewVisible] = useState(false);
    const [isExperienceViewVisible, setIsExperienceViewVisible] = useState(false);
    const [isSkillsViewVisible, setIsSkillsViewVisible] = useState(false);
    const viewHidden = () => {
        isEducationViewVisible
            ? setIsEducationViewVisible(false)
            : setIsEducationViewVisible(true);
    };
    const ExperienceVisible = () => {
        isExperienceViewVisible
            ? setIsExperienceViewVisible(false)
            : setIsExperienceViewVisible(true);
    };
    const SkillVisible = () => {
        isSkillsViewVisible
            ? setIsSkillsViewVisible(false)
            : setIsSkillsViewVisible(true);
    };

    const ExperienceHandleDelete = (index) => {
        const newArray = [...WorkInforArray];
        newArray.splice(index, 1);
        setWorkInforArray(newArray);
    };
    const EducationHandleDelete = (index) => {
        const newArray = [...EducationInforArray];
        newArray.splice(index, 1);
        setEsducationInforArray(newArray);
    };
    const SkillHandleDelete = (itemName) => {
        const updatedSkills = skills.filter((item) => item.skill !== itemName);
        setSkills(updatedSkills);
    };

    const [varsity, setVarsity] = useState("");
    const [period, setPeriod] = useState("");
    const [qualification, setQualification] = useState("");
    const SaveEducationArray = () => {
        const newObj = {
            varsity: varsity,
            period: period,
            qualification: qualification,
        };
        const foundObject = EducationInforArray.find(
            (obj) => obj.qualification === newObj.qualification
        );
        if (newObj.varsity != "" && newObj.qualification != "" && newObj.period) {
            if (!foundObject) {
                setEsducationInforArray((prevArray) => [...prevArray, newObj]);
            } else {
                alert("Qualification Already Exist");
            }
        } else {
            alert("Fill all the required fields");
        }
    };
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [duration, setDuration] = useState("");
    const SaveWorkArray = () => {
        const newObj = {
            company: company,
            position: position,
            duration: duration,
        };
        const foundObject = WorkInforArray.find(
            (obj) => obj.company === newObj.company
        );
        if (isValidExperience(newObj)) {
            if (!foundObject) {
                setWorkInforArray((prevArray) => [...prevArray, newObj]);
            } else {
                alert("Experience Already Exist");
            }
        } else {
            alert("Fill all the required fields ");
        }
    };
    const skillProficiency = [
        { value: "0-3 Junior Level" },
        { value: "3-5 Intermidate" },
        { value: "5-9 Senior Level" },
        { value: "10 and More Guru" },
    ];
    const [skill, setSkill] = useState("");
    const [proficiency, setProficiency] = useState("");
    const SaveSkill = () => {
        const newObj = {
            skill: skill,
            proficiency: proficiency,
        };
        const foundObject = skills.find((obj) => obj.skill === newObj.skill);
        if (isValidSkill(newObj)) {
            if (!foundObject) {
                setSkills((prevArray) => [...prevArray, newObj]);
            } else {
                alert("Skill Already Exist");
            }
        } else {
            alert("Set skill and how proficient are you ");
        }
    };

    return (
        <View style={Styles.body}>
            <View style={Styles.topSearch}>
                <View style={{ flex: 0, flexDirection: 'row', gap: 70 }}>
                    <Text style={Styles.whiteHeading}>Create Profile</Text>
                </View>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >

                <View style={Styles.searchInputDivs}>
                    <TextInput
                        style={Styles.TextInput("#fff", 230)}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder='First Name'
                        placeholderTextColor="grey"
                    />
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="lightgrey" />
                </View>

                <View style={Styles.searchInputDivs}>
                    <TextInput
                        style={Styles.TextInput("#fff", 230)}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder='Surname'
                        placeholderTextColor="grey"
                    />
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="lightgrey" />
                </View>
                <View style={Styles.searchInputDivs}>
                    <TextInput
                        style={Styles.TextInput("#fff", 230)}
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                        keyboardType="email-address"
                        placeholder='Email Address'
                        placeholderTextColor="grey"
                    />
                    <Fontisto name="email" size={24} color="lightgrey" />
                </View>
                <View style={Styles.searchInputDivs}>
                    <TextInput
                        style={Styles.TextInput("#fff", 230)}
                        value={houseAddress}
                        onChangeText={setHouseAddress}
                        placeholder='House Adress'
                        placeholderTextColor="grey"
                    />
                    <Entypo name="address" size={24} color="lightgrey" />
                </View>
                <View style={Styles.searchInputDivs}>
                    <TextInput
                        style={Styles.TextInput("#fff", 230)}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        placeholder='Phone Number'
                        placeholderTextColor="grey"
                    />
                    <AntDesign name="phone" size={24} color="lightgrey" />
                </View>
                <Picker
                    style={Styles.picker}
                    selectedValue={gender}
                    onValueChange={setGender}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>

                {/* =========================Experience =========================== */}

                <View style={Styles.flexingWithIcon}>
                    <Text style={Styles.headingStyle}>Click here to add Experience </Text>
                    <TouchableOpacity style={Styles.add} onPress={ExperienceVisible}>
                        <Text >
                            {isExperienceViewVisible ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isExperienceViewVisible && (
                    <View>
                        <Text style={Styles.headingStyle}>Experience</Text>
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="Company Name"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setCompany(value)}
                        />
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="Position"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setPosition(value)}
                            id=""
                        />
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="From - To eg.(2000 Jan - 2002 Dec)"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setDuration(value)}
                        /><TouchableOpacity style={Styles.editBtn({theme})} onPress={SaveWorkArray}>
                            <Text >Save Experience</Text>
                        </TouchableOpacity>
                        {WorkInforArray.map((data, index) => (
                            <View key={index} style={Styles.skillStyles}>
                                <View style={Styles.selectProfilePictureButton}>
                                    <View>
                                        <Text style={Styles.headingStyle}>
                                            Experience
                                        </Text>
                                        <Text>Company Name : {data.company}</Text>
                                        <Text>Position : {data.position}</Text>
                                        <Text style={{ marginBottom: 5 }}>
                                            Period : {data.duration}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={Styles.editBtn("lightgrey")}
                                        onPress={() => ExperienceHandleDelete(index)}
                                    >
                                        <AntDesign name="delete" size={14} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                    </View>
                )}

                {/* =========================Education =========================== */}

                <View style={Styles.flexingWithIcon}>
                    <Text style={Styles.headingStyle}>Click here to add education </Text>

                    <TouchableOpacity style={Styles.add} onPress={viewHidden}>
                        <Text >
                            {isEducationViewVisible ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isEducationViewVisible && (
                    <View>
                        <Text style={Styles.headingStyle}>Education</Text>
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="University"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setVarsity(value)}
                        />
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="Qualification"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setQualification(value)}
                        />
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="From - To eg.(2000 Jan - 2002 Dec)"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setPeriod(value)}
                        />
                        <TouchableOpacity
                            style={Styles.editBtn({theme})}
                            onPress={SaveEducationArray}
                        >
                            <Text>Save Education</Text>
                        </TouchableOpacity>
                        {EducationInforArray.map((data, index) => (
                            <View key={index} style={Styles.skillStyles}>
                                <View style={Styles.selectProfilePictureButton}>
                                    <View>
                                        <Text style={Styles.headingStyle}>
                                            Educationnal background
                                        </Text>
                                        <Text>Varsity Name : {data.varsity}</Text>
                                        <Text>Qualification : {data.qualification}</Text>
                                        <Text style={{ marginBottom: 5 }}>
                                            Period : {data.period}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={Styles.editBtn("lightgrey")}
                                        onPress={() => EducationHandleDelete(index)}
                                    >
                                        <AntDesign name="delete" size={14} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                    </View>
                )}

                <View style={Styles.flexingWithIcon}>
                    <Text style={Styles.headingStyle}>Click here to add a Skill </Text>
                    <TouchableOpacity style={Styles.add} onPress={SkillVisible}>
                        <Text >
                            {isSkillsViewVisible ? <AntDesign name="minuscircleo" size={24} color={theme} /> : <AntDesign name="pluscircleo" size={24} color={theme} />}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isSkillsViewVisible && (
                    <View>
                        <Text style={Styles.headingStyle}>Skills</Text>
                        <TextInput
                            style={Styles.TextInput("#EDE3FA", 300)}
                            placeholder="Skill"
                            placeholderTextColor="grey"
                            onChangeText={(value) => setSkill(value)}
                        />
                        <View style={{ width: 340, marginBottom: 5 }}>
                            <SelectList
                                setSelected={(value) => setProficiency(value)}
                                data={skillProficiency}
                            />
                        </View>
                        <TouchableOpacity style={Styles.editBtn({theme})} onPress={SaveSkill}>
                            <Text> Save Skill</Text>
                        </TouchableOpacity>
                        {skills.length > 0 && (
                            <View style={{
                                padding: 10,
                                gap: 5,
                                borderWidth: 1,
                                borderColor: "#ccc",
                                marginBottom: 5,
                                marginTop: 5,
                                borderRadius: 5,
                                justifyContent: "space-between",

                            }}>
                                {skills.map((item) => (
                                    <View style={Styles.skillStyle} key={item.skill}>
                                        <Text style={Styles.skillText}>{item.skill}</Text>
                                        <TouchableOpacity style={Styles.editBtn("lightgrey")}
                                            onPress={() => SkillHandleDelete(item.skill)}
                                        >
                                            <AntDesign name="delete" size={14} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        )}

                        
                    </View>
                )}
                <Text style={Styles.label}>Professional Summary</Text>
                <TextInput
                    style={Styles.TextArea}
                    value={professionalSummary}
                    onChangeText={setProfessionalSummary}
                    placeholder='Short summary'
                    placeholderTextColor="grey"
                    multiline
                />
                {/* ============================================================== */}
                <TouchableOpacity
                    style={Styles.selectProfilePictureButton}
                    onPress={handleSelectProfilePicture}
                >
                    <View style={Styles.UploadCVBtn}>
                        <Feather name="upload" size={24} color="black" />
                        <Text style={Styles.label}>
                            {profilePicture ? "Uploaded" : " Upload picture"}
                        </Text>
                    </View>

                    <Text style={Styles.label}>
                        {profilePicture ? (
                            <FontAwesome name="picture-o" size={24} color="black" />
                        ) : (
                            " "
                        )}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.applyBtn(350)} onPress={handleSaveProfile}>
                    <Text style={Styles.applyBtnText}>Save Details</Text>
                </TouchableOpacity>

            </ScrollView></View>

    );
};

export default CreateProfile;
