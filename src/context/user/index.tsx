import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../../dtos/ProductDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { Alert } from 'react-native';

type UserProps = {
  children: ReactNode;
};

type UseContext = {
  list: Product[] | [];
  favorites: Product[] | [];
  addFavorite: (item: Product) => void;
  removeFavorite: (item: Product) => void;
  search: string;
  setSearch: (value: string) => void;
};

const defaultValue: UseContext = {
  list: [],
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  search: '',
  setSearch: () => {},
};

const UserContext = createContext(defaultValue);

const itemsListKey = 'list';
const favoritesListKey = 'favorites';

function UserProvider({ children }: UserProps): JSX.Element {
  const [list, setList] = useState<Product[] | []>([]);
  const [favorites, setFavorites] = useState<Product[] | []>([]);
  const [search, setSearch] = useState('');

  const fetchList = async () => {
    try {
      const { data } = await api.get('/products');

      if (data) {
        setList(data);
      }
    } catch (error) {
      console.log(error);

      Alert.alert('Oops!', "We couldn't load the list right now.");
    }
  };

  const addFavorite = async (item: Product) => {
    const arr = [...favorites, item];

    const jsonList = JSON.stringify(arr);

    await AsyncStorage.setItem(favoritesListKey, jsonList);

    setFavorites(arr);
  };

  const removeFavorite = async (item: Product) => {
    const newFavoriteList = favorites.filter(element => element.id !== item.id);

    const jsonList = JSON.stringify(newFavoriteList);

    await AsyncStorage.setItem(favoritesListKey, jsonList);

    setFavorites(newFavoriteList);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedList = await AsyncStorage.getItem(itemsListKey);
        if (storedList) {
          const parsedList = JSON.parse(storedList);

          setList(parsedList);
        } else {
          fetchList();
        }
      } catch (error) {
        console.log(error);

        Alert.alert('Oops!', "We couldn't load the list right now.");
      }
    };

    const loadFavorites = async () => {
      const storedList = await AsyncStorage.getItem(favoritesListKey);
      if (storedList) {
        const parsedList = JSON.parse(storedList);

        setFavorites(parsedList);
      }
    };

    loadData();
    loadFavorites();
  }, []);

  return (
    <UserContext.Provider
      value={{
        list,
        favorites,
        addFavorite,
        removeFavorite,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  return context;
}

export { useUser, UserProvider };
