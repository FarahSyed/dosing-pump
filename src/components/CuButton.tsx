import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from '../styles/global';

interface CuButtonProps {
    label: string;
    onPress: () => void;
    touchableStyle?: StyleProp<ViewStyle>;
    moreStyles?: StyleProp<ViewStyle>;
    loading?: boolean;
}

const CuButton: React.FC<CuButtonProps> = ({
    label,
    onPress,
    moreStyles,
    loading = false,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.btn, moreStyles]}
            onPress={onPress}
        >
            {loading ? (
                <ActivityIndicator color="#ddd" animating={true} size={35} />
            ) : (
                <Text style={[styles.textWhite, styles.fs]}>{label}</Text>
            )}
        </TouchableOpacity>
    );
};

export default CuButton;