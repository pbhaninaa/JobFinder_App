import React from 'react';
import {View} from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';


export default SecondSvg = () => {
    return (   
            <View style={{ position: 'absolute', top: 1, right: 5 }}>
                <Svg width={320} height={250} viewBox="0 0 96 147" fill="none">
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_3_241"
                            x1="-42.188"
                            y1="76.264"
                            x2="140.097"
                            y2="83.5563"
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#466EF9" stopOpacity={0.56} />
                            <Stop offset={1} stopColor="red" stopOpacity={0} />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d="M-17.1499 90.2959C-10.8368 68.9221 -23.8519 59.3235 -31.1486 57.196C-69.1188 42.8759 -17.8722 -34.3946 8.11877 20.2062C34.1097 74.807 41.9668 61.778 81.2589 67.7997C120.551 73.8213 72.2895 125.479 27.9742 142.467C-16.3412 159.455 -25.0413 117.013 -17.1499 90.2959Z"
                        fill="url(#paint0_linear_3_241)"
                    />
                </Svg>
            </View>
    )
}