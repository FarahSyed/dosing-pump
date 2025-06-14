import React, { useState } from 'react';
import { ScrollView, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../styles/global';
import CuFullScreenLoader from '../components/CuFullScreenLoader';
import CuButton from '../components/CuButton';

type RootStackParamList = {
    Home: undefined;
    Settings: { onSubmit: (page: string, data: any) => void };
    Schedule: { onSubmit: (page: string, data: any) => void };
    Manual: { onSubmit: (page: string, data: any) => void };
    Calibrate: { onSubmit: (page: string, data: any) => void };
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type FormData = {
    settings: { pumpName: string; containerSize: number };
    schedule: { dosesPerDay: number; volumePerDay: number };
    manual: { volumeToDispense: number };
    calibrate: { calibrationTime: number };
};

type FormPage = {
    name: 'Settings' | 'Schedule' | 'Manual' | 'Calibrate';
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [fullScreenLoader, setFullScreenLoader] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        settings: { pumpName: '', containerSize: 0 },
        schedule: { dosesPerDay: 0, volumePerDay: 0 },
        manual: { volumeToDispense: 0 },
        calibrate: { calibrationTime: 0 },
    });

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
                        {formPages.map((page, i) => (
                            <CuButton key={i} label={page.name}
                                onPress={() =>
                                    navigation.navigate(page.name, { onSubmit: handleFormSubmit })
                                }
                                moreStyles={{ marginVertical: 5 }}
                            />
                        ))}
                        <Text style={[styles.dataText as StyleProp<TextStyle>, styles.mt4]}>
                            Data: {JSON.stringify(formData, null, 2)}
                        </Text>
                    </ScrollView>
                </View>
            )}
        </>
    );
};


export default Home;