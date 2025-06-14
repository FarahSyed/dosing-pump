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

type ManualProps = NativeStackScreenProps<RootStackParamList, 'Manual'>;

const Manual: React.FC<ManualProps> = ({ navigation, route }) => {
  const [volumeToDispense, setVolumeToDispense] = useState<string>('');

  const handleDispense = () => {
    const data = {
      volumeToDispense: Number(volumeToDispense) || 0,
    };
    route.params?.onSubmit('Manual', data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Volume to Dispense (ml)</Text>
      <TextInput
        style={styles.inputBox}
        value={volumeToDispense}
        onChangeText={setVolumeToDispense}
        keyboardType="numeric"
        placeholder="Enter volume to dispense"
      />
      <View style={styles.buttonContainer}>
        <CuButton label='Dispense' onPress={handleDispense} />
        <CuButton label='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Manual;