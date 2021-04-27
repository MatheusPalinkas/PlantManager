import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { Text, View, Animated } from 'react-native';

interface PlantCardSecondaryProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

import styles from './styles';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export function PlantCardSecondary({
  data,
  handleRemove,
  ...props
}: PlantCardSecondaryProps){
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View style={styles.remove}>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather
                name="trash"
                size={32}
                color={colors.white}
              />
            </RectButton> 
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={styles.container}
        activeOpacity={.5}
        {...props}
      >
        <SvgFromUri
          uri={data.photo}
          width={60}
          height={60}
        />
        <Text style={styles.title}>
          {data.name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regar às 
          </Text>
          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  );
}