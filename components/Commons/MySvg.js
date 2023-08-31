import React from 'react';
import { View, Text } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Styles } from '../../Styles';

const MySvg = (props) => {
  return (
    <View style={Styles.centerView}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="224" height="190" viewBox="0 0 224 190" fill="none">
        <Path d="M85.1227 40.9675C63.1237 75.2676 49.9854 105.905 25.5421 87.5889C-11.5048 70.1059 -5.38609 130.054 25.5421 153.775C77.1022 193.32 119.114 189.574 144.703 189.99C192.531 190.768 212.485 147.186 221.784 102.098C225.212 85.4743 229.109 39.3024 196.264 13.9104C163.418 -11.4817 112.621 -1.90763 85.1227 40.9675Z" fill="url(#paint0_linear_25_167)" />
        <Path d="M167.294 147.533H158.974V43.9812C158.974 33.7941 150.687 25.5066 140.5 25.5066H50.0452C41.2946 25.5066 34.1741 32.6272 34.1741 41.3777V50.4666C34.1741 51.9982 35.4158 53.24 36.9474 53.24H59.1341V151.15C59.1341 163.518 67.2981 172.493 78.5474 172.493H154.044C162.88 172.493 170.067 165.306 170.067 156.47V150.307C170.067 148.775 168.826 147.533 167.294 147.533ZM39.7207 47.6933V41.3777C39.7207 35.7714 44.2198 31.2169 49.9772 31.079C55.5412 31.341 59.1341 35.6626 59.1341 42.1466V47.6933H39.7207ZM89.6407 154.467C89.6407 161.096 84.4608 166.57 77.8471 166.928C77.8388 166.928 77.8298 166.929 77.8201 166.929C70.0471 166.556 64.6807 160.172 64.6807 151.15V42.1466C64.6807 37.7301 63.3343 33.9293 61.0712 31.0533H140.5C147.628 31.0533 153.427 36.853 153.427 43.9812V147.533H92.4141C90.8825 147.533 89.6407 148.775 89.6407 150.307V154.467ZM164.521 156.47C164.521 162.247 159.821 166.947 154.044 166.947H90.1718C93.2835 163.7 95.1874 159.296 95.1874 154.467V153.08H164.521V156.47Z" fill="#B2B0AF" />
        <Path d="M34.5096 122.238C33.4266 121.155 31.6711 121.155 30.5881 122.238L28.6273 124.198L26.6666 122.238C25.5836 121.155 23.8281 121.155 22.7451 122.238C21.6621 123.321 21.6621 125.076 22.7451 126.159L24.7058 128.12L22.7451 130.081C21.6621 131.164 21.6621 132.919 22.7451 134.002C23.2866 134.544 23.9966 134.815 24.7058 134.815C25.4151 134.815 26.1251 134.544 26.6666 134.002L28.6273 132.041L30.5881 134.002C31.1296 134.544 31.8396 134.815 32.5488 134.815C33.2581 134.815 33.9681 134.544 34.5096 134.002C35.5926 132.919 35.5926 131.164 34.5096 130.081L32.5488 128.12L34.5096 126.159C35.5933 125.076 35.5933 123.321 34.5096 122.238Z" fill="#B2B0AF" />
        <Path d="M183.15 22.8493C182.018 21.7169 180.182 21.7169 179.05 22.8493L177 24.8995L174.95 22.8493C173.817 21.7169 171.982 21.7169 170.849 22.8493C169.717 23.9817 169.717 25.8173 170.849 26.9496L172.899 28.9998L170.849 31.05C169.717 32.1824 169.717 34.018 170.849 35.1503C171.415 35.7165 172.158 36 172.899 36C173.641 36 174.383 35.7165 174.95 35.1503L177 33.1002L179.05 35.1503C179.616 35.7165 180.358 36 181.1 36C181.842 36 182.584 35.7165 183.15 35.1503C184.283 34.018 184.283 32.1824 183.15 31.05L181.1 28.9998L183.15 26.9496C184.283 25.8165 184.283 23.9817 183.15 22.8493Z" fill="#B2B0AF" />
        <Path d="M48.0407 122.573C49.5723 122.573 50.814 121.332 50.814 119.8C50.814 118.268 49.5723 117.027 48.0407 117.027C46.509 117.027 45.2673 118.268 45.2673 119.8C45.2673 121.332 46.509 122.573 48.0407 122.573Z" fill="#B2B0AF" />
        <Path d="M39.7206 92.0667C41.2523 92.0667 42.4939 90.825 42.4939 89.2933C42.4939 87.7616 41.2523 86.52 39.7206 86.52C38.1889 86.52 36.9473 87.7616 36.9473 89.2933C36.9473 90.825 38.1889 92.0667 39.7206 92.0667Z" fill="#B2B0AF" />
        <Defs>
          <LinearGradient id="paint0_linear_25_167" x1="233.772" y1="-78.6208" x2="31.1342" y2="180.006" gradientUnits="userSpaceOnUse">
            <Stop stop-color="#F5EDFF" />
            <Stop offset="1" stop-color="#CACACA" stop-opacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Text style={Styles.dashboardText}>
        No {props.data}
      </Text>
      <Text >
        {props.data === "Interviews" ? "No interviews taken lets keep on trying we will find something!" : "You have never applied please start applying!"}
      </Text>

    </View>
  );
};

export default MySvg;