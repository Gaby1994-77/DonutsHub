import React, {useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import OrderCard from '../../components/OrderCard';
import styles from '../DetailsScreen/DetailsScreenStyles';

const SettingsScreen: React.FC = ({navigation}) => {
  const {state, dispatch} = useAppContext();
  const [total, setTotal] = useState<number>(0);

  useLayoutEffect(() => {
    let sum = 0;
    state.cart.forEach(item => {
      const price =
        typeof item.price === 'string' ? parseFloat(item.price) : item.price;
      sum += price * item.quantity;
    });
    setTotal(sum);

    navigation.setOptions({
      headerRight: () => (
        <View style={styles.button}>
          <Text style={styles.buttonText}>Total: ${total.toFixed(2)}</Text>
        </View>
      ),
    });
  }, [state.cart, navigation, total]);

  const removeFromCart = (id: string) => {
    dispatch({type: 'REMOVE_ITEM', payload: {id}});
  };

  return (
    <ScrollView style={styles.container}>
      {state.cart.map(item => (
        <OrderCard
          key={item.id}
          removeFromCart={() => removeFromCart(item.id)}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default SettingsScreen;
