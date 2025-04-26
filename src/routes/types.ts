import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { Product } from '../dtos/ProductDTO';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type StackParamList = {
  Home: undefined;
  Detail: {
    item: Product;
  };
};

type TabParamList = {
  Main: NavigatorScreenParams<StackParamList>;
  Favorites: undefined;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

type FavoriteProps = {
  navigation: BottomTabNavigationProp<TabParamList, 'Favorites'>;
};

type DetailProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Detail'>;
  route: RouteProp<StackParamList, 'Detail'>;
};

export { StackParamList, TabParamList, HomeProps, FavoriteProps, DetailProps };
