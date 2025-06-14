import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
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

type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const Settings: React.FC<SettingsProps> = ({ navigation, route }) => {
  const [pumpName, setPumpName] = useState<string>('');
  const [containerSize, setContainerSize] = useState<string>('');

  const handleSave = () => {
    const data = {
      pumpName,
      containerSize: Number(containerSize) || 0,
    };
    route.params?.onSubmit('Settings', data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pump Name</Text>
      <TextInput
        style={styles.inputBox}
        value={pumpName}
        onChangeText={setPumpName}
        placeholder="Enter pump name"
      />
      <Text style={styles.label}>Container Size (ml)</Text>
      <TextInput
        style={styles.inputBox}
        value={containerSize}
        onChangeText={setContainerSize}
        keyboardType="numeric"
        placeholder="Enter container size"
      />
      <View style={styles.buttonContainer}>
        <CuButton label='Save' onPress={handleSave} />
        <CuButton label='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Settings;