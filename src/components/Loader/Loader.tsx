import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  ReduceMotion,
} from 'react-native-reanimated';

import icon from 'assets/icon.png';
import styles from './styles';

function Loader() {
  const duration = 1000;

  const sv = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        rotateY: `${sv.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(360, { duration }),
      -1,
      false,
      () => {},
      ReduceMotion.System,
    );
  }, [sv]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={icon}
        style={[
          animatedStyle,
          {
            width: 200,
            height: 200,
          },
        ]}
      />
    </SafeAreaView>
  );
}

export { Loader };
