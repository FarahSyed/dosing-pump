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

type ScheduleProps = NativeStackScreenProps<RootStackParamList, 'Schedule'>;

const Schedule: React.FC<ScheduleProps> = ({ navigation, route }) => {
  const [dosesPerDay, setDosesPerDay] = useState<string>('');
  const [volumePerDay, setVolumePerDay] = useState<string>('');

  const handleSave = () => {
    const data = {
      dosesPerDay: Number(dosesPerDay) || 0,
      volumePerDay: Number(volumePerDay) || 0,
    };
    route.params?.onSubmit('Schedule', data);
    navigation.goBack();
  };

  return (
    <View style={styles.container} >
      <Text style={styles.label}>Doses Per Day</Text>
      <TextInput
        style={styles.inputBox}
        value={dosesPerDay}
        onChangeText={setDosesPerDay}
        keyboardType="numeric"
        placeholder="Enter doses per day"
      />
      <Text style={styles.label}>Volume Per Day (ml)</Text>
      <TextInput
        style={styles.inputBox}
        value={volumePerDay}
        onChangeText={setVolumePerDay}
        keyboardType="numeric"
        placeholder="Enter volume per day"
      />
      <View style={styles.buttonContainer}>
        <CuButton label='Save' onPress={handleSave} />
        <CuButton label='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};


export default Schedule;