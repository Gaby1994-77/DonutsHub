import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';
import styles from './DetailsScreenStyles';
import {mockData} from '../../components/mockData';
import {useAppContext} from '../../context/AppContext';

const DetailsScreen: React.FC = () => {
  const {state, dispatch} = useAppContext();
  const navigation = useNavigation();
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    const totalQuantity = state.cart.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    setCartQuantity(totalQuantity);
  }, [state.cart]);

  const incrementItemQuantity = (itemId: string) => {
    const item = mockData.find(item => item.id === itemId);
    if (!item) return;
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: {...item, quantity: 1},
    });
  };

  const decrementItemQuantity = (itemId: string) => {
    const item = mockData.find(item => item.id === itemId);
    if (!item) return;
    dispatch({
      type: 'DECREMENT_ITEM',
      payload: {...item, quantity: 1},
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.button}>
          <Text style={styles.buttonText}>Cart</Text>
          {cartQuantity > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartQuantity}</Text>
            </View>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, cartQuantity]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <Card
            {...item}
            incrementCartQuantity={() => incrementItemQuantity(item.id)}
            decrementCartQuantity={() => decrementItemQuantity(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.customNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'white', fontSize: 18}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
