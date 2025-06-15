import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CuFormScreen from '../components/CuFormScreen';

type CalibrateProps = NativeStackScreenProps<RootStackParamList, 'Calibrate'>;

const Calibrate: React.FC<CalibrateProps> = ({ navigation, route }) => {
  return (
    <CuFormScreen
      title="Calibrate"
      fields={[
        {
          label: 'Calibration Time (secs)',
          key: 'calibrationTime',
          placeholder: 'Enter calibration time',
          type: 'numeric',
        },
      ]}
      initialValues={{
        calibrationTime:
          route.params?.calibrationTime && route.params.calibrationTime !== 0
            ? route.params.calibrationTime.toString()
            : '',
      }}
      submitBtnLabel="Start Calibration"
      onSubmit={(data) => {
        route.params?.onSubmit('Calibrate', {
          calibrationTime: Number(data.calibrationTime) || 0,
        });
        navigation.goBack();
      }}
      onBack={() => navigation.goBack()}
    />
  );
};


export default Calibrate;