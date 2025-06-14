import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../styles/global';
import CuButton from '../components/CuButton';

type RootStackParamList = {
  Home: undefined;
  Settings: { onSubmit: (page: string, data: any) => void };
  Schedule: { onSubmit: (page: string, data: any) => void };
  Manual: { onSubmit: (page: string, data: any) => void };
  Calibrate: { onSubmit: (page: string, data: any) => void };
};

type CalibrateProps = NativeStackScreenProps<RootStackParamList, 'Calibrate'>;

const Calibrate: React.FC<CalibrateProps> = ({ navigation, route }) => {
  const [calibrationTime, setCalibrationTime] = useState<string>('');

  const handleStartCalibration = () => {
    const data = {
      calibrationTime: Number(calibrationTime) || 0,
    };
    route.params?.onSubmit('Calibrate', data);
    navigation.goBack();
  };

  return (
    <View style={styles.container} >
      <Text style={styles.label}>Calibration Time (secs)</Text>
      < TextInput
        style={styles.inputBox}
        value={calibrationTime}
        onChangeText={setCalibrationTime}
        keyboardType="numeric"
        placeholder="Enter calibration time"
      />
      <View style={styles.buttonContainer}>
        <CuButton label='Start Calibration' onPress={handleStartCalibration} />
        <CuButton label='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};


export default Calibrate;