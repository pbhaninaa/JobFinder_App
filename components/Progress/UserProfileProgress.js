import React, { useEffect, useState } from 'react';
import { Styles } from '../../Styles'
import { View, Text} from 'react-native';

const UserProfileProgress = ({ userProfile }) => {
    const [completionPercentage, setCompletionPercentage] = useState(0);
    useEffect(() => {
        const totalSections = 5;
        let completedSections = 0;

        if (userProfile.name && userProfile.surname && userProfile.email &&
            userProfile.merital_status && userProfile.phone && userProfile.homeAddress &&
            userProfile.gender && userProfile.profession && userProfile.image && userProfile.summary) {
            completedSections++;
        }

        if (userProfile.education.length > 0) {
            completedSections++;
        }

        if (userProfile.experience.length > 0) {
            completedSections++;
        }

        if (userProfile.skills.length > 0) {
            completedSections++;
        }

        if (userProfile.applications.length > 0) {
            completedSections++;
        }

        const calculatedPercentage = (completedSections / totalSections) * 100;
        setCompletionPercentage(calculatedPercentage);
    }, [userProfile]);



    return (
        <View style={Styles.progressContainer}>
            <View style={Styles.progressBar}>
                <Text style={Styles.progressText}>{completionPercentage < 100 ? completionPercentage.toFixed() + "%" : "Completed"}</Text>
            </View>
        </View>
    );
};
export default UserProfileProgress;
