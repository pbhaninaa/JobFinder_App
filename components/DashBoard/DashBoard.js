import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Styles } from '../../Styles'
import NavBar from '../Commons/NavBar';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../useFetch'
import UserProfileProgress from '../Progress/UserProfileProgress';

export default DashBoard = ({ route }) => {

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false)
    // const { data, isLoading, error } = useFetch("search", {
    //     query: "developer",
    //     num_pages: "5",
    // });
    const [loggedUser, setLoggedUser] = useState({
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
    const [data, setData] = useState([
        {
            "job_id": 3,
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
            "posted_at": "2023-08-15T10:00:00Z",
            "expires_at": "2023-09-15T10:00:00Z",
            "apply_link": "https://example.com/apply/software-engineer",
            "company_rate": 5
        }, {


            "job_id": 2,
            "job_title": "Marketing Specialist",
            "job_employment_type": "Full Time",
            "company": "GrowthMarketing",
            "employer_logo": "https://www.fintechfutures.com/files/2019/07/synechron.png",
            "job_city": "London",
            "job_country": "United States",
            "job_state": "USA",
            "job_posting_language": "English",
            "job_latitude": 40.7128,
            "job_longitude": -74.0060,
            "job_description": "Join our marketing team to create and execute campaigns that drive customer growth...",
            "job_requirements": "Bachelor's degree in Marketing, experience with social media advertising...",
            "job_min_salary": "$60,000 - $80,000",
            "posted_at": "2023-08-20T09:30:00Z",
            "expires_at": "2023-09-20T09:30:00Z",
            "apply_link": "https://example.com/apply/marketing-specialist",
            "company_rate": 3
        },
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
            "posted_at": "2023-08-15T10:00:00Z",
            "expires_at": "2023-09-15T10:00:00Z",
            "apply_link": "https://example.com/apply/software-engineer",
            "company_rate": 5
        }
    ])
    const JobTittleSubString = (Job_Name) => {
        const name = Job_Name.substr(0, 18);
        return Job_Name.length > 18 ? name + '...' : name
    };
    return (
        <View style={Styles.body}>
            <View style={Styles.headerView}>
                <View style={{ gap: 15 }}>
                    <Text style={Styles.helloText}>Hello,
                        {
                            loggedUser.gender.toLowerCase() === "male" ?
                                " Mr" + loggedUser.surname :
                                loggedUser.gender.toLowerCase() === "female" &&
                                    loggedUser.merital_status.toLowerCase() === "single" ?
                                    " Miss" + loggedUser.surname : " Mrss" + loggedUser.surname}</Text>
                    <Text style={Styles.dashboardText}>DashBoard</Text>
                </View>
                <Image

                    source={{ uri: loggedUser.image == null ? 'https://www.fintechfutures.com/files/2019/07/synechron.png' : loggedUser.image }}
                    resizeMode='contain'
                    style={Styles.iconContainerView} />
            </View>
            <View style={Styles.cardContainer}>
                <View style={Styles.progressContainer}>
                    <UserProfileProgress />
                </View>
                <View style={Styles.progressContainer}>
                    <Text style={Styles.btnText}>Complete your profile</Text>
                </View>
                <View style={Styles.progressContainer}>

                    <TouchableOpacity style={Styles.icon} onPress={() => navigation.navigate('Create')}>
                        <AntDesign name="right" size={15} color="gray" fillOpacity='0.7' />
                    </TouchableOpacity>
                    <Svg width="100" height="90" viewBox="0 0 87 97" fill="none">
                        <Path
                            d="M83.0312 0.114373L2.62058 21.5847C0.593417 22.1259 -0.395906 23.8335 0.14727 25.8535L23.6849 113.389C24.2281 115.409 25.9416 116.395 27.9688 115.853L108.379 94.3829C110.407 93.8417 111.396 92.1341 110.853 90.1141L87.3151 2.579C86.7719 0.558955 84.7205 -0.336684 83.0312 0.114373ZM56.3585 78.6836L46.4653 95.759C45.9706 96.6128 45.3854 97.1299 44.3719 97.4005C43.3583 97.6711 42.592 97.5149 41.7353 97.022L32.8959 91.0827C31.1823 90.0969 30.977 87.9866 31.9663 86.2791C32.9557 84.5715 35.0734 84.3669 36.7869 85.3528L42.537 89.2301L50.4516 75.5698C51.4409 73.8623 53.4681 73.321 55.1816 74.3069C56.4668 75.0462 57.01 77.0663 56.3585 78.6836ZM49.9309 54.7798L40.0377 71.8552C39.5431 72.709 38.9579 73.2261 37.9443 73.4967C36.9307 73.7673 36.1645 73.6111 35.3077 73.1181L26.4683 67.1789C24.7548 66.193 24.5494 64.0828 25.5388 62.3752C26.5281 60.6677 28.6458 60.4631 30.3593 61.449L36.1094 65.3263L44.024 51.666C45.0133 49.9585 47.0405 49.4172 48.7541 50.403C49.9487 50.8058 50.5824 53.1625 49.9309 54.7798ZM43.5939 31.2127L33.7007 48.288C33.206 49.1418 32.6208 49.6589 31.6072 49.9296C30.5937 50.2002 29.8274 50.0439 28.9706 49.551L20.1313 43.6117C18.4177 42.6259 18.2124 40.5156 19.2017 38.8081C20.191 37.1006 22.3087 36.896 24.0223 37.8818L29.344 41.5127L37.2586 27.8524C38.2479 26.1449 40.2751 25.6036 41.9886 26.5894C43.6116 27.2386 44.2454 29.5953 43.5939 31.2127ZM89.8617 78.0375L66.2115 84.3522C64.1843 84.8935 62.4708 83.9077 61.9276 81.8876C61.3844 79.8676 62.3737 78.16 64.4009 77.6188L88.0511 71.304C90.0782 70.7627 91.7918 71.7486 92.335 73.7686C92.8781 75.7886 91.8888 77.4962 89.8617 78.0375ZM83.4341 54.1336L59.7839 60.4484C57.7567 60.9897 56.0432 60.0038 55.5 57.9838C54.9568 55.9638 55.9461 54.2562 57.9733 53.715L81.6235 47.4002C83.6507 46.8589 85.3642 47.8447 85.9074 49.8648C86.4506 51.8848 85.4612 53.5924 83.4341 54.1336ZM77.0065 30.2298L53.3563 36.5446C51.3292 37.0859 49.6156 36.1 49.0724 34.08C48.5292 32.06 49.5186 30.3524 51.5457 29.8111L75.1959 23.4963C77.2231 22.9551 78.9366 23.9409 79.4798 25.961C80.023 27.981 79.0337 29.6885 77.0065 30.2298Z" // SVG path data here
                            fill="#7939CB"
                            fillOpacity="0.07"
                        />
                    </Svg>

                </View>
            </View>
            <View style={Styles.headerView}>
                <View style={Styles.blueCard}>
                    <Text style={Styles.Cardnumber}>
                        {loggedUser.applications.length}
                    </Text>
                    <Text style={Styles.Cardtexts}>
                        Jobs Applied
                    </Text>
                </View>
                <View style={Styles.pinkCard}>
                    <Text style={Styles.Cardnumber}>
                        {loggedUser.interviews.length}
                    </Text>
                    <Text style={Styles.Cardtexts}>
                        Interviews
                    </Text>
                </View>
            </View>
            <View style={Styles.headerView}>
                <Text style={Styles.dashboardText}>Recomended for you</Text>
                <TouchableOpacity style={Styles.center} onPress={() => navigation.navigate('Search', { data: data })}>
                    <Text style={Styles.more}>More</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ top: 1 }}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    data ? (
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
                                <View style={Styles.flex}>
                                    <Text style={Styles.salary}>{job.job_min_salary === null ? "Salary not disclosed" : job.job_min_salary}</Text>
                                    <View style={Styles.rate}>
                                        <FontAwesome name="star" size={18} color="#FF8A00" />
                                        <Text style={{ color: '#FF8A00' }}>{job.company_rate}</Text>
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
            <NavBar />
        </View >
    )
}