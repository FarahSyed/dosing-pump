import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CuFormScreen from '../components/CuFormScreen';

type ScheduleProps = NativeStackScreenProps<RootStackParamList, 'Schedule'>;

const Schedule: React.FC<ScheduleProps> = ({ navigation, route }) => {
  return (
    <CuFormScreen
      title="Schedule"
      fields={[
        {
          label: 'Doses Per Day',
          key: 'dosesPerDay',
          placeholder: 'Enter doses per day',
          type: 'numeric',
        },
        {
          label: 'Volume Per Day (ml)',
          key: 'volumePerDay',
          placeholder: 'Enter volume per day',
          type: 'numeric',
        },
      ]}
      initialValues={{
        dosesPerDay:
          route.params?.dosesPerDay && route.params.dosesPerDay !== 0
            ? route.params.dosesPerDay.toString()
            : '',
        volumePerDay:
          route.params?.volumePerDay && route.params.volumePerDay !== 0
            ? route.params.volumePerDay.toString()
            : '',
      }}
      submitBtnLabel="Save"
      onSubmit={(data) => {
        route.params?.onSubmit('Schedule', {
          dosesPerDay: Number(data.dosesPerDay) || 0,
          volumePerDay: Number(data.volumePerDay) || 0,
        });
        navigation.goBack();
      }}
      onBack={() => navigation.goBack()}
    />
  );
};

export default Schedule;
