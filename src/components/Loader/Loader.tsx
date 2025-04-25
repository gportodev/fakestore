import React from 'react';
import { ActivityIndicator, View } from 'react-native';

type LoaderProps = {
  fullscreen?: boolean;
};

function Loader({ fullscreen = false }: LoaderProps) {
  return (
    <View style={fullscreen && { flex: 1 }}>
      <ActivityIndicator />
    </View>
  );
}

export { Loader };
