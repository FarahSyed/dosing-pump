import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CuFormScreen from '../components/CuFormScreen';

type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const Settings: React.FC<SettingsProps> = ({ navigation, route }) => {
  return (
    <CuFormScreen
      title="Settings"
      fields={[
        {
          label: 'Pump Name',
          key: 'pumpName',
          placeholder: 'Enter pump name',
          type: 'text',
        },
        {
          label: 'Container Size (ml)',
          key: 'containerSize',
          placeholder: 'Enter container size',
          type: 'numeric',
        },
      ]}
      initialValues={{
        pumpName: route.params?.pumpName || '',
        containerSize:
          route.params?.containerSize && route.params.containerSize !== 0
            ? route.params.containerSize.toString()
            : '',
      }}
      submitBtnLabel="Save"
      onSubmit={(data) => {
        route.params?.onSubmit('Settings', {
          pumpName: data.pumpName,
          containerSize: Number(data.containerSize) || 0,
        });
        navigation.goBack();
      }}
      onBack={() => navigation.goBack()}
    />
  );
};


export default Settings;