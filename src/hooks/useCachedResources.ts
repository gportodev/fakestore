import { useFonts } from 'expo-font';

export default function CachedResources(): boolean {
  const [fontsLoaded] = useFonts({
    Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf'),
    Roboto_SemiBold: require('../assets/fonts/Roboto-SemiBold.ttf'),
    Roboto_Bold: require('../assets/fonts/Roboto-Medium.ttf'),
  });

  return fontsLoaded;
}
