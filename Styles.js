import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#662DAF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  section: {
    top: 50,
    width: 149,
    height: 60,
    flexShrink: 0,
    marginBottom: 80,
  },

  LoginWithMedia: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#A084E8',
    color: '#000000'
  },
  searchInputDiv: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: 318,
    height: 60,
    flexShrink: 0,
    borderRadius: 20,
    paddingStart: 15,
    fontSize: 20,
    top: -30,
    // margin: 5,
    backgroundColor: 'white'
  },
  companyDetailsLogo: {
    position: 'absolute',
    marginTop: 80,
    top: 60,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    width: 100,
    height: 100,
    borderRadius: 20,
    fontSize: 20,
    marginLeft: '60%'
  },
  toogleDiv: {
    backgroundColor: 'white',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 350,
    height: 60,
    flexShrink: 0,
    borderRadius: 20,
    paddingStart: 15,
    fontSize: 20,
    top: 10,
    backgroundColor: '#EAE6EE'
  },
  textInputDiv: {
    flex: 0,
    flexDirection: 'row',
    color: 'aliceblue',
    alignItems: 'center',
    width: 318,
    height: 60,
    flexShrink: 0,
    borderRadius: 20,
    paddingStart: 15,
    fontSize: 20,
    margin: 5,
    backgroundColor: '#461584'

  },
  show: {
    color: '#7091F5',
  },
  button: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 318,
    height: 60,
    margin: 5,
    flexShrink: 0,
    borderRadius: 20,
    backgroundColor: '#e7d5ff',
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: '',
    alignItems: 'center',
    padding: 1,
  },
  btnText: {
    color: '#7939CB',
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    top: 15
    , color: 'aliceblue',
    fontSize: 28,
    width: 300
  },
  TextInput: {
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'aliceblue',
    width: 250,
    height: 50,
    margin: 5,
    borderRadius: 10,
  },
  Cardnumber: {
    color: '#E7d5ff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Cardtexts: {
    color: 'white',
    fontSize: 22
  },
  displayFlex: {
    top: 5,
    width: 318,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: 1,
  },
  content: {
    width: 376,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1
  },
  menuContainer: {
    top: 100,
    height: 180,
    flexDirection: 'row',
    width: 376
  },
  candidate: {
    width: 188,
    marginRight: 0.3,
    backgroundColor: '#F5EDFF',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  company: {
    width: 188,
    backgroundColor: '#F5EDFF',
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontfamily: 'Poppins',
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 10,
    color: 'white',
    fontWeight: 300
  },
  register: {
    fontfamily: 'Poppins',
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 10,
    color: 'white',
    opacity: 0.2,
    fontWeight: 300
  },
  bottomLine: {
    position: 'sticky',
    top: 80,
    width: 200,
    height: 5,
    flexShrink: 0,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',

  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex: {


    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 15,
  },
  rate: {
    top: 5,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffe8cc',
    borderRadius: 12,
    width: '61px',
    height: 40,
    flexShrink: 0
  },
  PostDetailsIcon: {

    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#7939CB',
    borderRadius: 20,
    marginLeft: -7

  },
  rates: {
    top: 5,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: '61px',
    height: 40,
    flexShrink: 0
  },
  selected: {
    height: 46,
    width: 131,
    backgroundColor: 'aliceblue',
    borderRadius: 16,
    flex: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  laoding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Apply margin to create space around the ActivityIndicator
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: 50,
    width: 150,
    borderRadius: 16
  },
  selected2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfcff',
    height: 50,
    width: 150,
    color: 'white',
    borderRadius: 16
  },
  applyBtn: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 55,
    width: '60%',
    backgroundColor: 'red',
    borderRadius: 15,
    borderRadius: 20,
    backgroundColor: '#7939CB',
    shadowColor: '#7939CB',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.47,
    shadowRadius: 21,
    elevation: 5,
  },
  availablepPositionsBtn: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 85,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 15,
    borderRadius: 20,
    backgroundColor: '#7939CB',
    shadowColor: '#7939CB',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.47,
    shadowRadius: 21,
    elevation: 5,
  },
  applyBtnText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E7d5ff'
  },
  // checkbox: {
  //   borderBlockColor: 'black',
  //   width: 10,
  //   height: 10,
  //   borderColor: 'red'
  // },
  body: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf6ff',
    height: '100%',
    width: '100%'
  },
  CompanyDetailsbody: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '100%',
    width: '100%'
  },
  heading: {
    color: '#313131',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal'
  },
  navBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 11 },
    shadowColor: 'rgba(121, 57, 203, 0.12)',
    shadowOpacity: 1,
    shadowRadius: 21,
    position: 'fixed',
    width: 350,
    height: 85,
    bottom: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBtns: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 5,
    bottom: 50,
    position: 'fixed',
    width: 350,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    width: 224,
    height: 190,
  },

  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  headerView: {
    padding: 15,
    width: 350,
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  helloText: {
    fontSize: 18,
  },
  dashboardText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconContainerView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    backgroundColor: '#7939CB',
    borderRadius: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 350,
    height: 93,
    borderRadius: 14,
    backgroundColor: '#EFE3FF',
    padding: 1.5,
    // backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  whiteHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'aliceblue'
  },
  map: {
    width: 320,
    height: 150,
    borderRadius: 15,
    paddingLeft: 218,
    paddingTop: 98
  },
  mapBtn: {
    flex: 0,
    height: 50,
    width: 100,
    borderRadius:15,
    backgroundColor: 'lightseagreen',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  posts: {
    top: 1,
    width: 350,
    borderRadius: 14,
    backgroundColor: 'white',
    padding: 15,
    paddingLeft: 1,
    marginBottom: 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  progressContainer: {
    height: 90,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // progressBar: {
  //   // height: 80,
  //   // width: 80,
  //   // borderRadius: 50,
  //   // backgroundColor: '#662DAF',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',

  // },================================================
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  skillItem: {
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  skillStyles: {
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderWidth: 1,
    width: "90%",
    borderRadius: 5,
    marginBottom: 10,
    margin: "5%",
  },
  skillItemActive: {
    backgroundColor: "#007bff",
  },
  skillText: {
    color: "#333",
  },
  selectProfilePictureButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    padding: 5,
    marginBottom: 10,
  },
  // skillStyles: {
  //   paddingLeft: 5,
  //   borderWidth: 2,
  //   borderColor: "lightgrey",
  //   borderWidth: 1,
  //   width: "90%",
  //   borderRadius: 5,
  //   marginBottom: 10,
  //   margin: "5%",
  // },
  skillStyle: {
    padding: 15,
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: '#EEE3FD',
    marginBottom: 20,
    borderRadius: 15
  },
  //===================================================
  progressBar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderRightColor: 'transparent',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#662DAF',
    alignItems: 'center',
    justifyContent: 'center',
    animationName: 'rotate',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  UploadCVBtn: {
    padding: 15,
    flexShrink: 0,
    backgroundColor: '#ede3fa',
    justifyContent: 'space-around',
    gap: 5,
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    borderRadius: 15
  },
  editBtn: {
    padding: 15,
    width: 130,
    flexShrink: 0,
    backgroundColor: '#ede3fa',
    justifyContent: 'space-around',
    gap: 5,
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    borderRadius: 15
  },
  detailsScrollView: {
    width: 375,
    backgroundColor: 'white',
    marginTop: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  '@keyframes rotate': {
    '100%': {
      transform: [{ rotate: '360deg' }],
    },
  },

  icon: {
    position: 'absolute', // Use absolute positioning for the icon
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  pinkCard: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: 150,
    height: 93,
    flexShrink: 0,
    backgroundColor: '#F94687',
    borderRadius: 14,
  },
  blueCard: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: 150,
    height: 93,
    flexShrink: 0,
    backgroundColor: '#3F9AE0',
    borderRadius: 14,
  },
  more: {
    fontSize: 20,
    color: '#7939CB'
  },
  salary: {
    width: '70%',
    marginLeft: 20,
    marginTop: 18,
    fontSize: 20,
  },
  topSearch: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 180,
    backgroundColor: '#7939cb',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
  // oblong:{

  //     width: 200,
  //     height: 100,
  //     backgroundColor: '#F5EDFF',
  //     borderTopLeftRadius: '50px',
  //     borderTopRightRadius:15,
  //     borderBottomLeftRadius:5,
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     textAlign: 'center',
  //     fontSize: '16px',
  //     fontWeight: 'bold',
  //     backgroundColor: 'darkGray',

  // }
});
