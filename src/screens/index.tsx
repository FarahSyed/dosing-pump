import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleProp, ViewStyle, TextStyle, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../styles/global';
import CuFullScreenLoader from '../components/CuFullScreenLoader';
import CuButton from '../components/CuButton';
import { RootStackParamList } from '../types/types';
import { getAllData, sendData } from '../utils/firebasemethods';
import { isFormValid } from '../utils/helpermethods';


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type FormData = {
    settings: { pumpName: string; containerSize: string | number };
    schedule: { dosesPerDay: string | number; volumePerDay: string | number };
    manual: { volumeToDispense: string | number };
    calibrate: { calibrationTime: string | number };
};

type FormPage = {
    name: 'Settings' | 'Schedule' | 'Manual' | 'Calibrate';
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [fullScreenLoader, setFullScreenLoader] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        settings: { pumpName: '', containerSize: '' },
        schedule: { dosesPerDay: '', volumePerDay: '' },
        manual: { volumeToDispense: '' },
        calibrate: { calibrationTime: '' },
    });

    const storeDataToFirestore = async () => {
        const fullData = {
            settings: formData.settings,
            schedule: formData.schedule,
            manual: formData.manual,
            calibrate: formData.calibrate
        };

        if (!isFormValid(fullData)) {
            Alert.alert('Validation Error', 'Please fill in all required fields.');
            return;
        }

        try {
            await sendData('DosingPumpForms', fullData);
            Alert.alert('Success', 'Data saved successfully.');
        } catch (err) {
            console.error('❌ Error saving data:', err);
            Alert.alert('Error', 'Failed to save data.');
        }
    };


    const handleFormSubmit = (page: string, data: any) => {
        setFormData((prev) => ({ ...prev, [page.toLowerCase()]: data }));
    };

    const formPages: FormPage[] = [
        { name: 'Settings' },
        { name: 'Schedule' },
        { name: 'Manual' },
        { name: 'Calibrate' },
    ];

    return (
        <>
            {fullScreenLoader ? (
                <CuFullScreenLoader />
            ) : (
                <View style={styles.container as StyleProp<ViewStyle>}>
                    <ScrollView contentContainerStyle={styles.scrollContent as StyleProp<ViewStyle>}>
                        <Text style={[styles.heading as StyleProp<TextStyle>, styles.mb4]}>Dosing Pump Status</Text>
                        {formPages.map((page, i) => {
                            const handlePress = async () => {
                                switch (page.name) {
                                    case 'Settings':
                                        navigation.navigate('Settings', {
                                            onSubmit: handleFormSubmit,
                                            pumpName: formData.settings.pumpName,
                                            containerSize: formData.settings.containerSize as number,
                                        });
                                        break;
                                    case 'Schedule':
                                        navigation.navigate('Schedule', {
                                            onSubmit: handleFormSubmit,
                                            dosesPerDay: formData.schedule.dosesPerDay as number,
                                            volumePerDay: formData.schedule.volumePerDay as number,
                                        });
                                        break;
                                    case 'Manual':
                                        navigation.navigate('Manual', {
                                            onSubmit: handleFormSubmit,
                                            volumeToDispense: formData.manual.volumeToDispense as number,
                                        });
                                        break;
                                    case 'Calibrate':
                                        navigation.navigate('Calibrate', {
                                            onSubmit: handleFormSubmit,
                                            calibrationTime: formData.calibrate.calibrationTime as number,
                                        });
                                        break;
                                }
                            };

                            return (
                                <CuButton
                                    key={i}
                                    label={page.name}
                                    onPress={handlePress}
                                    moreStyles={{ marginVertical: 5 }}
                                />
                            );
                        })}

                        <CuButton
                            label="Store to Firestore"
                            onPress={storeDataToFirestore}
                            moreStyles={styles.mt4}
                        />
                        <CuButton
                            label="View Stored Data"
                            onPress={() => {
                                navigation.navigate('StoredData');
                            }}
                            moreStyles={styles.mt1}
                        />

                    </ScrollView>
                </View>
            )}
        </>
    );
};


export default Home;