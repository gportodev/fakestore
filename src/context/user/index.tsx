import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../../dtos/ProductDTO';

// import AsyncStorage from '@react-native-async-storage/async-storage';

type UserProps = {
  children: ReactNode;
};

type LangContext = {
  favorites: Product[] | [];
  addFavorite: (item: Product) => void;
};

const defaultValue: LangContext = {
  favorites: [],
  addFavorite: () => {},
};

const UserContext = createContext(defaultValue);

function UserProvider({ children }: UserProps): JSX.Element {
  const [favorites, setFavorites] = useState<Product[] | []>([]);

  const addFavorite = async (item: Product) => {
    // await AsyncStorage.setItem('language', language);
    setFavorites(state => [...state, item]);
  };

  useEffect(() => {
    const loadData = async () => {
      // const storedList = await AsyncStorage.getItem('language');
      // if (storedList) {
      //   setFavorites(storedList)
      // }
    };

    loadData();
  }, []);

  return (
    <UserContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  return context;
}

export { useUser, UserProvider };
