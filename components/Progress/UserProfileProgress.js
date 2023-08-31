import React, { useEffect, useState } from 'react';

import { View, Text, Animated, Easing } from 'react-native';

const UserProfileProgress = ({ props }) => {
    const [completionPercentage, setCompletionPercentage] = useState(0);

    const spinValue = new Animated.Value(0);
    const [userProfile, setLoggedUser] = useState({
        "name": "Philasande",
        "surname": "Bhani",
        "merital_status": "single",
        "email": "pbhanina@gmail.com",
        "phone": "0782141216",
        "homeAddress": "123, Main Street. Suite",
        "gender": "male",
        "profession": "Software Engineer",
        "summary": "I did Computer application Technology in High school. That's when I obtained Microsoft Office (Spreadsheet, Word, Access, Presentation, One Note etc.) Skills. Then I did Diploma in Information and Communication Technology (ICT), I also participated in a Learnership in Codetribe at MLab in Northern cape at Kimberly and that’s where I have obtained skills in website design and website development using HTML, JavaScript, React and React Native.",
        "image": "https://media.licdn.com/dms/image/D4D03AQFTStwijtd3cQ/profile-displayphoto-shrink_800_800/0/1667561618300?e=2147483647&v=beta&t=cpHaD4zh9UkvFdcAQ375wOq9L4myHvwTCAWWCq9LUSc",
        "skills": ["Javascript", "Java", "Html and CSS", "AngularJS", "ReactJS", "ReactNative", "VueJS"],
        "experience": [
            {
                "id": 1,
                "company": "MLab Codetribe",
                "position": "Intern",
                "period": "2021-jan 2021-Dec"
            },
            {
                "id": 2,
                "company": "Geeks$Learning",
                "position": "Intern",
                "period": "2022-jan 2022-Dec"
            },
            {
                "id": 3,
                "company": "Reverside",
                "position": "Junior Developer",
                "period": "2023-jan 2023-June"
            }
        ],
        "education": [
            {
                "id": 1,
                "university": "Walter sisulu University",
                "qualification": "NDip Information Technology",
                "period": "2027-jan 2020-Dec"
            },
            {
                "id": 2,
                "university": "Geeks4learning",
                "qualification": "NQF 5 Java full Stack Developer",
                "period": "2027-jan 2020-Dec"
            }
        ],
        "applications": [
            {
                "job_id": 1,
                "job_title": "Software Engineer",
                "job_employment_type": "Full Time",
                "company": "TechCo",
                "employer_logo": "https://www.fintechfutures.com/files/2019/07/synechron.png",
                "job_city": "San Francisco",
                "job_country": "United States",
                "job_state": "CA",
                "job_posting_language": "Portugees",
                "job_latitude": 37.7749,
                "job_longitude": -122.4194,
                "job_description": "We are looking for a skilled software engineer to join our development team...",
                "job_requirements": "Bachelor's degree in Computer Science, proficiency in Java and JavaScript...",
                "job_min_salary": "$100,000 - $120,000",
                "posted_at": "2023-08-15",
                "expires_at": "2023-09-15",
                "appllied_at": "2023-08-15",
                "apply_link": "https://example.com/apply/software-engineer",
                "company_rate": 5
            }

        ],
        "interviews": [
            {
                "id": 1,
                "company_name": "DashPay",
                "employer_logo": "https://www.fintechfutures.com/files/2019/07/synechron.png",
                "interview_date": "20/02/2020"
            },
            {
                "id": 2,
                "company_name": "Reverside",
                "employer_logo": "https://www.fintechfutures.com/files/2019/07/synechron.png",
                "interview_date": "20/02/2020"
            },
            {
                "id": 3,
                "company_name": "African Resonance",
                "employer_logo": "https://www.fintechfutures.com/files/2019/07/synechron.png",
                "interview_date": "20/02/2020"
            }

        ],
        "notifications": [
            {
                "id": 1,
                "notification_sender": "Reversider",
                "notification_title": "Congratulations",
                "notification_body": "You have been selected to be one of our software developers.",
                "response_time": "10:00"
            },
            {
                "id": 2,
                "notification_sender": "Fly High",
                "notification_title": "Sorry you are not seclected",
                "notification_body": "After carefully consideration we decided not to go further with your application!",
                "response_time": "10:00"
            }
        ]
    })
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

        // Start the rotation animation
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000, // 1 second
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, [userProfile, spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.progressContainer}>
            <Animated.View style={[styles.progressBar, { transform: [{ rotate: spin }] }]}>
                <Text style={styles.progressText}>{completionPercentage < 100 ? completionPercentage.toFixed()+"%":"Completed"}</Text>
            </Animated.View>
        </View>
    );
};

const styles = {
    progressContainer: {
        height: 90,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#662DAF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    progressText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#662DAF',
    },
};

export default UserProfileProgress;
