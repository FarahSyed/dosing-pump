import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CuFormScreen from '../components/CuFormScreen';

type ManualProps = NativeStackScreenProps<RootStackParamList, 'Manual'>;

const Manual: React.FC<ManualProps> = ({ navigation, route }) => {
  return (
    <CuFormScreen
      title="Manual"
      fields={[
        {
          label: 'Volume to Dispense (ml)',
          key: 'volumeToDispense',
          placeholder: 'Enter volume to dispense',
          type: 'numeric',
        },
      ]}
      initialValues={{
        volumeToDispense:
          route.params?.volumeToDispense && route.params.volumeToDispense !== 0
            ? route.params.volumeToDispense.toString()
            : '',
      }}
      submitBtnLabel="Dispense"
      onSubmit={(data) => {
        route.params?.onSubmit('Manual', {
          volumeToDispense: Number(data.volumeToDispense) || 0,
        });
        navigation.goBack();
      }}
      onBack={() => navigation.goBack()}
    />
  );
};


export default Manual;