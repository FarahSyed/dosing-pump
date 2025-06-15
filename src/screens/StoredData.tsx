import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import styles from '../styles/global';
import { getAllData } from '../utils/firebasemethods';

type Props = NativeStackScreenProps<RootStackParamList, 'StoredData'>;

const StoredDataScreen: React.FC<Props> = ({ route }) => {
    // const { data } = route.params;
    const [fetchedData, setFetchedData] = useState<any[]>([]);

    const fetchStoredData = async () => {
        try {
            const result = await getAllData('DosingPumpForms');
            setFetchedData(result);
            console.log('📥 Retrieved Data:', result);
        } catch (err) {
            console.error('❌ Error getting data:', err);
        }
    };


    useEffect(() => {
        fetchStoredData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={[styles.heading, styles.mt4]}>Stored Firestore Data</Text>
            {fetchedData.length > 0 ? (
                fetchedData.map((item, index) => (
                    <View key={item.id || index} style={{ marginVertical: 6 }}>
                        <Text style={styles.dataText}>Pump Name: {item.settings?.pumpName ?? 'N/A'}</Text>
                        <Text style={styles.dataText}>Container Size: {item.settings?.containerSize ?? 'N/A'}</Text>
                        <Text style={styles.dataText}>Doses/Day: {item.schedule?.dosesPerDay ?? 'N/A'}</Text>
                        <Text style={styles.dataText}>Volume/Day: {item.schedule?.volumePerDay ?? 'N/A'}</Text>
                        <Text style={styles.dataText}>Volume To Dispense: {item.manual?.volumeToDispense ?? 'N/A'}</Text>
                        <Text style={styles.dataText}>Calibration Time: {item.calibrate?.calibrationTime ?? 'N/A'}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.dataText}>No data found in Firestore.</Text>
            )}
        </ScrollView>
    );
};

export default StoredDataScreen;
