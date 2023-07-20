import * as React from 'react';

import { useEffect,useState,useTransition } from 'react';
import { Pressable, View, Text } from 'react-native';

  /*

function onMessage(event) {
  var state = JSON.parse(event.data);
  console.log(state);

  document.getElementById('DeviceID').innerHTML = state.DeviceID;
  document.getElementById('temperature').innerHTML = state.temperature;

  document.getElementById('gyroscope_x').innerHTML = state.gyroscope.X;
  document.getElementById('gyroscope_y').innerHTML = state.gyroscope.Y;
  document.getElementById('gyroscope_z').innerHTML = state.gyroscope.Z;

  document.getElementById('accelerometer_x').innerHTML = state.accelerometer.X;
  document.getElementById('accelerometer_y').innerHTML = state.accelerometer.Y;
  document.getElementById('accelerometer_z').innerHTML = state.accelerometer.Z;

}  */
const ws = new WebSocket('ws://192.168.178.63/ws');


function Home({ navigation }) {


    const calibrate = ()=>{
      setDoCalibration(true);
    }

    const onMessage = (event)=>{
      var state = JSON.parse(event.data);
      console.log(state);
      if (doCalibration==true){
        setOffsetGyroX(state.gyroscope.X);
        setOffsetGyroY(state.gyroscope.Y);
        setOffsetGyroZ(state.gyroscope.Z);

        setOffsetAccelX(state.accelerometer.X);
        setOffsetAccelY(state.accelerometer.Y);
        setOffsetAccelZ(state.accelerometer.Z);
        
        setDoCalibration(false);
      }

      setGyroX(Math.round((state.gyroscope.X - offsetGyroX)*10)/10);
      setGyroY(Math.round((state.gyroscope.Y - offsetGyroY)*10)/10);
      setGyroZ(Math.round((state.gyroscope.Z - offsetGyroZ)*10)/10);
      setAccelX(Math.round((state.accelerometer.X - offsetAccelX )/1000)/10);
      setAccelY(Math.round((state.accelerometer.Y - offsetAccelY )/1000)/10);
      setAccelZ(Math.round((state.accelerometer.Z - offsetAccelZ )/1000)/10);
    };
    ws.onmessage = onMessage;

    const [doCalibration,setDoCalibration] = useState(false);

    const [gyroX,setGyroX] = useState(0);
    const [gyroY,setGyroY] = useState(0);
    const [gyroZ,setGyroZ] = useState(0);
    const [offsetGyroX,setOffsetGyroX] = useState(0);
    const [offsetGyroY,setOffsetGyroY] = useState(0);
    const [offsetGyroZ,setOffsetGyroZ] = useState(0);


    const [accelX,setAccelX] = useState(0);
    const [accelY,setAccelY] = useState(0);
    const [accelZ,setAccelZ] = useState(0);
    const [offsetAccelX,setOffsetAccelX] = useState(0);
    const [offsetAccelY,setOffsetAccelY] = useState(0);
    const [offsetAccelZ,setOffsetAccelZ] = useState(0);

    useEffect(() => {

    }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Gyroscope</Text>
        <Text>X {gyroX}</Text>
        <Text>Y {gyroY}</Text>
        <Text>Z {gyroZ}</Text>

        <Text>Accelerometer</Text>
        <Text>X {accelX}</Text>
        <Text>Y {accelY}</Text>
        <Text>Z {accelZ}</Text>

         <Pressable
          onPress={calibrate}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Kalibrieren</Text>
        </Pressable>
      </View>
    );
  }

  export default Home;