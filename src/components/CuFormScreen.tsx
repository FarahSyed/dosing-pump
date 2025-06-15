import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import CuButton from './CuButton';
import styles from '../styles/global';

type Field = {
    label: string;
    key: string;
    placeholder: string;
    type?: 'text' | 'numeric';
};

type FormScreenProps = {
    title: string;
    fields: Field[];
    submitBtnLabel: string;
    onSubmit: (data: Record<string, any>) => void;
    onBack: () => void;
    initialValues?: Record<string, any>;
};

const CuFormScreen: React.FC<FormScreenProps> = ({
    title,
    fields,
    submitBtnLabel,
    onSubmit,
    onBack,
    initialValues = {},
}) => {
    const [formState, setFormState] = useState<Record<string, string>>(
        () => Object.fromEntries(fields.map(f => [f.key, initialValues[f.key]?.toString() || '']))
    );

    const handleChange = (key: string, value: string) => {
        setFormState(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        const parsedData = Object.fromEntries(
            fields.map(f => [
                f.key,
                f.type === 'numeric' ? Number(formState[f.key]) || 0 : formState[f.key],
            ])
        );
        onSubmit(parsedData);
    };

    return (
        <View style={styles.container as StyleProp<ViewStyle>}>
            {/* <Text style={styles.heading as StyleProp<TextStyle>}>{title}</Text> */}
            {fields.map(field => (
                <View key={field.key} style={[{
                    width: '80%'
                    , alignSelf: 'center',
                    alignItems: "center"
                }]}>
                    <Text style={styles.label as StyleProp<TextStyle>}>{field.label}</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={formState[field.key]}
                        onChangeText={val => handleChange(field.key, val)}
                        keyboardType={field.type === 'numeric' ? 'numeric' : 'default'}
                        placeholder={field.placeholder}
                    />
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <CuButton label={submitBtnLabel ?? "Submit"} onPress={handleSubmit} />
                <CuButton label="Back" onPress={onBack} />
            </View>
        </View>
    );
};


export default CuFormScreen;