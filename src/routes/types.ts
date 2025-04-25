import { NavigatorScreenParams } from '@react-navigation/native';
import { Product } from '../dtos/ProductDTO';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  Home: undefined;
  Detail: {
    item: Product;
  };
};

type TabParamList = {
  Home: NavigatorScreenParams<StackParamList>;
  Favorites: undefined;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

export { StackParamList, TabParamList, HomeProps };
