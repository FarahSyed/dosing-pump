import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import styles from '../styles/global';

interface CuChipProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
  source?: ImageSourcePropType;
  touchableStyle?: StyleProp<ViewStyle>;
  imgStyle?: StyleProp<ImageStyle>;
}

const CuChip: React.FC<CuChipProps> = ({
  label,
  onPress,
  touchableStyle,
  loading = false,
  source,
  imgStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.chip, touchableStyle]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="#ddd" animating={true} size={35} />
      ) : (
        <View
          style={[
            styles.flexRow,
            styles.flexCenter,
            { justifyContent: 'space-around' },
          ]}
        >
          {source ? (
            <View
              style={[
                styles.flexCenter,
                styles.roundedPill,
                styles.bgWhite,
                { width: 30, height: 30, marginRight: 6 },
              ]}
            >
              <Image
                source={source}
                style={[
                  styles.roundedPill,
                  {
                    width: 30,
                    height: 30,
                    resizeMode: 'cover',
                    ...(imgStyle as object),
                  },
                ]}
              />
            </View>
          ) : null}

          <Text
            style={[
              styles.textWhite,
              styles.fs,
              { textTransform: 'capitalize' },
            ]}
          >
            {label}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CuChip;